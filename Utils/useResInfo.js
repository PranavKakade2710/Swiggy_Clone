import { useEffect, useState } from "react"
import { MENU } from "./const";
const useResInfo =(resId)=>{
    const[resInfo,setResInfo]  =useState(null)
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData=async ()=>{
        let data = await fetch(MENU + resId);
        const json = await data.json()
        setResInfo(json.data)
    }

    return resInfo;
}

export default useResInfo;