import Head from "next/head"

export default function Home() {
   return (
      <div>
         <Head>
            <title>Amazon 2.0</title>
         </Head>
         <main className="max-w-screen-2xl mx-auto">

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