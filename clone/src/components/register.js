import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs'
import '../css/login.css'

const Register=(props)=>{
    const {handleCheckLogin}=props
    return(
        <>
         <h1>REGISTER</h1>
            <form >
                <label>UserName</label><br /><br />
                <input type="text" placeholder="userName" /><br /><br />
                <label>Email or Number</label><br /><br />
                <input type="email" placeholder="Email" /><br /><br />
                <label>Password </label><br /><br />
                <input type='password' placeholder="Password" /><br /><br />
                <label>Password Retype </label><br /><br />
                <input type='password' placeholder="Password" /><br />
                <div>
                    <button>Register</button>
                </div>
            </form>
            <div className="register_icon">
               <div>
               <FaFacebookF />
                <BsInstagram />
                <BsFillTelephoneFill />
               </div>
            </div>
            <p>
            If you have an account, please <span onClick={()=>handleCheckLogin()}>login</span> now
            </p>
        </>
    )
}
export default Register