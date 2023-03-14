import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
const Search = ({ handleClickSearch, setCurrentPage, setposterPage, handelCheck }) => {
    const [inputSearch, setInputSearch] = useState('')
    const dispatch = useDispatch()
    const [check, setCheck] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setCheck(false)
        }, 2000);
    },[])
    const handleChange = (e) => {
        setInputSearch(e.target.value)
    }
    const handleClickAll = () => {
        dispatch({ type: "BUTTON_ALL" })
        setCurrentPage(1)
        setposterPage(20)
        handelCheck()
    }
    return (
        <>
            {
                check ?
                    <></>
                    :
                    <div className="search">
                        <div className='search_input' onChange={(e) => handleChange(e)}>
                            <input type="type" />
                            <div className='icon_search' onClick={() => dispatch({ type: "TEXT_SEARCH_DATA", payload: inputSearch })}>  <BsSearch /></div>
                        </div>
                        <div className='search_button'>
                            <button onClick={() => dispatch({ type: "BUTTON_SEARCH", payload: `men's clothing` })}>men's clothing</button>
                            <button onClick={() => dispatch({ type: "BUTTON_SEARCH", payload: `jewelery` })}>jewelery</button>
                            <button onClick={() => dispatch({ type: "BUTTON_SEARCH", payload: `electronics` })}>electronics</button>
                            <button onClick={() => dispatch({ type: "BUTTON_SEARCH", payload: `women's clothing` })}>women's clothing</button>
                            <button onClick={() => handleClickAll()}>All</button>
                        </div>
                    </div>
            }
        </>

    )
}
export default Search