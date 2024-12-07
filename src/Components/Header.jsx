import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {

    const wishlistArray = useSelector((state)=>state.Wishlist)

    const cartArray = useSelector((state)=>state.cart)

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='bg-violet-900 w-full h-32 flex items-center justify-between fixed'>
                <div className="flex items-center md:px-10 px-5">
                    <div className='flex w-full'>
                        <Link to={'/'}><h1 className='text-white ms-2 text-3xl me-10' > <FontAwesomeIcon icon={faCartShopping} className='me-3' />E-Cart</h1></Link>
                        <button onClick={() => setShow(!show)} className='border border-white p-3 text-white ms-auto rounded md:hidden'><FontAwesomeIcon icon={faBars} /></button>
                    </div>

                </div>
                {show && <div className='mt-5 ms-auto flex md:hidden justify-center items-center '>
                    <Link to={'/Wishlist'} ><button className='border border-white rounded p-3 me-2 text-white hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} style={{ color: "#b52121", }} />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>{wishlistArray.length}</span> </button></Link>
                    <Link to={'/Cart'}> <button className='border border-white  rounded p-3 me-2 text-white  hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#63E6BE", }} />Cart <span className='border bg-white px-1 rounded text-black ms-2'>{cartArray.length}</span> </button></Link>

                </div>
                }

                <div className='mt-5 ms-auto md:flex hidden justify-center items-center '>
                    <Link to={'/Wishlist'} ><button className='border border-white rounded p-3 me-2 text-white hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} style={{ color: "#b52121", }} />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>{wishlistArray.length}</span> </button></Link>
                    <Link to={'/Cart'}> <button className='border border-white  rounded p-3 me-2 text-white  hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#63E6BE", }} />Cart <span className='border bg-white px-1 rounded text-black ms-2'>{cartArray.length}</span> </button></Link>

                </div>
            </div>
        </>
    )
}

export default Header