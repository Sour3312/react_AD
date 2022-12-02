import React from 'react'
import './map.css'

export default function MapRender() {
    const showMap = () => {
        window.mappls.Map('map', { center: [28.638698386592438, 77.27604556863412] });
    }
    return (
        <div>
            <div id="map" onClick={showMap}></div>
        </div>
    )
}

















// /* First install : npm install mappls-web-maps */

// import { mappls } from 'mappls-web-maps';
// function MapRender() {
//     const styleMap = { width: '99%', height: '99vh', border:'solid red 1px' }
//     var mapObject;
//     var mapplsClassObject = new mappls();
//     const title = "Default Map"
//     const mapProps = { center: [28.6330, 77.2194] }
//     mapplsClassObject.map({ id: "map", key: "https://apis.mappls.com/advancedmaps/api/a44f5fb6eda6cd07e15e26c82b7bb3bf/map_sdk?layer=vector&v=3.0", properties: mapProps }, (data) => {
//         mapObject = data;
//     });
//     return (
//         <div id="map" style={styleMap}></div>
//     );
// }
// export default MapRender;


