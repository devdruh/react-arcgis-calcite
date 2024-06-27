import "@esri/calcite-components/dist/components/calcite-label.js";
import "@esri/calcite-components/dist/components/calcite-menu.js";
import "@esri/calcite-components/dist/components/calcite-navigation.js";
import "@esri/calcite-components/dist/components/calcite-navigation-logo.js";
import "@esri/calcite-components/dist/components/calcite-switch.js";

import { CalciteLabel, CalciteMenu, CalciteNavigation, CalciteNavigationLogo, CalciteSwitch } from '@esri/calcite-components-react'
import { useEffect, useState } from 'react'
import { map } from '../../utils/arcgis';

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    const dark = document.querySelector("#arcgis-maps-sdk-theme-dark");
    const light = document.querySelector("#arcgis-maps-sdk-theme-light");

    const handleSwitch = (e) => {

        localStorage.setItem("darkMode", e.target.checked);

        // Calcite mode
        document.body.classList.toggle("calcite-mode-dark");
        // ArcGIS Maps SDK theme
        map.basemap = e.target.checked ? "dark-gray-vector" : "gray-vector";
        // Toggle ArcGIS Maps SDK widgets mode
        const widgets = document.getElementsByClassName("esri-ui");
        for (let i = 0; i < widgets.length; i++) {
            widgets.item(i).classList.toggle("calcite-mode-dark");
        }

        if (e.target.checked) {
            dark.disabled = false;
            light.disabled = true;
        } else {
            dark.disabled = true;
            light.disabled = false;
        }
    }

    useEffect(() => {

        const store = localStorage.getItem("darkMode");
        if (store) {
            if (store === 'true') {
                setDarkMode(true);
                dark.disabled = false;
                light.disabled = true;
                document.body.classList.add("calcite-mode-dark");
                map.set('basemap', 'dark-gray-vector');
            } else {
                setDarkMode(false);
                dark.disabled = true;
                light.disabled = false;
                document.body.classList.remove("calcite-mode-dark");
                map.set('basemap', 'gray-vector');
            }
        } else {
            map.set('basemap', 'gray-vector');
        }

    }, [dark, light]);

    return (
        <>
            <CalciteNavigation slot="header">
                <CalciteNavigationLogo id="header-title" href="/" heading="LOGO" heading-level="1" slot="logo"></CalciteNavigationLogo>
                <CalciteMenu slot="content-end">
                    <CalciteLabel layout="inline" class="label-wrapper">
                        Dark Mode: {
                            darkMode ? <CalciteSwitch checked onCalciteSwitchChange={handleSwitch} scale="l"></CalciteSwitch> :
                                <CalciteSwitch onCalciteSwitchChange={handleSwitch} scale="l"></CalciteSwitch>
                        }
                    </CalciteLabel>
                </CalciteMenu>
            </CalciteNavigation>
        </>
    )
}

export default Header