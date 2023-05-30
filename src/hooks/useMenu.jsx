import { useEffect, useState } from "react";

const useMenu = ()=>{
    const [menu, setItemData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('https://bistro-boss-server-two.vercel.app/menu')
        .then(res => res.json())
        .then(data => {
            setItemData(data)
            setLoading(false)
        });
    },[])
    return [menu]
}

export default useMenu;