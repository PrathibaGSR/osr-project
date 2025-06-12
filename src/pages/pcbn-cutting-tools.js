import PCBN from "@/components/PCBN/PCBN";
import Head from "next/head";

function PCBNPage() {
  return (
    <>
      <Head>
        <title>PCBN Cutting Tools</title>
        <meta name="description" content="Create, edit, and manage notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <PCBN/>
    </>
  )
}

export default PCBNPage;
