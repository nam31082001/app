import { useDebugValue, useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import AddAddress from './addAddresss'
import { AiOutlineDelete } from 'react-icons/ai'
import { TbHandClick } from 'react-icons/tb'
import { GrUpdate } from 'react-icons/gr'
import UpdateAddress from './updateAddress'
import useCheckLoading from '../cutums/checkLoading'
import CheckLoading from './checkLoding'
const ChangeAddress = (props) => {
    const dispatch = useDispatch()
    const [checkLoading2, setCheckLoading2] = useState(true)
    const address = useSelector(state => state.address)
    const [checkAddress, setCheckAddress] = useState(false)
    const { checkLoading } = useCheckLoading()
    const [checkUpdateAddress, setCheckUpdateAddress] = useState(false)
    const [dataUpdateAddress, setDataUpdateAddress] = useState({})
    const { handleAddressTitleClose, handleClickAddressTitle } = props
    const handleAddAddress = (index) => {
        setTimeout(() => {
            setCheckAddress(index)
        }, 2000);
    }
    const handleUpdateAddress = (index) => {
        setCheckUpdateAddress(true)
        setDataUpdateAddress(index)
    }
    const handleUpdateAddressClose = (index) => {
        setCheckUpdateAddress(false)
    }
    const handleTbHandClick = (item) => {
        handleClickAddressTitle(item)
        handleAddressTitleClose(true)
    }
    const handleAddAddressButton = () => {
        setCheckAddress(true)
        setTimeout(() => {
            setCheckLoading2(false)
        }, 2000);
    }
    return (
        <div className="change_address">
            {checkUpdateAddress ?
                <>
                    {

                        <UpdateAddress
                            dataUpdateAddress={dataUpdateAddress}
                            handleUpdateAddressClose={handleUpdateAddressClose}
                        />

                    }

                </>
                :
                <>
                    {
                        !checkLoading ?
                            <>
                                <CheckLoading />
                            </>
                            :
                            <>
                                {
                                    !checkAddress ?
                                        <>
                                            <div>
                                                <div>
                                                    <GrClose onClick={() => handleAddressTitleClose(true)} />
                                                </div>
                                                <div>
                                                    {
                                                        address.map((item, index) => {
                                                            return (
                                                                <div key={item.id}>
                                                                    <div>
                                                                        <p>
                                                                            <span>{item.name}</span> | <spam>{item.phone}</spam>
                                                                        </p>
                                                                        <p>
                                                                            {item.address}
                                                                        </p>

                                                                    </div>
                                                                    <div>

                                                                        <TbHandClick onClick={() => handleTbHandClick(item)} />
                                                                        <AiOutlineDelete onClick={() => dispatch({ type: "DELETE_ADDRESS", payload: item.id })} />
                                                                        <GrUpdate onClick={() => handleUpdateAddress(item)} />

                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div>
                                                    <button onClick={() => handleAddAddressButton()}>
                                                        +  Add Address
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            {
                                                checkLoading2 ?
                                                    <>
                                                        <CheckLoading />
                                                    </>
                                                    :
                                                    <>
                                                        <AddAddress
                                                            handleAddAddress={handleAddAddress}
                                                            setCheckLoading2={setCheckLoading2} />
                                                    </>
                                            }
                                        </>
                                }
                            </>
                    }
                </>
            }
        </div>
    )
}
export default ChangeAddress