import bidv from '../img/bidv.png'
import agri from '../img/screenshot_1678350515.png'
import sacom from '../img/screenshot_1678350557.png'
import mb from '../img/screenshot_1678350573.png'

const MethodPayTitle = (props) => {
    const { checkMethod } = props
    return (
        <div className='method_pay_title'>
            {
                checkMethod === '' && <></>
            }
            {
                checkMethod === 'Credit Card' &&
                <>
                    <button>Select Cart</button>
                    <span>This method will charge you 5% of the total order value</span>
                </>
            }
            {
                checkMethod === 'Bank Card' &&
                <>
                    <p>This method will charge you 10% of the total order value</p>
                    <p>
                        <input type="radio" name='bank' />
                        <img src={bidv}/>
                        BIDV
                    </p>
                    <p>
                        <input type="radio" name='bank' />
                        <img src={agri} />
                        AgriBank
                    </p>
                    <p>
                        <input type="radio" name='bank' />
                        <img src={sacom} />
                        SacomBank
                    </p>
                    <p>
                        <input type="radio" name='bank' />
                        <img src={mb} />
                        MB
                    </p>
                </>
            }
            {
                checkMethod === 'Banking' &&
                <>
                    <p>This method will charge you 0% of the total order value</p>
                    <p>Bank MB</p>
                    <p>Number Cart : 0000xxxxxx</p>
                    <p>Please take a photo of the transaction receipt</p>
                    <input type="file" />
                </>
            }
            {
                checkMethod === 'Cash' &&
                <>
                    <p>This method will charge you 15% of the total order value</p>
                </>
            }
        </div>
    )
}

export default MethodPayTitle