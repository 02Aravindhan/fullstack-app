'use client'
import React, { use } from 'react'
import Image from 'next/image';
import { LayoutGrid, LogInIcon, Search, ShoppingBagIcon} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import GlobalApi from '../_utilities/GlobalApi';
import {useState, useEffect } from 'react';

function Header() {
  const [MenuCategory,setMenuCategory]=React.useState([]);
  useEffect(() => {
    getMenuCategory();
  },[]);

  const getMenuCategory =() => {
    GlobalApi.getMenuCategory().then((response)=>{
       console.log('List',response.data.data);
       setMenuCategory(response.data.data);
    });
  };

  return (
      <div className='flex p-0 justify-between items-center  ' >
        <div>
         <Image
             src='/image/market.jpg'
             alt='Next.js'
             width={200}
             height={200}
             />
      </div>
      <div className='hidden md:flex gap-2 items-center'>
       
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <h2 className='flex gap-2 items-center border rounded-full p-2 px-10 bg-blue-400'>
        <LayoutGrid className='h-5 w-5'/> Categories</h2>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuLabel>Product Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {MenuCategory.map((category,index)=> (
        <DropdownMenuItem  key={index}>
         
         <Image
         src={
           process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category.icon.url
         }
         alt='logo'
         width={30}
         height={30}
         />

         <h2> {category.name}</h2>
          
          </DropdownMenuItem>))}
        
        </DropdownMenuContent>
        </DropdownMenu>

           </div>
          
           <div className='hidden md:flex gap-2 items-center'>
           <Search />
           <input
              type='text'
              placeholder='Search for products'
              className='border-2   border-gray-300 rounded-lg p-2'
            />
            </div>
          <div className='flex gap-2 items-center ml-auto'>
            <h2>
              <ShoppingBagIcon className='h-5 w-5'/> 0
            </h2>

           <Button className='bg-gradient-to-r from-teal-400 t0-blue-500 hover:from-pink-500 hover:to-orange-500' >
               <LogInIcon /> LogIn
           </Button>
          </div>
      </div>
      

        

  );
}

export default Header;
