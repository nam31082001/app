import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "./pagination"
import Product from "./product"

const Content = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [posterPage, setposterPage] = useState(6)
    const data = useSelector(state => state.data)
    useEffect(() => {
        dispatch({
            type: 'GET'
        })
    }, [])
    const lastPostIndex = currentPage * posterPage
    const firstPostIndex = lastPostIndex - posterPage
    const currentPost = data.slice(firstPostIndex,lastPostIndex)
    return (
        <div className="content">
            <Product data={currentPost} />
            <Pagination totalPosts={data.length} postPerPage={posterPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
export default Content