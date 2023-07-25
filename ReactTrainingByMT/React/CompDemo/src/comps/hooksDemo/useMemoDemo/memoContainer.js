import { useMemo, useState } from "react";
import ComponentA from "./compA";

const MemoContainer = () => {

    const [countA, setCountA] = useState(0);
    const incrementA = () => {
        setCountA(countA + 1);
    };

    const memoComponentA = useMemo(() => {
        return <ComponentA />
    }, []);

    return (
        <div>
            <h1>Memo Container CountA value = {countA}</h1>
            <button onClick={incrementA}>IncrementA</button>
            {/* <ComponentA /> */}
            {memoComponentA}
        </div>
    )

};

export default MemoContainer;