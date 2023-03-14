import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "./pagination"
import Product from "./product"

const Content = () => {
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [posterPage, setposterPage] = useState(6)
    const [dataCheck, setDataCheck] = useState([])
    const data = useSelector(state => state.data)
    useEffect(() => {
        dispatch({
            type: 'GET'
        })
    }, [])
    setTimeout(() => {
        setCheck(true)
    }, 2000);
    const handelCheck = () => {
        setCheck(false)
    }
    const lastPostIndex = currentPage * posterPage
    const firstPostIndex = lastPostIndex - posterPage
    const currentPost = data.slice(firstPostIndex, lastPostIndex)
    console.log(currentPost)

    
    return (
        <div className="content">
            <Product
                data={currentPost}
                check={check}
            />
            <Pagination
                totalPosts={data.length}
                postPerPage={posterPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                handelCheck={handelCheck}
                setposterPage={setposterPage}
            />
        </div>
    )
}
export default Content