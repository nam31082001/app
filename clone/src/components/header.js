import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiFaceMeh } from 'react-icons/ci'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    const number = useSelector(state => state.number)
    return (
        <>
            <div className='header'>
                <h1 onClick={() => history.push('/')}>SHOP</h1>
                <div className='header_icon'>
                    <AiOutlineShoppingCart onClick={() => history.push('/cart')} className="header_cart_icon" />
                    <CiFaceMeh onClick={() => history.push('/login')} />
                </div>
                <div>{number}</div>
            </div>
        </>

    )
}
export default Header