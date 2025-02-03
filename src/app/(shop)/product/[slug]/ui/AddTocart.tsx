'use client'

import { QuantitySelector, SizeSelector } from '@/components'
import { Product, Size } from '@/interfaces'

import { useState } from 'react'

interface Props{
    product: Product
    
}
export const AddTocart = ({product}: Props) => {

    const [size, setSize] = useState<Size| undefined>();
    const [quantity, setQuantity] = useState<number>(1);
    const [posted, setPosted] = useState<boolean>(false);
    
    const addtoCart = ()=>{
        setPosted(true);
        if(!size) return;
        console.log('Add to cart', {size, quantity});
    }

  return (
    <>

   {
    posted && !size && (
        <span className='mt-2 text-red-500 fade-in'>
        debe de seleccionar una Talla
    </span>
    )
    
   }
    

   
      {/* Selector de Tallas */ }
      <SizeSelector
          selectedSize={ size }
          availableSizes={ product.sizes || [] }
          onSizeChange={ setSize }
        />


        {/* Selector de Cantidad */ }
        <QuantitySelector 
          quantity={ quantity }
            onQuantityChange={ setQuantity }
        />


        {/* Button */ }
        <button
         onClick={ addtoCart }
         className="btn-primary my-5"
       
        >
          Agregar al carrito
        </button>
    </>
  )
}
