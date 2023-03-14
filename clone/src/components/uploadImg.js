import { useState } from "react"
import { IoMdClose } from 'react-icons/io'
import '../css/upload_img.css'
const UpLoadFile = (props) => {
    const {addFileImg}=props
    const [img, setImg] = useState([])
    const handleUploadImg = (e) => {
        const link = e.target.files[0]
        link.preview = URL.createObjectURL(link)
        const id = Math.floor(Math.random() * 100);
        const data = {
            id: id,
            link: link
        }
        setImg([...img, data])
        addFileImg(link.preview)

    }
    const handleDeleteImg = (index) => {
        let copyImg = [...img]
        for (let i = 0; i < img.length; i++) {
            if (img[i].id === index) {
                copyImg.splice(i,1)
                setImg(copyImg)
            }
        }
    }
    return (
        <div className="upload_img">
            <input type='file' onChange={(e) => handleUploadImg(e)} />
            <div>
                {
                    img.map(item => {
                        return (
                            <div key={item.id}>
                                <img src={item.link.preview} />
                                <span ><IoMdClose onClick={() => handleDeleteImg(item.id)} /></span>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default UpLoadFile