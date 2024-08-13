"use client";

export default function ErrorPage({error}: {error: Error}) {
  console.error(error);

  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr] px-2 sm:px-4">
      <h1 className="my-2 text-3xl sm:text-4xl sm:leading-[4rem]">
        {" "}
        <strong>¡Ups! Algo salió Mal</strong>
      </h1>
      <section>
        <h2 className="my-2 text-xl sm:text-2xl sm:leading-8">
          Si estás usando <strong>Firefox</strong>, debemos habilitar la función{" "}
          <strong>SpeechRecognition</strong>
        </h2>
        <ul>
          <li>
            <p className="my-2 text-lg sm:text-xl sm:leading-8">
              En la barra del navegador nos dirigimos a <strong>about:config</strong>
            </p>
          </li>
          <li className="hidden sm:contents">
            <img
              alt="Imagen que muestra una advertencia sobre configuración avanzada de Firefox"
              className="my-2 rounded"
              src="/enable-webspeech-firefox-1.webp"
            />
          </li>
          <li>
            <p className="my-2 text-lg sm:text-xl sm:leading-8">
              Aceptamos y buscamos <strong>speech</strong>
            </p>
          </li>
          <li>
            <p className="my-2 text-lg sm:text-xl sm:leading-8">
              Vamos a habilitar las primeras dos opciones que aparecen clickeando el botón de la
              derecha:
            </p>
          </li>
          <li>
            <p className="my-2 text-lg sm:text-xl sm:leading-8">
              <strong>media.webspeech.recognition.enable</strong>
            </p>
          </li>
          <li>
            <p className="my-2 text-lg sm:text-xl sm:leading-8">
              <strong>media.webspeech.recognition.force_enable</strong>
            </p>
          </li>
          <li className="hidden sm:contents">
            <img
              alt="Imagen que muestra las opciones a habilitar utilizando Firefox"
              className="my-2 rounded"
              src="/enable-webspeech-firefox-2.webp"
            />
          </li>
          <li>
            <p className="my-2 text-lg sm:text-xl sm:leading-8">
              Una vez que figuren habilitadas, podés refrescar la página para empezar a utilizar la
              app
            </p>
          </li>
        </ul>
        <button
          className="my-6 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          type="button"
          onClick={() => location.reload()}
        >
          Refrescar página
        </button>
      </section>
    </main>
  );
}
