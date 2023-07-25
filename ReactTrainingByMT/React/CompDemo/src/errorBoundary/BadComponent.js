import ErrorBoundary from "./ErrorBoundary";

export function BadComponent() {
    return ({
        oops: "This is not good"
    })
};

export function BadComponentContainer() {
    return (
        <>
        <h1>
            From Bad Component Container
        </h1>
        <ErrorBoundary
        FallbackComponent = {ErrorFallBack}
        >
            <BadComponent />
        </ErrorBoundary>
        </>
    )
};

export function ErrorFallBack({error}) {
    return (
        <>
            <div>
                <p>
                    Something went wrong
                </p>
                <p>
                    {error.message}
                </p>
            </div>
        </>
    );
};
