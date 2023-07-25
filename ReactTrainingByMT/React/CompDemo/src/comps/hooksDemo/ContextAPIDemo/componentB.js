import { useContext } from "react";
import { ColorContext } from "../../../App";
import ComponentC from "./componentC";

const ComponentB = () => {

    const color = useContext(ColorContext);
    return(
        <div>
            <div>
                From Component B
            </div>
            <div>
                Favourite Color: {color}
            </div>
            <ComponentC />
        </div>
    )
};

export default ComponentB;