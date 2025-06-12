import ContactUs from "@/components/ContactUs/ContactUs";
import Head from "next/head";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact US</title>
        <meta name="description" content="Create, edit, and manage notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <ContactUs/>
    </>
  )
}

export default ContactPage;
