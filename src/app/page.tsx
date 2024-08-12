import dynamic from "next/dynamic";

const DynamicApp = dynamic(async () => import("./components/app"), {
  ssr: false,
});

export default function Home() {
  return <DynamicApp />;
}
