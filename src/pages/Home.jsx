import { Suspense, lazy } from "react";
import LoadingFallback from "../components/common/LoadingFallback";

const MapContainer = lazy(() => import('../components/map/MapContainer'));
const Home = () => {

    return (
        <Suspense fallback={<LoadingFallback />}>
            <MapContainer />
        </Suspense>
    );

}

export default Home