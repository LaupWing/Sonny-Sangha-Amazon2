import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { useSession } from "next-auth/react"
import Image from "next/image"
import React from "react"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketSlice"
const stripePromise = loadStripe(process.env.stripe_public_key)

const CheckoutPage = () => {
   const items = useSelector(selectItems)
   const { data: session } = useSession()
   const total = useSelector(selectTotal)

   const createCheckoutSession = async () => {
      const stripe = await stripePromise
      const checkoutSession = await axios.post("/api/create-checkout-session", {
         items,
         email: session.user.email,
      })

      const result = await stripe.redirectToCheckout({
         sessionId: checkoutSession.data.id,
      })

      if (result.error) {
         alert(result.error.message)
      }
   }

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
                        onClick={createCheckoutSession}
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
