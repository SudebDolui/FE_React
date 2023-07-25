import { useEffect, useState } from "react";

export default function SimpleUseEffect () {

    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");

    // useEffect(() => {
    //     console.log('Field is',val1);
    //   return () => {
    //     second
    //   }
    // }, [val1])
    
    // useEffect(() => console.log(`Field 1 is ${val1}`));
    // useEffect(() => console.log(`Field 1 is ${val1}`), []);
    // useEffect(() => console.log(`Field 1 is ${val1}`), [val1]);
    // useEffect(() => console.log(`Field 2 is ${val2}`));
    // useEffect(() => console.log(`Field 2 is ${val2}`), []);
    // useEffect(() => console.log(`Field 2 is ${val2}`), [val2]);
    useEffect(() => console.log(`Field 1 is ${val1}. Field 2 is ${val2}`), [val1, val2]);

    return(
        <>
            <input 
                value = {val1}
                onChange = {(e) => setVal1(e.target.value)}
            />
            <input 
                value = {val2}
                onChange = {(e) => setVal2(e.target.value)}
            />
        </>
    )
};