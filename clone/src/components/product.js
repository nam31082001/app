
import { useDispatch } from 'react-redux'
import IconProduct from './iconProduct'
import { useHistory } from 'react-router-dom'

const Product = (props) => {
    
    const { data,check } = props
    const dispatch = useDispatch()
    const history = useHistory()
    const handleBuyNow = (item) => {
        const dataNew = {
            id: item.id,
            title: item.title,
            category: item.category,
            image: item.image,
            price: item.price,
            quantity: 1,
            total: item.price
        }
        history.push(`/buy_now`)
        dispatch({ type: 'BUY_NOW', payload: dataNew })
    }
    return (
        <div className="product">
            {
                data.map(item => {
                    return (
                        <>
                            {check ?
                                <>
                                    <div className='product_item ' key={item.id}>
                                        <div className='product_item_image'>
                                            <img src={item.image} />
                                        </div>
                                        <div className='product_item_title'>
                                            {item.title}
                                        </div>
                                        <div className='product_item_price'>
                                            {item.price}$
                                        </div>
                                        <div className='product_item_button'>
                                            <button onClick={() => handleBuyNow(item)}>Buy Now</button>
                                            <button onClick={() => history.push(`/${item.id}`)}>Detail</button>
                                        </div>
                                        <div className='product_item_icon'>
                                            <IconProduct item={item} />
                                        </div>
                                    </div>
                                </>
                                :
                                <> <div className='product_item loading ' key={item.id}></div></>
                            }
                        </>
                    )
                })
            }
        </div>
    )
}
export default Product