'use client'

import { QuantitySelector } from "@/components"
import { useCartStore } from "@/store"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export const ProductCart = () => {
    const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
    const removeProduct = useCartStore( state => state.removeCartProduct );
    const [loaded, setLoaded] = useState(false);
    const productsInCart =  useCartStore( state => state.cart );
 
    useEffect(() => {
        setLoaded(true);
    },);
    
    if( !loaded ) {
        return <p>Cargando...</p>
    }

  

  return (
    <>
              {
            productsInCart.map( product => (

              <div key={`${product.slug}-${product.size}`} className="flex mb-5">
                <Image
                  src={ `/products/${ product.img}` }
                  width={ 100 }
                  height={ 100 }
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                  alt={ product.title }
                  className="mr-5 rounded"
                />

                <div>
                    <Link 
                    className="hover:underline cursor-pointer"  
                    href={`/product/${ product.slug }`}>
                    <p>{`${product.size}- ${product.title}`}</p>
                    </Link>

                  <p>${ product.price }</p>
                  <QuantitySelector 
                  quantity={ product.quantity } 
                  onQuantityChange={ ( quantity ) => updateProductQuantity( product, quantity ) }
                    
                />

                  <button className="underline mt-3"
                  onClick={ () => removeProduct( product ) }>
                    Remover
                  </button>
                </div>

              </div>


            ) )
          }
    </>
  )
}
