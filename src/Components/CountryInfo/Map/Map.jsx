import React from "react";
import ImageMapper from "react-image-mapper";
import mapJson from "./map.json";
import mapImage from "./world-political-maps.jpg";

const Map = () => {
     return <ImageMapper src={mapImage} map={mapJson} />;
};

export default Map;
