import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
const IconProduct = (props) => {
    const { item } = props
    const dispatch = useDispatch()
    const addProductCart = (item) => {
        const dataNew={
            id:item.id,
            title:item.title,
            category:item.category,
            image:item.image,
            price:item.price,
            quantity:1,
            total:item.price
        }
        dispatch(
            {
                type: 'ADD_PRODUCT_CART',
                payload: dataNew
            }
        )
        dispatch(
            {
                type:'NUMBER'
            }
        )
    }
    return (
        <>
            <AiOutlineHeart  />
            <AiOutlineShoppingCart onClick={() => addProductCart(item)} />
        </>
    )
}

export default IconProduct