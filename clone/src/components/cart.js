
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import TableCart from './tablecarrt'
const Cart = () => {
    let count = 0
    const cart = useSelector(state => state.cart)
    const dispatch=useDispatch()
    cart.forEach(element => {
        count = count + element.total
    });
    const history=useHistory()

    const handleCartBuy=()=>{
        history.push('/buy_now')
        dispatch(
            {
                type:"CHECK_CART"
            }
        )
    }
    return (
        <div className="cart">
            <div className='cart_title'>
                CART
            </div>
            <TableCart />
            <div className='button_buy'>
                <h2>Tổng tiền: {count} $</h2>
                <button onClick={()=>handleCartBuy()}>BUY PRODUCT</button>
            </div>
        </div>
    )
}

export default Cart