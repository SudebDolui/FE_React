import { useState, useEffect, useRef } from "react";

const Menu = () => {

    const [on, setOn] = useState(true);
    const refEle = useRef();

    useEffect(() => {
        const listener = e => {
            if(!refEle.current) return ;
            if(!refEle.current.contains(e.target)) {
                setOn(false)
            };

        };
        console.log("On status", on);
    
        window.addEventListener('mousedown', listener);

        return () => {
            window.removeEventListener('mousedown', listener);
        };
    }, [on])


    if(!on) return null;
    

    return(
        <>
        <ul ref = {refEle}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
        </ul>
    </>
)
};

export default Menu
