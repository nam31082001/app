import { useSelector } from "react-redux"

const useCategory = (index) => {
    const data = useSelector(state => state.data)
    const dataNew = data.filter(item => item.category === index)
    console.log(dataNew)
    return { dataNew }
}
export default useCategory