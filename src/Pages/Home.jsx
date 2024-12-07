import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import userFetch from '../hooks/userFetch'
import { addWishlistItems } from '../redux/slices/wishlistSlice'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../redux/slices/cartSlice'



function Home() {
  const data = userFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()


  return (
    <>

      <div className='pt-48 px-10 mb-10 md:grid grid-cols-4'>

        {data?.length > 0 &&
         data?.map((item) => (
          <div className='p-2'>
          <div className='p-3 rounded shadow-lg'>
            <img src={item.image} alt="" className='w-full h-48' />
            <h4 className='text-center text-2xl'>{item.title.slice(0,100)}</h4>
            <p className='text-justify pt-5'>{item.description.slice(0,100)}</p>
            <p className='text-2xl p-3'>price: <span className='text-violet-600'>${item.price}</span> </p>
            <div className='flex justify-between' >
              <button onClick={()=>dispatch(addWishlistItems(item))} className='px-5 py-3 rounded text-white bg-red-600'><FontAwesomeIcon icon={faHeart} /></button>
              <button onClick={()=>dispatch(addItemToCart(item))} className='px-5 py-3 rounded text-white bg-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>

          </div>

        </div>
        ))
        }












      </div>


    </>
  )
}

export default Home