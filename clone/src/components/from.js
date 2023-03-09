import { useState } from "react"
import Login from "./login"
import Register from "./register"

const From = () => {
    const [checkLogin, setCheckLogin] = useState(true)
    const handleCheckLogin = (index) => {
        setCheckLogin(index)
    }
    return (
        <div className="from">
          
                <div className="login">
                    {checkLogin === false ?
                        <>
                            <div>
                                <button onClick={() => setCheckLogin(true)}> LOGIN</button>
                            </div>
                        </> :
                        <>
                            <Login handleCheckLogin={handleCheckLogin} />
                        </>}
                </div>
           

           
                <div className="register">
                    {checkLogin === true ?
                        <>
                            <div>
                                <button onClick={() => setCheckLogin(false)}> REGISTER </button>
                            </div>
                        </> :
                        <>
                            <Register handleCheckLogin={handleCheckLogin} />
                        </>}
                </div>
            




        </div>

    )
}
export default From