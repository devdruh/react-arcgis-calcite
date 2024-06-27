import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@esri/calcite-components/dist/calcite/calcite.css';
import './assets/styles/index.css';

import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath("https://unpkg.com/@esri/calcite-components/dist/calcite/assets");
// setAssetPath("https://js.arcgis.com/calcite-components/2.9.0/assets");

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
