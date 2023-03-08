import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiFaceMeh } from 'react-icons/ci'

const Header = () => {
   
    return (
        <>
            <div className='header'>
                <h1>SHOP</h1>
                <div className='header_icon'>
                    <AiOutlineShoppingCart />
                    <CiFaceMeh />
                </div>
            </div>
        </>

    )
}
export default Header