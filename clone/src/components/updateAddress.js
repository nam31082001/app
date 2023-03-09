import { useState } from "react";
import { useDispatch } from "react-redux";

const UpdateAddress = (props) => {
    const { dataUpdateAddress,handleUpdateAddressClose } = props
    const dispatch=useDispatch()
    const [user, setUser] = useState({ name: dataUpdateAddress.name, phone: dataUpdateAddress.phone, address: dataUpdateAddress.address });
    const setValueForUser = (key,value) => {
        let copy = { ...user,[key]:value}
        setUser(copy);
    }
    const handleUpdateAddress=()=>{
        const clickValue = { ...user, id: dataUpdateAddress.id }
            dispatch(
                {
                    type:"UPDATE_ADDRESS",payload:clickValue
                }
            )
            handleUpdateAddressClose(false)
    }
    return (
        <div className="input_address">
            <div>
                <h1>UPDATE ADDRESS</h1>
            </div>
            <form>
                <label>Recipient's name</label><br /><br />
                <input
                    type="text"
                    placeholder="Recipient's name"
                    value={user.name}
                    onChange={e => setValueForUser('name',e.target.value)}
                /><br /><br />
                <label>Phone</label><br /><br />
                <input
                    type="type"
                    placeholder="Phone"
                    value={user.phone}
                    onChange={e => setValueForUser('phone',e.target.value)}
                /><br /><br />
                <label>Address</label><br /><br />
                <input
                    type='type'
                    placeholder="address"
                    value={user.address}
                    onChange={e => setValueForUser('address',e.target.value)}
                /><br /><br />

            </form>
            <div>
                <button onClick={()=>handleUpdateAddress()} >UpDate Address</button>
            </div>
        </div>
    )
}

export default UpdateAddress