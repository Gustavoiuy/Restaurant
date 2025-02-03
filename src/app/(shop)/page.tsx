export const revalidate = 60;

import { ProductGrid, Title , Pagination} from '@/components';

import { getPaginatedProductsWithImages } from '@/actions';
import { redirect } from 'next/navigation';



interface Props{
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function Home({searchParams}:Props) {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? parseInt( resolvedSearchParams.page) : 1;


  const {products,currentPage, totalPages} = await getPaginatedProductsWithImages({
    page
  });

  if( products.length === 0){
    redirect('/');
  }


  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
      <Pagination totalPages={totalPages}/>
    </>
  );
}
