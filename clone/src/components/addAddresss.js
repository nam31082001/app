import { useState } from "react";
import { GrClose } from "react-icons/gr"
import { useDispatch } from "react-redux";
import useCheckLoading from "../cutums/checkLoading";
import CheckLoading from "./checkLoding";

const AddAddress = (props) => {
    const dispatch = useDispatch()
    const { handleAddAddress } = props
    const { checkLoading } = useCheckLoading()
    const [user, setUser] = useState({ name: "", phone: "", address: "" });
    const setValueForUser = (key, value) => {
        const newVal = { ...user, [key]: value };
        setUser(newVal);
    }
    const handleAddClick = () => {
        if (user.name !== '' || user.phone !== '' || user.address !== '') {
            const id = Math.floor(Math.random() * 100);
            const clickValue = { ...user, id: id }
            dispatch(
                {
                    type: "ADD_ADDRESS",
                    payload: clickValue
                }
            )
            handleAddAddress(false)
        }
    }
    return (
        <>
            {checkLoading ?
                <>
                    <CheckLoading />
                </>
                :
                <>
                    <div className="input_address">
                        <div>
                            <h1>Add Address</h1>
                            <span> <GrClose onClick={() => handleAddAddress(false)} /></span>
                        </div>
                        <form>
                            <label>Recipient's name</label><br /><br />
                            <input type="text" placeholder="Recipient's name" onChange={e => setValueForUser('name', e.target.value)} /><br /><br />
                            <label>Phone</label><br /><br />
                            <input type="type" placeholder="Phone" onChange={e => setValueForUser('phone', e.target.value)} /><br /><br />
                            <label>Email</label><br /><br />
                            <input type="Email" placeholder="Email" /><br /><br />
                            <label>Address</label><br /><br />
                            <input type='type' placeholder="address" onChange={e => setValueForUser('address', e.target.value)} /><br /><br />
                        </form>
                        <div>
                            <button onClick={() => handleAddClick()}>Add Address</button>
                        </div>
                    </div>
                </>}

        </>

    )
}

export default AddAddress