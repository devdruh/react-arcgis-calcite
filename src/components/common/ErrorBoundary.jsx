import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return (
                <div>
                    {error.statusText || error.message}
                </div>
            )
        }

        if (error.status === 401) {
            return (
                <div>
                    {error.statusText || error.message}
                </div>
            )
        }

        if (error.status === 503) {
            return (<div>Looks like our API is down</div>);
        }

        if (error.status === 418) {
            return (<div>🫖</div>);
        }
    }

    return (<div>Something went wrong</div>);
}

export default ErrorBoundary