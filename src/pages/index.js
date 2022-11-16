import Head from "next/head"
import Banner from "../components/Banner"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ProductFeed from "../components/ProductFeed"

export default function Home({ products }) {
   return (
      <div>
         <Head>
            <title>Amazon 2.0</title>
         </Head>
         <main className="max-w-screen-2xl mx-auto">
            <Banner />
            <ProductFeed products={products} />
         </main>
      </div>
   )
}

export async function getServerSideProps() {
   const products = await fetch("https://fakestoreapi.com/products")
      .then(res => res.json())

   return {
      props: {
         products
      }
   }
}