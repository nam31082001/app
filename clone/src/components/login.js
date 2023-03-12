import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'


const Login = (props) => {
    const { handleCheckLogin } = props
    const history = useHistory()
    return (
        <>
            <h1>LOGIN</h1>
            <form >
                <label>UserName</label><br /><br />
                <input type="text" placeholder="UserName" /><br /><br />
                <label>Password</label><br /><br />
                <input type='password' placeholder="Password" /><br />
                <div>
                    <button onClick={() => history.push('/')}>Login up</button>
                </div>
            </form>
            <div className="login_icon">
                <div>
                    <FaFacebookF />
                    <BsInstagram />
                    <BsFillTelephoneFill />
                </div>
            </div>
            <p>
                If you don't have an account, please <span onClick={() => handleCheckLogin()} >register</span> now
            </p>
        </>
    )
}

export default Login