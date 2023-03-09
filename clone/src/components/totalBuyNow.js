
import { useSelector } from "react-redux"

const TotalBuyNow = (props) => {
    const { checkMethod, count } = props
    const cart = useSelector(state => state.cart)
    const check = useSelector(state => state.checkCart)
    const buyNow = useSelector(state => state.buyNow)
    const fortune = (count / 100) * 10
    let transaction = 0
    if (checkMethod === 'Credit Card') {
        transaction = (count / 100) * 15
    } else if (checkMethod === 'Bank Card') {
        transaction = (count / 100) * 10
    } else if (checkMethod === 'Banking') {
        transaction = 0
    } else if (checkMethod === 'Cash') {
        transaction = (count / 100) * 15
    }
    return (
        <div className='total_buy_now'>
            <div>
                {
                    check ?
                        <>

                            <p>Price:{buyNow.price} $</p>
                            <p>  Fortune:{fortune}$</p>
                            <p>{checkMethod === '' ?
                                <>Select a payment method</>
                                :
                                <>Payment fee for {checkMethod} :{transaction}</>}
                            </p>
                            <h1>Total:<span>{buyNow.price + fortune + transaction}$</span> </h1>
                        </>
                        :
                        <>

                            <p>Price:{count} $</p>
                            <p>  Fortune:{fortune}$</p>
                            <p>{checkMethod === '' ?
                                <>Select a payment method</>
                                :
                                <>Payment fee for {checkMethod} :{transaction}</>}
                            </p>
                            <h1>Total:<span>{count + fortune + transaction}$</span> </h1>
                        </>
                }

            </div>
            <button>Pay</button>
        </div>
    )
}
export default TotalBuyNow