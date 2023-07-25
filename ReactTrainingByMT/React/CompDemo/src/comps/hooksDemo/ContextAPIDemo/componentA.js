import ComponentB from "./componentB";


const ComponentA = () => {
    return (
        <div>
            <div>
                From Component A
                <ComponentB />
            </div>
        </div>
    )
};

export default ComponentA;