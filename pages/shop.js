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
      </Head>
      <ShopComponent
        products={products}
      />
    </div>
  )
}

export default Shop
