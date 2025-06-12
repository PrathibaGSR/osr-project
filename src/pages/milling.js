import Milling from "@/components/Milling/Milling";
import Head from "next/head";

function MillingPage() {
  return (
    <>
      <Head>
        <title>Milling</title>
        <meta name="description" content="Create, edit, and manage notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Milling />
    </>
  )
}

export default MillingPage;
