import Head from "next/head"
import ShopComponent from "../components/ShopComponent"
import products from '../products.json';
import {useRouter } from "next/router";


const Shop = ({ setShowHeaderLogo, showHeaderLogo }) => {
  setShowHeaderLogo(true)
  const router = useRouter();
  
  router.reload();


  return (
    <div>
      <Head>
        <title>Als Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>
      <ShopComponent
        products={products}
      />
      <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="YzI2ZGMwYjQtOTM4NS00MWJhLWIyMmMtY2E2NzhjOWY3ZjEzNjM3OTQ5NzgzMDA2MzU4NTUy" style={{ zIndex: 10000000000 }} />
    </div>
  )
}

export default Shop
