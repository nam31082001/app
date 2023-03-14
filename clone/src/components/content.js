import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useCategory from "../cutums/category"
import Pagination from "./pagination"
import Product from "./product"
import Search from "./search"

const Content = () => {
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [posterPage, setposterPage] = useState(6)
    const data = useSelector(state => state.data)
    const checkSearch = useSelector(state => state.checkSearch)
    const searchNumber = useSelector(state => state.searchNumber)

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
    const handleClickSearch = (index) => {

    }

 

    return (
        <div className="content">
            <Search
                handleClickSearch={handleClickSearch}
                setCurrentPage={setCurrentPage}
                setposterPage={setposterPage}
                handelCheck={handelCheck}
            />
            <Product
                data={!checkSearch ? currentPost : searchNumber}
                check={check}
            />
            <Pagination
                totalPosts={!checkSearch ? data.length : searchNumber.length}
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