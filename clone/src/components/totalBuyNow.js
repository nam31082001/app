
import { useSelector } from "react-redux"

const TotalBuyNow = (props) => {
    const { checkMethod, count } = props
    const check = useSelector(state => state.checkCart)
    const buyNow = useSelector(state => state.buyNow)
    let transaction = 0
    if (checkMethod === 'Credit Card') {
        if (check) {
            transaction = (buyNow.price / 100) * 5
        } else {
            transaction = (count / 100) * 5
        }
    } else if (checkMethod === 'Bank Card') {
        if (check) {
            transaction = (buyNow.price / 100) * 10
        } else {
            transaction = (count / 100) * 10
        }
    } else if (checkMethod === 'Banking') {
        transaction = 0
    } else if (checkMethod === 'Cash') {
        if (check) {
            transaction = (buyNow.price / 100) * 5
        } else {
            transaction = (count / 100) * 5
        }
    }
    return (
        <div className='total_buy_now'>
            <div>
                {
                    check ?
                        <>

                            <p>Price:{buyNow.price} $</p>
                            <p>  Fortune:{(buyNow.price / 100) * 10
                            }$</p>
                            <p>{checkMethod === '' ?
                                <>Select a payment method</>
                                :
                                <>Payment fee for {checkMethod} :{transaction}</>}
                            </p>
                            <h1>Total:<span>{buyNow.price + (buyNow.price / 100) * 10 + transaction}$</span> </h1>
                        </>
                        :
                        <>

                            <p>Price:{count} $</p>
                            <p>  Fortune:{(count/100)*10 }$</p>
                            <p>{checkMethod === '' ?
                                <>Select a payment method</>
                                :
                                <>Payment fee for {checkMethod} :{transaction}</>}
                            </p>
                            <h1>Total:<span>{count + (count/100)*10 +transaction}$</span> </h1>
                        </>
                }

            </div>
            <button>Pay</button>
        </div>
    )
}
export default TotalBuyNow