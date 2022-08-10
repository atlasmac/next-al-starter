import React from "react";
import Head from "next/head"
import ShopComponent from "../components/ShopComponent"
import products from '../products.json';

//...



const Shop = ({ setShowHeaderLogo, showHeaderLogo }) => {
  setShowHeaderLogo(true)
  
  return (
    <div>
      <Head>
        <title>Al&apos;s Shop</title>
        <meta name="The shop for Al Maul Music" content="Al Maul's shop" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>
      <ShopComponent
        products={products}
      />
    </div>
  )
}

export default Shop
