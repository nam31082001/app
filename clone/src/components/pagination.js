const Pagination = ({totalPosts,postPerPage,setCurrentPage,currentPage,handelCheck}) => {
    let page = []
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        page.push(i)
    }

    const handleButtonClick=(item)=>{
        setCurrentPage(item)
        handelCheck()
    }
    return (
        <div className="pagination">
           {
            page.map(item=>{
                return(
                    <button onClick={()=>handleButtonClick(item)} className={item===currentPage?'active':''}>{item}</button>
                )
            })
           }
        </div>
    )
}
export default Pagination