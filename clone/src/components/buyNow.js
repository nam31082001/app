
import { useState } from 'react'
import { BiMap } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import AddressTitle from "./addressTitle"
import ChangeAddress from './changeAddress'
import MethodPay from './methodPay'
import MethodPayTitle from './methodPayTitle'
import ProductBuy from "./productBuy"
import TotalBuyNow from './totalBuyNow'

const BuyNow = () => {
    const [checkMethod, setCheckMethod] = useState('')
    const [checkChangeAddress, setCheckChangeAddress] = useState(true)
    const [itemAddress,setItemAddress]=useState({})
    const buyNow = useSelector(state => state.buyNow)
    const handleMethod = (index) => {
        setCheckMethod(index)
    }
    const handleAddressTitle = (index) => {
        setCheckChangeAddress(index)
    }
    const handleAddressTitleClose=(index)=>{
        setCheckChangeAddress(index)
    }
    const handleClickAddress=()=>{
        setCheckChangeAddress(false)
    }
    const handleClickAddressTitle=(index)=>{
        setItemAddress(index)
     
    }
    return (
        <div className="buy_now">
            <div className='buy_now_title'>
                SHOP/PAY
            </div>
            <div className="address">
                <h2> <BiMap />  Address <button onClick={()=>handleClickAddress()}>+</button></h2>
            </div>
            <AddressTitle handleAddressTitle={handleAddressTitle} itemAddress={itemAddress}/>
            <ProductBuy />
            <div className='total_price'>
                <span> Tổng Tiền :<span>{buyNow.price}</span> $</span>
            </div>
            <MethodPay handleMethod={handleMethod} />
            <MethodPayTitle checkMethod={checkMethod} />
            <TotalBuyNow checkMethod={checkMethod}/>
            {checkChangeAddress === false && <ChangeAddress handleAddressTitleClose={handleAddressTitleClose} handleClickAddressTitle={handleClickAddressTitle}/>}
        </div>
    )
}
export default BuyNow