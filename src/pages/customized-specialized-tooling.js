import Customized from "@/components/Customized/Customized";
import Head from "next/head";

function CustomizedPage() {
  return (
    <>
      <Head>
        <title>Customized Specialized Tooling</title>
        <meta name="description" content="Create, edit, and manage notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Customized/>
    </>
  )
}

export default CustomizedPage;
