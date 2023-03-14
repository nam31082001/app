import { useState } from "react";

const useCheckLoading=()=>{
    const [checkLoading, setCheckLoading] = useState(false)
    setTimeout(() => {
        setCheckLoading(true)
    }, 2000);

    return{checkLoading}
}

export default useCheckLoading