import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import InformationProduct from "./informationProduct"

const Detail = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const detail = useSelector(state => state.detail)
    const { id } = useParams()
    useEffect(() => {
        dispatch({
            type: 'DETAIL',
            payload: id

        })
    }, [])

    const handleAddCart = () => {
        const dataNew = {
            id: detail.id,
            title: detail.title,
            category: detail.category,
            image: detail.image,
            price: detail.price,
            quantity: 1,
            total: detail.price
        }
        dispatch(
            {
                type: 'ADD_PRODUCT_CART',
                payload: dataNew
            }
        )
    }

    const handleDetailBuy = (index) => {
        history.push('/buy_now')
        dispatch(
            {
                type: 'BUY_NOW',
                payload: index
            }
        )
    }
    return (
        <>
            <div className="detail">
                <div className="detail_img">
                    <div>
                        <img src={detail.image} />
                    </div>
                </div>
                <div className="detail_title">
                    <div className="detail_title_header">
                        {detail.title}
                    </div>
                    <div className="detail_category">
                        {detail.category}
                    </div>
                    <div className="detail_price">
                        <div>

                        </div>
                        <div>{detail.price}$</div>
                    </div>
                    <div className="detail_description">
                        {detail.description}
                    </div>
                    <div className="detail_button">
                        <button onClick={() => handleDetailBuy(detail)}>Buy</button>
                        <button onClick={() => handleAddCart()}>
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="information_product">
                <InformationProduct detail={detail}/>
            </div>
        </>

    )
}

export default Detail