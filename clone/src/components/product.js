import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconProduct from './iconProduct'
import { useHistory } from 'react-router-dom'
const Product = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
   const history=useHistory()
    useEffect(() => {
        dispatch({
            type: 'GET'
        })
    }, [])

    const handleDetail=(index)=>{
        history.push(`/${index}`)
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
                                <button>Buy Now</button>
                                <button onClick={()=>handleDetail(item.id)}>Detail</button>
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