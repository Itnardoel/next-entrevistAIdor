import dynamic from "next/dynamic";

const DynamicTest = dynamic(async () => import("./components/test"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return <DynamicTest />;
}
