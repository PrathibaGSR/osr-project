import Combination from "@/components/Combination/Combination";
import Head from "next/head";

function CombinationPage() {
  return (
    <>
      <Head>
        <title>Combination Tools</title>
        <meta name="description" content="Create, edit, and manage notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Combination />
    </>
  )
}

export default CombinationPage;
