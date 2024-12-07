import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
    <div className="py-10 px-20 bg-violet-900 md:grid grid-col grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white">

      <div>
        <h2 className='text-4xl'><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}}  className='me-3'/>E-cart</h2>
        <p className='mt-5 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis, ad, quam voluptatum perspiciatis omnis deleniti illum culpa vero quia asperiores tempora impedit? Culpa animi itaque suscipit atque aspernatur quisquam?</p>
      </div>
      <div className='md:flex justify-center'>
      <div>
        <h3 className='text-4xl'>LINKS</h3>
       <Link to={'/'}> <p className='mt-6'>HOME</p></Link>
        <Link to={'/wishlist'}><p className='mt-3'>WISHLIST</p></Link>
       <Link to={'/cart'}> <p className='mt-3'>CART</p></Link>
      </div>
      </div>
      <div className='md:flex justify-center'>
      <div>
        <h3 className='text-4xl'>GUIDES</h3>
        <p className='mt-6'>REACT</p>
        <p className='mt-3'>REACT BOOTSTRAP</p>
        <p className='mt-3'>BOOTSWATCH</p>
      </div>
      </div>
      <div className='md:px-10'>
      <h3 className='text-4xl'>CONTACT US</h3>
      <div className='flex mt-6'>
          <input type="text" placeholder='Email id'  className='p-3 rounded w-full'/>
          <button className='p-3 bg-orange-600 ms-3 rounded'>Subscribe</button>
      </div>
      <div className='flex justify-between mt-6'>
      <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}}  className='text-4xl'/>
      <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} className='text-4xl'/>
      <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} className='text-4xl'/>
      <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} className='text-4xl' />
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer