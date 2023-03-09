import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiFaceMeh } from 'react-icons/ci'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    return (
        <>
            <div className='header'>
                <h1 onClick={()=> history.push('/')}>SHOP</h1>
                <div className='header_icon'>
                    <AiOutlineShoppingCart onClick={() => history.push('/cart')} />
                    <CiFaceMeh onClick={() => history.push('/login')} />
                </div>
            </div>
        </>

    )
}
export default Header