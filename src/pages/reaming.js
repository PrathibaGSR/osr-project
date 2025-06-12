import Reaming from "@/components/Reaming/Reaming";
import Head from "next/head";

function ReamingPage() {
  return (
    <>
      <Head>
        <title>Reaming</title>
        <meta name="description" content="Create, edit, and manage notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Reaming />
    </>
  )
}

export default ReamingPage;
