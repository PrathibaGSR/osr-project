import Drilling from "@/components/Drilling/Drilling";
import Head from "next/head";

function DrillingPage() {
  return (
    <>
      <Head>
        <title>Drilling</title>
        <meta name="description" content="Create, edit, and manage notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Drilling />
    </>
  )
}

export default DrillingPage;
