import { useState } from "react"


const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage, handelCheck, setposterPage }) => {
    const [check, setCheck] = useState(true)
    let page = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        page.push(i)
    }

    const handleButtonClick = (item) => {
        setCurrentPage(item)
        handelCheck()
    }
    const handleClickSeeAll = () => {
        setCurrentPage(1)
        setposterPage(20)
        handelCheck()
        setCheck(false)

    }
    const handleClickSeeShortcut = () => {
        setCurrentPage(1)
        setposterPage(6)
        handelCheck()
        setCheck(true)

    }
    return (
        <div className="pagination">
            {
                page.map(item => {
                    return (
                        <button onClick={() => handleButtonClick(item)} className={item === currentPage ? 'active' : ''}>{item}</button>
                    )
                })
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
    )
}
export default Pagination