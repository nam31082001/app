import { useState } from "react"
import { AiOutlineStar } from 'react-icons/ai'
import { useDispatch } from "react-redux"
import UpLoadFile from "./uploadImg"
const AddAssess = () => {
    const dispatch = useDispatch()
    const [checkAssess, setCheckAssess] = useState(true)
    const [checkNotiFi, setCheckNotiFi] = useState(false)
    const [link, setLink] = useState([])
    const [dataInput, setDataInput] = useState({ describe: '', category: '', color: '', title: '' })
    const setChangeInput = (key, value) => {
        const newVal = { ...dataInput, [key]: value };
        setDataInput(newVal)
    }
    const addFileImg = (index) => {
        const copyLink = [...link, index]
        setLink(copyLink)
    }
    const handleClickAssess = () => {
        const id = Math.floor(Math.random() * 100);
        const data = {
            id: id,
            name: "n*****9",
            evaluate: 3,
            describe: dataInput.describe,
            color: dataInput.color,
            title: dataInput.title,
            img: link,
            feedback: "Thank you for reviewing 2s Clothing Hope you had a great experience at the shop. Hope 2s Clothing can serve you in the near future"
        }
        dispatch(
            {
                type: 'ADD_ASSESS',
                payload: data
            }
        )
        setCheckAssess(true)
        setCheckNotiFi(true)
    }
    return (
        <>
            {
                checkAssess ?
                    <> <button onClick={() => setCheckAssess(false)}>+ Add Assess</button></>
                    :
                    <>
                        <div className='add_assess'>
                            <h4>Add Assess &emsp; <button onClick={() => handleClickAssess()}>Save</button> </h4>

                            <br />
                            <span>
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </span>
                            <p>
                                <span>
                                    <input type="text" className="name_input" onChange={(e) => setChangeInput('describe', e.target.value)} />
                                    <label className="name_label">Describe</label>
                                </span>
                                <span>
                                    <input type="text" className="name_input" onChange={(e) => setChangeInput('category', e.target.value)} />
                                    <label className="name_label">Category</label>
                                </span>
                            </p>
                            <p>
                                <span>
                                    <input type="text" className="name_input" onChange={(e) => setChangeInput('color', e.target.value)} />
                                    <label className="name_label">Color</label>
                                </span>
                                <span>
                                    <input type="text" className="name_input" onChange={(e) => setChangeInput('title', e.target.value)} />
                                    <label className="name_label">Title</label>
                                </span>
                            </p>
                            <UpLoadFile addFileImg={addFileImg} />
                          
                        </div>
                    </>
            }
        </>

    )
}
export default AddAssess