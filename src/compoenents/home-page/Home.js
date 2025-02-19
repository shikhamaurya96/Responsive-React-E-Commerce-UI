import React, { useState, useEffect } from 'react'
import useFetchProducts from '../hooks/useFetchProducts'
import { productsApi } from '../constants';
import ItemCard from '../card/ItemCard';
import { useDispatch } from 'react-redux';
import { addCartData } from '../store/cartSlice';
import { useSelector } from 'react-redux';

const Home = () => {

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [opacity, setOpacity] = useState(false)

  const { items, loading, setLoading, error, setError, fetchData } = useFetchProducts();

  const category = useSelector((state) => state.myCategory.category);
  const dispatch = useDispatch()
  //console.log(items)

  useEffect(() => {
    if (category === "" || category === null) {
      //fetch all products
      fetchData(productsApi)
    } else { 
      //fetch product with category
      fetchData(`${productsApi}/category/${category}`)
    }
  }, [category,fetchData])

  async function handleModal(id) {
    try {
      const response = await fetch(`${productsApi}/${id}`)
      const product = await response.json();
      setSelectedProduct(product)
      setOpacity(true)
      setLoading(false)
    }
    catch (error) {
      setError("Error occured in fetching product details")
      console.log(error)
    }
  }
  const addCartHandler = (product) => {
    dispatch(addCartData(product))
  }
  const handleClose = () => {
    setSelectedProduct(null);
    setOpacity(false)
  }

  if (loading) return <p className='m-4 font-bold'>Loading...</p>
  if (error) return <p className='text-red-500 m-4'>Error: {error}</p>
  return (
    <div className='mt-16 p-4 bg-gray-300 grid grid-cols-2 sm:grid-cols-5 gap-4 relative'>
      {
        items.length !== 0 && items.map((item) => <div key={item.id} className=''><ItemCard item={item} handleProductDetail={handleModal} opacity={opacity} /></div>)
      }

      {/* popup modal */}


      {
        selectedProduct && (
          <div className='flex justify-center items-center fixed inset-4 md:inset-16 '>
            <div className='flex flex-col items-center gap-6 md:gap-8 md:flex-row bg-white shadow-lg rounded-lg p-4'>
              <div className='md:w-1/2 h-full'>
                <img
                  src={selectedProduct.image}
                  alt="Product"
                  className={`w-full h-64  object-contain`}
                />
              </div>
              <div className="md:w-2/3 overflow-hidden p-2">
                <h2 className="text-lg font-bold text-gray-800">{selectedProduct.title}</h2>
                <p className="text-blue-400 text-sm mt-1 ">{selectedProduct.price}$</p>
                <p className='overflow-y-auto h-48'>{selectedProduct.description}</p>
                <div className="flex items-center gap-6 md:gap-8 mt-2 md:mt-0">
                <button className='bg-blue-600 text-white p-2 px-4 rounded-md text-sm' onClick={() => addCartHandler(selectedProduct)}>Add Cart</button>
                <button className='bg-gray-600 text-white p-2 px-4 rounded-md text-sm' onClick={handleClose}>Close</button>
                </div>
              </div>
            </div>
           
          </div>
        )
      }
    </div>
  )
}













/* <div className=''>
<button className='bg-blue-600 p-2 text-white rounded-md absolute'>Close</button>
<img 
  src={selectedProduct.image} 
  alt="Product" 
  className="  object-cover"
/>
</div>
  
<div className= "border border-black ">
  <h2 className="text-md font-semibold text-gray-800">{selectedProduct.title}</h2>
  <p className="text-blue-400 text-sm mt-1 ">{selectedProduct.price}$</p>
  <p className='text-sm'>{selectedProduct.description}</p>
  <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700" onClick={addCartHandler}>
    Add to Cart
  </button> */







export default Home