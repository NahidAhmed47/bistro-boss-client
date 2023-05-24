import { useEffect, useState } from "react";

const useMenu = ()=>{
    const [menu, setItemData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => {
            setItemData(data)
            setLoading(false)
        });
    },[])
    return [menu]
}

export default useMenu;