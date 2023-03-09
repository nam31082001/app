
import { useSelector } from "react-redux"

const TotalBuyNow = (props) => {
    const { checkMethod } = props
    const buyNow = useSelector(state => state.buyNow)
    const fortune = (buyNow.price / 100) * 10
    let transaction = 0
    if (checkMethod === 'Credit Card') {
        transaction = (buyNow.price / 100) * 15
    } else if (checkMethod === 'Bank Card') {
        transaction = (buyNow.price / 100) * 10
    } else if (checkMethod === 'Banking') {
        transaction = 0
    } else if (checkMethod === 'Cash') {
        transaction = (buyNow.price / 100) * 15
    }
    return (
        <div className='total_buy_now'>
            <div>
                <p>Price:{buyNow.price} $</p>
                <p>  Fortune:{fortune}$</p>
                <p>{checkMethod === '' ?
                    <>Select a payment method</>
                    :
                    <>Payment fee for {checkMethod} :{transaction}</>}
                </p>
                <h1>Total:<span>{buyNow.price + fortune + transaction}$</span> </h1>
            </div>
            <button>Pay</button>
        </div>
    )
}
export default TotalBuyNow