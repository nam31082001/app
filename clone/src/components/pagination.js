const Pagination = ({totalPosts,postPerPage,setCurrentPage,currentPage}) => {
    let page = []
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        page.push(i)
    }
    return (
        <div className="pagination">
           {
            page.map(item=>{
                return(
                    <button onClick={()=>setCurrentPage(item)} className={item===currentPage?'active':''}>{item}</button>
                )
            })
           }
        </div>
    )
}
export default Pagination