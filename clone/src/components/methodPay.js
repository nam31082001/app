import { useState } from "react"
import { useSelector } from "react-redux"

const MethodPay = (props) => {
    const { handleMethod } = props
    const methodPay = useSelector(state => state.method_pay)
    
    return (
        <div className='method_pay'>
            <span>Method Pay</span>
            {
                methodPay.map((item, index) => {
                    return (
                        <button key={index} onClick={() => handleMethod(item)}>{item} </button>
                    )
                })
            }
        </div>
    )
}

export default MethodPay