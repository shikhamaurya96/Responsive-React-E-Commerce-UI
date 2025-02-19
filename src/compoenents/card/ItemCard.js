import React from 'react'

const ItemCard = ({item,handleProductDetail,opacity}) => {
  return (
    <div className={`max-w-sm bg-white shadow-lg rounded-lg overflow-hidden ${opacity?`opacity-50`:`opacity-100`}`}  onClick={()=>handleProductDetail(item.id)}>
      <img 
        src={item.image} 
        alt="Product" 
        className={`w-full h-40  object-contain`}
      />
      <div className="p-4">
        <h2 className="text-md font-semibold text-gray-800">{item.title}</h2>
        <p className="text-blue-400 text-sm mt-1 ">{item.price}$</p>
      </div>

    </div>
  )
}

export default ItemCard