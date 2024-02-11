import React from 'react'
import { useState } from 'react'

function Card({cardTitle = "Product", ram, rom, battery, image, price, actPrice, netType}) {
  const sbtn = document.getElementById('deBtn');
  console.log(sbtn);
  const [value, setValue] = useState(1)
  const add = ()=>{
    setValue(value + 1);
  }
  const rem = ()=>{
    setValue(value - 1);
  }
  if (value == 0) {
    setValue(1);
  }
  // if(value >= 2){
  //   price = parseInt(price) * 2;
  // }
  return (
    <div>
      <div class="w-[300px] rounded-md border">
        <div className='flex flex-wrap justify-center items-center'>
  <img
    src={image}
    alt="Laptop"
    class="h-[200px] w-2/5 rounded-t-md"
  />
  </div>
  <div class="p-4">
    <h1 class="inline-flex items-center text-2xl font-semibold">
      {cardTitle}
    </h1>
    <div class="mt-4">
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        {ram}
      </span>
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
           {rom}
      </span>
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        {battery}
      </span>
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        {netType}
      </span>
      <br />
      <p className='font-bold text-lg inline'>₹ {price}</p>
      <s className='text-slate-500 inline ml-3'>₹ {actPrice}</s>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-5">
    <button
      id='deBtn'
      onClick={rem}
      type="button"
      class="mt-4 rounded-full w-[30px] bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      -
    </button>
    <p className='w-[20%] mt-3 px-2 py-1.5 border border-gray-400 rounded-md font-bold'>{value}</p>
    <button
      onClick={add}
      type="button"
      class="mt-4 rounded-full w-[30px] bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      +
    </button>
    </div>
    <div className='flex gap-3 justify-center'>
    <button
      type="button"
      class="mt-4 w-[50%] rounded-lg bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Add to Cart
    </button>
    <button
      type="button"
      class="mt-4 w-[50%] rounded-lg bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Buy Now
    </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Card
