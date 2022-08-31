import '../styles/globals.css';
import { FormspreeProvider } from '@formspree/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import {useEffect, useState } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [showHeaderLogo, setShowHeaderLogo] = useState(true)
  
  return (
    <div >
      <Head>
      <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>
      <Header
        showHeaderLogo={showHeaderLogo}
      />
      <Component
        {...pageProps}
        showHeaderLogo={showHeaderLogo}
        setShowHeaderLogo={setShowHeaderLogo}
      />
      <FormspreeProvider project="1995716952659590692">
        <ContactForm />
      </FormspreeProvider>
      <Footer />
      <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key={"YzI2ZGMwYjQtOTM4NS00MWJhLWIyMmMtY2E2NzhjOWY3ZjEzNjM3OTQ5NzgzMDA2MzU4NTUy"} style={{ zIndex: 10000000000 }} />
    </div>

  )

}

export default MyApp
