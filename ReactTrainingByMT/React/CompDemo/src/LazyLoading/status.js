// const loadStatus = () => "Success -ready";
const loadStatus = () => "Success -ready";

function Status () {
    const status = loadStatus();
    return (
        <>
            <h1>Status: {status}</h1>
        </>
    );
};

export default Status;