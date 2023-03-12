import { CiFaceSmile } from 'react-icons/ci'
import { AiOutlineStar, AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import AddAssess from './addAssess'
const AssessClient = () => {
    const data = useSelector(state => state.assess)
    return (
        <div>
            {
                data.map((item, index) => {
                    return (

                        <>
                            <div key={item.id}>
                                <div>
                                    <CiFaceSmile />
                                </div>
                                <div>
                                    <p><span>{item.name}</span></p>
                                    <p>
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                    </p>

                                    <p>Describe:<span>{item.describe}</span></p>
                                    <p>Material:<span>{item.material}</span></p>
                                    <p>Color:<span>{item.color}</span></p>
                                    <p>Title<span>{item.title}</span></p>
                                    <div>
                                        {
                                            item.img.map(index => {
                                                return (
                                                    <img src={index} />
                                                )
                                            })
                                        }
                                    </div>

                                    <h4>feedback</h4>
                                    <p>{item.feedback}</p>
                                    <span><AiOutlineLike /> 11</span>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })
            }
           <AddAssess/>
        </div>
    )
}
export default AssessClient