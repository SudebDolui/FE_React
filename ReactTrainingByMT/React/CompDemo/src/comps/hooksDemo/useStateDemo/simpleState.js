import { useState } from "react";

export default function SimpleState() {
    const [userName, setUserName] = useState("Guest");
    const [age, setAge] = useState(0);

    // const onUpdate = () => {
    //     setUserName("Tester");
    //     setAge(12);
    // };

    function onUpdate () {
        setUserName("Tester");
        setAge(12);
    };

    return(
        <div>
            Name: {userName} <br/>
            Age: {age} <br/>
            {/* <button onClick={() => setUserName('Tester')}>Click</button> */}
            <button onClick={onUpdate}>Click</button>
        </div>
    )
};