import {AiOutlineHeart} from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
const IconProduct=(props)=>{
const {item}=props
const dispatch=useDispatch()
const cart=useSelector(state=>state.cart)
const addProductCart=(item)=>{
    dispatch(
        {
            type:'ADD_PRODUCT_CART',
            payload:item
        }
    )
}
    return(
        <>
        <AiOutlineHeart/>
        <AiOutlineShoppingCart onClick={()=>addProductCart(item)} />
        </>
    )
}

export default IconProduct