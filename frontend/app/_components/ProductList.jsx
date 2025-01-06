'use client';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../_utilities/GlobalApi';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Bookmark, Heart, ShoppingBag } from 'lucide-react';


function ProductList() {
  const [productList,setProductList] = useState([]);

   useEffect(()=>{
      getProductList();
    
},[]);

     const getProductList =() => {
     GlobalApi.getProductList().then((response)=>{
     console.log('ProductList', response.data.data);
     setProductList(response.data.data);
});
};

  return (
    <div>
      <h2>Product List</h2>
      <div className='grid grid-cols-5 gap-4'>
      {productList.map((product,index)=>(
      <div 
          key={index}
          className='p-3 flex flex-col items-center gap-4 border border-gray-200 rounded-lg'>
        
         
         <Image
               src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.image.url}
               alt='Trending Item'
               width={100}
               height={100}
               className='h-[200px] w-[450px] hover:scale-125 transition-all ease-in-out duration-500 rounded-lg'
               
            />
          
         <h2 className='text-green-600'>{product.name}</h2>
         {product.mrp && product.sellingprice !== 0 ? (
          <>
         <h2 className='front-semibold line-through text-gray-500'>{product.mrp}</h2>
         <h2 className='text-green-600'>{product.sellingprice}</h2>
         </>
         ):(
          <h2 className='text-green-600'>{product.mrp}</h2>
         )}

         <div>
            {product.categories.map((category,CatIndex)=>(
                <h2 key={CatIndex}>{category.name}</h2>
            ))}
        </div>
        <div>
        <Button variant='outline'>
          <Bookmark />
        </Button>
        <Button>
          <ShoppingBag />
          Add to Cart
        </Button>
        <Button variant='outline'>
          <Heart />
        </Button>
      </div> 
    </div>
      ))}
  </div>
     
 </div>
  );
}

export default ProductList;
