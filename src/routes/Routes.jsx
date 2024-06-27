import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/common/ErrorBoundary";
import Main from "../components/layout/Main";
import Home from "../pages/Home";

export function Fallback() {
    return <p>Performing initial data load</p>;
}

const Routes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            errorElement: <ErrorBoundary />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
            ]
        },
    ]);


    if (import.meta.hot) {
        import.meta.hot.dispose(() => router.dispose());
    }

    return <RouterProvider router={router} fallbackElement={<Fallback />} />
}

export default Routes