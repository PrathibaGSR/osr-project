import Tool from "@/components/Tool/Tool";
import Head from "next/head";

function ToolPage() {
  return (
    <>
      <Head>
        <title>Tool Holders</title>
        <meta name="description" content="Create, edit, and manage notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Tool/>
    </>
  )
}

export default ToolPage;
