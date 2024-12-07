import React from 'react'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.Wishlist)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const wishes = (item)=>{
    dispatch(addItemToCart(item))
    dispatch(removeWishlistItem(item.id))
  }
  


  return (
    <>
    <div className='pt-32'>
      <h1 className='text-center text-violet-600 text-4xl mb-5 mt-5'>Wishlist</h1>


    {wishlistArray?.length>0 ?
      <div className='px-10 mb-10 md:grid grid-cols-4'>

      {wishlistArray?.map((item)=>(
        <div className='p-2'>
        <div className='p-3 rounded shadow-lg'>
          <img src={item.image} alt="" className='w-full h-48' />
          <h4 className='text-center text-2xl'>{item.title.slice(0,100)}</h4>
          <p className='text-justify pt-5'>{item.description.slice(0,100)}</p>
          <p className='text-2xl p-3'>Price: <span className='text-violet-600'>{item.price}</span> </p>
          <div className='flex justify-between' >
            <button onClick={()=>dispatch(removeWishlistItem(item?.id))}  className='px-5 py-3 rounded text-white bg-red-600'><FontAwesomeIcon icon={faTrash} /></button>
            <button onClick={()=>wishes(item)} className='px-5 py-3 rounded text-white bg-green-600'><FontAwesomeIcon icon={faCartShopping}  /></button>
          </div>

        </div>

      </div>
      ))}

     
      


     


     
      

    </div>
    :
   <div className='w-full pt-10 md:grid grid-cols-3 mt-4 mb-4'>
    <div></div>
    <div>
      <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" className='w-full h-auto' />
    </div>
    <div></div>

   </div>
}
    </div>

    </>
  )
}

export default Wishlist