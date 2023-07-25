import { useRef } from "react";

const Title = () => {
    const refIn = useRef();

    const onClick = () => {
        refIn.current.focus();
    }

    return (
    <>
        <input ref={refIn}/>
        {/* Depends in browser */}
        {/* <input ref={refIn}/> */}
        <button onClick={onClick}>Focus</button>
    </>
    )
};

export default Title;