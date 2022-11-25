import moment from "moment/moment"
import { getSession, useSession } from "next-auth/react"
import React from "react"
import db from "../../firebase"
import Header from "../components/Header"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import Order from "../components/Order"

const OrdersPage = ({ orders }) => {
   const {data: session} = useSession()
   
   return (
      <div>
         <Header />
         <main className="max-w-screen-lg mx-auto p-10">
            <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
               Your Orders
            </h1>
            {session ? (
               <h2>{orders.length} Ordsers</h2>
            ) : (
               <h2>Please sign in to see your orders</h2>
            )}

            <div className="mt-5 space-y-4">
               {orders?.map(order =>(
                  <Order {...order}/>
               ))}
            </div>
         </main>
      </div>
   )
}

export default OrdersPage

export async function getServerSideProps(context) {
   const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
   const session = await getSession(context)
   if (!session) {
      return {
         props: {},
      }
   }
   const ref = query(
      collection(
         db, 
         "users",
         session.user.email,
         "orders"
      ),
      orderBy("timestamp")
   )
   const stripeOrders = await getDocs(ref)
   const orders = await Promise.all(
      stripeOrders.docs.map(async order =>({
         id: order.id,
         ...order.data(),
         timestamp: moment(order.data().timestamp.toDate()).unix(),
         items: (
            await stripe.checkout.sessions.listLineItems(order.id, {
               limit: 100,
            })
         ).data
      }))
   )
   return {
      props:{
         orders
      }
   }
}
