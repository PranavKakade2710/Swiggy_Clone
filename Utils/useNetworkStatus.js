import { useEffect, useState } from "react"

const useNetworkStatus = ()=>{ 
const[onlineStatus,setonlineStatus] = useState(true)
useEffect(()=>{
    window.addEventListener("offline", ()=>{
        setonlineStatus(false);
    });
    window.addEventListener("online", ()=>{
        setonlineStatus(true);
    });
},[]);

return onlineStatus;

}
export default useNetworkStatus;