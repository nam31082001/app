import { useSelector } from "react-redux"

const useRandom=()=>{
    let arr = []
    let arrData=[]
    const data = useSelector(state => state.data)
    for (let i = 0; i < 10; i++) {
        const id = Math.floor(Math.random() * 20)
        arr.push(id)
    }
    for (let j = 0; j < arr.length; j++) {
        arr.forEach(item => {
            if (item === arr[j]) {
                item = Math.floor(Math.random() * 20)
            }
        })
    }
    data.forEach(item=>{
        for (let j = 0; j < arr.length; j++){
            if(item.id===arr[j]){
                arrData.push(item)
            }
        }
    })

    return{arrData}
}
export default useRandom