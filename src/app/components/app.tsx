"use client";

import {useEffect, useState} from "react";

import {type Message} from "../types";
import {getAnswer as getServerAnswer} from "../actions/action";

import ChatMessages from "./chatMessages";
import FormMessages from "./formMessages";
import SelectVoices from "./selectVoices";

const recognition = new webkitSpeechRecognition();
const synth = speechSynthesis;

recognition.continuous = true;
recognition.lang = "es-AR";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.start();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [language, setLanguage] = useState("");
  const [buffer, setBuffer] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      parts: [
        {
          text: "¡Hola! 👋 Bienvenido/a a EntrevistAIdor. Para una mejor experiencia, la aplicación siempre escuchará tu voz si lo permitís, pero también podés escribir tu mensaje. No olvides elegir a tu entrevistador en la parte inferior de la pantalla para poder escucharlo 👇 (Microsoft Edge hay muchas más). ¡Comencemos!",
        },
      ],
    },
  ]);
  const [textMessage, setTextMessage] = useState("");

  useEffect(() => {
    setVoices(synth.getVoices());
  }, []);

  // fired when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed
  synth.onvoiceschanged = () => {
    setVoices(synth.getVoices());
  };

  function saveMessages(role: "user" | "model", message: string) {
    setMessages((prevMessages) => {
      const newMessage = {
        role: role,
        parts: [{text: message}],
      } as Message;

      return [...prevMessages, newMessage];
    });
  }

  recognition.onspeechstart = () => {
    synth.cancel();
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join("");

    setBuffer(transcript);
    recognition.stop();
  };

  recognition.onspeechend = async () => {
    setIsLoading(true);

    saveMessages("user", buffer);

    const answer = await getServerAnswer(buffer);

    saveMessages("model", answer);

    setIsLoading(false);

    const utterance = new SpeechSynthesisUtterance(answer);

    utterance.voice = voices.find((voice) => voice.name === language)!;
    synth.speak(utterance);
  };

  recognition.onend = () => {
    recognition.start();
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    synth.cancel();
    setTextMessage("");

    setIsLoading(true);

    saveMessages("user", textMessage);

    const answer = await getServerAnswer(textMessage);

    saveMessages("model", answer);

    setIsLoading(false);

    const utterance = new SpeechSynthesisUtterance(answer);

    utterance.voice = voices.find((voice) => voice.name === language)!;
    synth.speak(utterance);
  }

  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto,auto] px-2 sm:px-4">
      <header className="text-xl font-bold leading-[4rem]">EntrevistAIdor</header>
      <ChatMessages messages={messages} />
      <section>
        <FormMessages
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          setTextMessage={setTextMessage}
          textMessage={textMessage}
        />
        <SelectVoices setLanguage={setLanguage} voices={voices} />
      </section>
      <footer className="text-center leading-[4rem] opacity-70">
        © {new Date().getFullYear()} EntrevistAIdor idea by{" "}
        <a href="https://github.com/goncy" rel="noopener noreferrer" target="_blank">
          Goncy
        </a>
      </footer>
    </main>
  );
}
