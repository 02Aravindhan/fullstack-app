import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
 import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';
  
function slider() {
  return (
    <div className='hidden sm:grid'>
      
      <Carousel>
  <CarouselContent>
    <CarouselItem>
        
        <div className='hidden sm:grid w-full grid-cols-2 md:grid-cols-2 gap-4 Banner rounded-2x1'>
        <div className='px-10 gap-10'>
        <Badge className='sm:hidden  md:hidden lg:inline-block m-3'>
             Get 20% discount
        </Badge>
        <h1 className='ext-sm md:text-base lg:text-5xl md:text-1x1 font-bold py-6'>
            All Your Daily Needs
        </h1>
       <p className='ext-sm md:text-base lg:text-4xl md:text-1x1 font-bold py-6'>
             Get all your daily needs at one place
       </p>
         <Button 
            className='bg-green-400 text-white m-5 Basket'
             variant='outline'
             size='1g'>
          <ShoppingBasket /> Buy Now
          </Button>
        </div>
        <div className='w-full'>
            <img
               src='/image/Banner1.png'
               className='w-full h-[300px] md:h-[300px] object-cover rounded-2xl row-span-1 m-2 align-middle'
               width={200}
               height={200}
            />
               </div>
        </div>
    </CarouselItem>
    <CarouselItem>
    <div className='hidden sm:grid w-full grid-cols-2 md:grid-cols-2 gap-4 Banner rounded-2x1'>
        <div className='px-10 gap-10'>
        <Badge className='sm:hidden  md:hidden lg:inline-block m-3'>
             Get 20% discount
        </Badge>
        <h1 className='ext-sm md:text-base lg:text-5xl md:text-1x1 font-bold py-6'>
            All Your Daily Needs
        </h1>
       <p className='ext-sm md:text-base lg:text-4xl md:text-1x1 font-bold py-6'>
             Get all your daily needs at one place
       </p>
         <Button 
            className='bg-green-400 text-white m-5 Basket'
             variant='outline'
             size='1g'>
          <ShoppingBasket /> Buy Now
          </Button>
        </div>
        <div className='w-full'>
            <img
               src='/image/Banner2.png'
               className='w-full h-[300px] md:h-[300px] object-cover rounded-2xl row-span-1 m-2 align-middle'
               width={200}
               height={200}
            />
               </div>
        </div>
          
    
    </CarouselItem>
    <CarouselItem>
    <div className='hidden sm:grid w-full grid-cols-2 md:grid-cols-2 gap-4 Banner rounded-2x1'>
        <div className='px-10 gap-10'>
        <Badge className='sm:hidden  md:hidden lg:inline-block m-3'>
             Get 20% discount
        </Badge>
        <h1 className='ext-sm md:text-base lg:text-5xl md:text-1x1 font-bold py-6'>
            All Your Daily Needs
        </h1>
       <p className='ext-sm md:text-base lg:text-4xl md:text-1x1 font-bold py-6'>
             Get all your daily needs at one place
       </p>
         <Button 
            className='bg-green-400 text-white m-5 Basket'
             variant='outline'
             size='1g'>
          <ShoppingBasket /> Buy Now
          </Button>
        </div>
        <div className='w-full'>
            <img
               src='/image/Banner3.png'
               className='w-full h-[300px] md:h-[300px] object-cover rounded-2xl row-span-1 m-2 align-middle'
               width={200}
               height={200}
            />
               </div>
        </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}

export default slider
