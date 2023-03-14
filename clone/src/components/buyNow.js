
import { useState } from 'react'
import { BiMap } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import useCheckLoading from '../cutums/checkLoading'
import AddressTitle from "./addressTitle"
import ChangeAddress from './changeAddress'
import CheckLoading from './checkLoding'
import MethodPay from './methodPay'
import MethodPayTitle from './methodPayTitle'
import ProductBuy from "./productBuy"
import TotalBuyNow from './totalBuyNow'

const BuyNow = () => {
    const [checkMethod, setCheckMethod] = useState('')
    const [checkChangeAddress, setCheckChangeAddress] = useState(true)
    const [itemAddress, setItemAddress] = useState({})
    const cart = useSelector(state => state.cart)
    const check = useSelector(state => state.checkCart)
    const buyNow = useSelector(state => state.buyNow)
    const {checkLoading}=useCheckLoading()
    let count = 0
    cart.forEach(element => {
        count = count + element.total
    });
    const handleMethod = (index) => {
        setCheckMethod(index)
    }
    const handleAddressTitle = (index) => {
        setCheckChangeAddress(index)
    }
    const handleAddressTitleClose = (index) => {
        setCheckChangeAddress(index)
    }
    const handleClickAddress = () => {
        setCheckChangeAddress(false)
    }
    const handleClickAddressTitle = (index) => {
        setItemAddress(index)

    }
    return (
        <>
            {!checkLoading ?
                <CheckLoading/>
                :
                <>

                    <div className="buy_now">
                        <div className='buy_now_title'>
                            SHOP/PAY
                        </div>
                        <div className="address">
                            <h2> <BiMap />  Address <button onClick={() => handleClickAddress()}>+</button></h2>
                        </div>
                        <AddressTitle handleAddressTitle={handleAddressTitle} itemAddress={itemAddress} />
                        <ProductBuy />
                        <div className='total_price'>
                            {
                                check ?
                                    <>
                                        <span> Tổng Tiền :<span>{buyNow.price}</span> $</span>
                                    </>
                                    :
                                    <>
                                        <span> Tổng Tiền :<span>{count}</span> $</span>
                                    </>
                            }
                        </div>
                        <MethodPay handleMethod={handleMethod} />
                        <MethodPayTitle checkMethod={checkMethod} />
                        <TotalBuyNow checkMethod={checkMethod} count={count} />
                        {checkChangeAddress === false && <ChangeAddress handleAddressTitleClose={handleAddressTitleClose} handleClickAddressTitle={handleClickAddressTitle} />}
                    </div>
                </>}
        </>
    )
}
export default BuyNow