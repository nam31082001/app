import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import useRandom from "../cutums/random"

const RelatedProduct = ({handelCheck}) => {
    const dispatch = useDispatch()
    const { arrData } = useRandom()
    const handleDetailNew = (index) => {
        dispatch({
            type: 'DETAIL',
            payload: index.id

        })

        handelCheck()

    }
    return (
        <>
            {arrData.map(item => {
                return (
                    <div key={item.id} className='nam'>
                        <img src={item.image} />
                        <div>
                            <button onClick={() => handleDetailNew(item)}>Detail</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default RelatedProduct