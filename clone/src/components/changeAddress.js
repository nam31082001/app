import { useDebugValue, useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import AddAddress from './addAddresss'
import { AiOutlineDelete } from 'react-icons/ai'
import { TbHandClick } from 'react-icons/tb'
import { GrUpdate } from 'react-icons/gr'
import UpdateAddress from './updateAddress'
const ChangeAddress = (props) => {
    const dispatch = useDispatch()
    const [checkAddress, setCheckAddress] = useState(false)
    const [checkUpdateAddress, setCheckUpdateAddress] = useState(false)
    const [dataUpdateAddress, setDataUpdateAddress] = useState({})
    const address = useSelector(state => state.address)
    const { handleAddressTitleClose, handleClickAddressTitle } = props
    const handleAddAddress = (index) => {
        setCheckAddress(index)
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
    return (
        <div className="change_address">
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
                                <button onClick={() => setCheckAddress(true)}>
                                    +  Add Address
                                </button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <AddAddress handleAddAddress={handleAddAddress} />
                    </>

            }

            {checkUpdateAddress && <UpdateAddress dataUpdateAddress={dataUpdateAddress} handleUpdateAddressClose={handleUpdateAddressClose} />}
        </div>
    )
}
export default ChangeAddress