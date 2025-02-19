import React from 'react'
import { ShoppingCart } from "lucide-react";
import { useSelector } from 'react-redux';

import SearchDropdown from '../card/search/SearchDropdown';

const Navigation = () => {
  const cartItems = useSelector((state)=>state.myCartItems.cart);
  
  // const searchChangeHandler = (e)=>{
  //   searchInput(e.target.value)

  // }
  //console.log(cartItems)
  return (
<nav className="bg-yellow-400 shadow-md px-6 py-2 fixed top-0 left-0 w-full z-50  ">
      <div className=" flex justify-between items-center max-w-7xl mx-auto w-full">
        
        
        <div className="text-xl font-bold text-gray-800">My Store</div>

        <SearchDropdown/>
        
        
        <div className="relative">
          <ShoppingCart size={28} className="text-gray-700 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{cartItems.length}</span>
        </div>

      </div>
    </nav>
  )
}

export default Navigation