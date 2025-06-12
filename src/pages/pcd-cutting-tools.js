import PCD from "@/components/PCD/PCD";
import Head from "next/head";

function PCDPage() {
  return (
    <>
      <Head>
        <title>PCD Cutting Tools</title>
        <meta name="description" content="Create, edit, and manage notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <PCD/>
    </>
  )
}

export default PCDPage;
