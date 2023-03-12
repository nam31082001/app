import { useState } from "react"
import Login from "./login"
import Register from "./register"

const From = () => {
    const [checkLogin, setCheckLogin] = useState(true)
   

    const handleDisplay = () => {
        !checkLogin ? setCheckLogin(true) : setCheckLogin(false)
    }
    const handleCheckLogin=()=>{
        !checkLogin ? setCheckLogin(true) : setCheckLogin(false)
        
    }
    return (
        <div className="from">
            <div className="login">
                {!checkLogin&&<button onClick={() => handleDisplay()}>LOGIN</button>}
                {checkLogin&&<div> <Login handleCheckLogin={handleCheckLogin}/></div>}
            </div>
            <div className="register">
                {checkLogin&& <button onClick={() => handleDisplay()}>REGISTER</button>}
                {!checkLogin && <div><Register handleCheckLogin={handleCheckLogin}/></div>}
            </div>
        </div>
    )
}
export default From