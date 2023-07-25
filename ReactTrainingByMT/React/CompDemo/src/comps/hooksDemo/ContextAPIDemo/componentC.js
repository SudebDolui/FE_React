import { ColorContext, NameContext } from "../../../App";
import ComponentD from "./componentD";

const ComponentC = () => {

    return (
        <div>
            <div>
                From Component C
            </div>
            <NameContext.Consumer>
                {name => {
                    return (
                        <ColorContext.Consumer>
                            {color => {
                                return <div>
                                    Name: {name}
                                    Color: {color}
                                </div>
                            }}
                        </ColorContext.Consumer>
                    )
                }}
            </NameContext.Consumer>
            <ComponentD />
        </div>
    )
};

export default ComponentC;