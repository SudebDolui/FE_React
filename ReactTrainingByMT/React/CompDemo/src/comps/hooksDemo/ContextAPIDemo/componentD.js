import { useContext } from "react";
import { ColorContext, NameContext } from "../../../App";

const ComponentD = () => {
    const user = useContext(NameContext);
    const color = useContext(ColorContext);

    return(
        <div>
            <div>
                From ComponentD
            </div>
            <h1>
                User Name: {user}
            </h1>
            <h3 style = {{color: color}}>
                Color Received: {color}
            </h3>
        </div>
    )
};

export default ComponentD;