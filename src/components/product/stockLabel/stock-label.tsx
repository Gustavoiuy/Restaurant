'use client'


import { titleFont } from '@/config/fonts'

import { getStockBySlug } from '@/actions';
import { useEffect, useState } from 'react';

interface Props {
    slug: string;
}

export const StockLabel = ({slug}:Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  
  useEffect(() => {
    getStock();

  },[slug]);

 const getStock= async ()=>{
    const stock = await getStockBySlug( slug );
    setStock(stock);

    setisLoading(false);

  }


  return (
    <>
       {
        isLoading?(
          <h1 className={ ` ${ titleFont.className } antialiased font-bold text-xl bg-gray-200 animate-pulse` }>
          &nbsp;
         
       </h1>
        ): (
          <h1 className={ ` ${ titleFont.className } antialiased font-bold text-xl` }>
          stock: {stock } 
         
         </h1>
        )
       } 




    </>


  )
}
