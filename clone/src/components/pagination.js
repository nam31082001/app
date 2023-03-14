import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage, handelCheck, setposterPage }) => {
    const [checkButton, setCheckButton] = useState(true)
    const [check, setCheck] = useState(true)
    const checkSearch = useSelector(state => state.checkSearch)
    let page = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        page.push(i)
    }
    const dispatch = useDispatch()
    const handleButtonClick = (item) => {
        setCurrentPage(item)
        handelCheck()
    }
    const handleClickSeeAll = () => {
        setCheckButton(false)
        setCurrentPage(1)
        setposterPage(20)
        handelCheck()
        setCheck(false)
        dispatch({ type: "BUTTON_ALL" })

    }
    const handleClickSeeShortcut = () => {
        setCheckButton(true)
        setCurrentPage(1)
        setposterPage(6)
        handelCheck()
        setCheck(true)


    }
    return (
        <>
            {
                checkSearch ?
                    <></>
                    :
                    <>

                        <div className="pagination">
                            {
                                checkButton ?
                                    <>
                                        {
                                            page.map(item => {
                                                return (
                                                    <button onClick={() => handleButtonClick(item)} className={item === currentPage ? 'active' : ''}>{item}</button>
                                                )
                                            })
                                        }
                                    </>
                                    :
                                    <>

                                    </>
                            }

                            {
                                check ?
                                    <>
                                        <button onClick={() => handleClickSeeAll()}>All</button>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => handleClickSeeShortcut()} style={{ width: "200px" }} >Shortcut</button>
                                    </>
                            }
                        </div>
                    </>
            }
        </>

    )
}
export default Pagination