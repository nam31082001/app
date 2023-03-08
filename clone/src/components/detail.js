import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Detail = () => {
    const dispatch = useDispatch()
    const detail = useSelector(state => state.detail)
    console.log(detail)
    const { id } = useParams()
    useEffect(() => {
        dispatch({
            type: 'DETAIL',
            payload: id

        })
    }, [])
    return (
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
                    <button>Buy</button>
                    <button>Add Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Detail