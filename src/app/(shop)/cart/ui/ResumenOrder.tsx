'use client'
import { useCartStore } from "@/store";
import { CurrencyFormat } from "@/utils";

import { useEffect, useState } from "react";

export const ResumenOrder = () => {

   const [loaded, setLoaded] = useState(false);

   const { getSummaryInformation } = useCartStore()

   const { itemsInCart, subTotal, tax, total } = getSummaryInformation()
   
   useEffect(() => {
         setLoaded(true);
    },[]);

    if( !loaded ) return <p>Cargando...</p>


  return (
    <>
       <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">

              <span>No. Productos</span>
              <span className="text-right">
                {itemsInCart === 1 ? '1 articulo ' : `${ itemsInCart} articulos`}artículos</span>
              
              <span>Subtotal</span>
              <span className="text-right">${CurrencyFormat (subTotal) }</span>
              
              
              <span>Impuestos (15%)</span>
              <span className="text-right">{CurrencyFormat (tax)}</span>
              
              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">{CurrencyFormat (total)}</span>


            </div>




          </div>
    </>
  )
}
