import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconProduct from './iconProduct'
import { useHistory } from 'react-router-dom'
const Product = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const check=useSelector(state=>state.checkCart)
    
   const history=useHistory()
    useEffect(() => {
        dispatch({
            type: 'GET'
        })
    }, [])

    const handleBuyNow=(item)=>{
        const dataNew={
            id:item.id,
            title:item.title,
            category:item.category,
            image:item.image,
            price:item.price,
            quantity:1,
            total:item.price
        }
        history.push(`/buy_now`)
        dispatch(
            {
                type:'BUY_NOW',
                payload:dataNew
            }
        )

    }
    return (
        <div className="product">
            {
                data.map(item => {
                    return (
                        <div className='product_item' key={item.id}>
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
                                <button  onClick={()=> handleBuyNow(item)}>Buy Now</button>
                                <button onClick={()=> history.push(`/${item.id}`)}>Detail</button>
                            </div>
                            <div className='product_item_icon'>
                               <IconProduct item={item}/> 
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Product