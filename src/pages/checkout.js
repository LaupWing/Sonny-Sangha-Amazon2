import { useSession } from "next-auth/react"
import Image from "next/image"
import React from "react"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketSlice"

const CheckoutPage = () => {
   const items = useSelector(selectItems)
   const { data: session } = useSession()
   const total = useSelector(selectTotal)

   return (
      <div className="bg-gray-100">
         <Header />
         <main className="lg:flex max-w-screen-2xl mx-auto">
            <div className="flex-grow m-5 shadow-sm">
               <Image
                  src={"https://links.papareact.com/ikj"}
                  width={1020}
                  height={250}
                  className="object-contain"
               />

               <div className="flex flex-col p-5 space-y-10 bg-white">
                  <h1 className="text-3xl border-b pb-4">
                     {items.length === 0
                        ? "Your Amazon basket is empty"
                        : "Shopping Basket"}
                  </h1>

                  {items.map((item, i) => (
                     <CheckoutProduct
                        key={i}
                        category={item.category}
                        description={item.description}
                        hasPrime={item.hasPrime}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        title={item.title}
                     />
                  ))}
               </div>
            </div>
            <div className="flex flex-col bg-white p-10 shadow-md">
               {items.length > 0 && (
                  <>
                     <h2 className="whitespace-nowrap">
                        Subtotal ({items.length} items) :{" "}
                        <span className="font-bold">$ {total}</span>
                     </h2>
                     <button
                        role={"link"}
                        className={`button mt-2 ${
                           !session &&
                           "from-gray-300 to-gray-500 cursor-not-allowed border-gray-200 text-gray-300"
                        }`}
                        disabled={!session}
                     >
                        {!session
                           ? "Sign in to checkout"
                           : "Proceed to checkout"}
                     </button>
                  </>
               )}
            </div>
         </main>
      </div>
   )
}

export default CheckoutPage
