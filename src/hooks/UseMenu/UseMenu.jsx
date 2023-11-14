import { useEffect, useState } from "react";


const UseMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        fetch('http://localhost:8001/menu')
        .then(res => res.json())
        .then(data => {
            setMenu(data)
            setLoading(false)
        })

    })

    return [menu];
};

export default UseMenu;