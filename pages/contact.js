import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your message!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
