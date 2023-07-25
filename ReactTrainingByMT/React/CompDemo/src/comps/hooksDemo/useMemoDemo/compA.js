import { useEffect, useState } from "react";

export default function ComponentA() {
    
    let renderCount = 10;
    // const [renderCount, setRenderCount] = useState(10)

    useEffect(() => {
        renderCount++;
        // setRenderCount(renderCount);
        console.log("From Child", renderCount);
    })
    
    return (
        <div>
            <h3>Component A Render count: {renderCount}</h3>
        </div>
    )

};
