import { useEffect, useRef } from 'react'
import { viewMap } from '../../utils/arcgis';

const MapContainer = () => {

    const mapRef = useRef(null);

    useEffect(() => {

        if (mapRef.current) {

            viewMap.set('container', mapRef.current);

            viewMap.when(function () {

                document.querySelector("calcite-shell").hidden = false;
                document.querySelector("calcite-loader").hidden = true;

            });

            return () => {
                if (viewMap) {
                    mapRef.current = null;
                }
            };
        }

    }, []);

    return (
        <div className="map-container">
            <div id="map-view" ref={mapRef} />
        </div>
    )
}

export default MapContainer