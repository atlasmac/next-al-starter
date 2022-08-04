import '../styles/globals.css';
import { FormspreeProvider } from '@formspree/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import {useEffect, useState } from 'react';





function MyApp({ Component, pageProps }) {
  const [showHeaderLogo, setShowHeaderLogo] = useState(true)
  
  return (
    <div >
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
    </div>

  )

}

export default MyApp
