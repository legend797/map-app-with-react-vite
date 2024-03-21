
import "../DashboardPageComponents/DataMap.css";

import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import { GeoJSON, MapContainer, useMap, TileLayer } from "react-leaflet";
import myanmarGeoJSON from './../../assets/state_region.json';
import townshipGeoJSON from "./../../assets/township2.json";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
// import HorizonBarChart from "./BarChart";


const SetBounds = ({ geoJsonData ,selectState,setSelectState}) => {
    

 
  
    const map = useMap();
  

  
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.ST) {
   // Add hover event listener
   layer.on({
    mouseover: () => {
      layer.setStyle({
        fillColor: "#ff0000",
        // Change the fill color on hover
      });
    },
    mouseout: () => {
      layer.setStyle({
        fillColor:"#3551a4",
        fillOpacity:'1' // Reset the fill color on mouse out
      });
    },
    // click: () => {
       
    //     setSelectState(feature.properties.ST);
    //     map.fitBounds(layer.getBounds(), { maxZoom: 9 });
    //     console.log('selectState',selectState)
    //   },
    click: () => {
        setSelectState(feature.properties.ST);
        map.fitBounds(layer.getBounds(), { maxZoom: 12 });
      },
  });

      if (feature.properties.ST === "Tanintharyi") {
        L.tooltip({
          permanent: true,
          direction: "center",
          className: "map-label",
        })
          .setLatLng([12.0825, 98.6586])
          .setContent("Tanintharyi")
          .addTo(map);
      } else if (feature.properties.ST === "Yangon") {
        L.tooltip({
          permanent: true,
          direction: "center",
          className: "map-label",
        })
          .setLatLng([16.8661, 96.1951])
          .setContent("Yangon")
          .addTo(map);
      } else {
        layer
          .bindTooltip(feature.properties.ST, {
            permanent: true,
            direction: "center",
            className: "map-label",
            
          })
          .openTooltip();
      }
    }
  };
  useEffect(() => {
    const layer = new L.GeoJSON(geoJsonData, {
      
      onEachFeature,
    });

    const bounds = layer.getBounds();
    map.fitBounds(bounds);
    map.setMaxZoom(16);
    map.setMinZoom(4);
  }, [map, geoJsonData]);

  return (
   
    <GeoJSON
      data={geoJsonData}
      onEachFeature={onEachFeature}
      style={{
        fillColor: "#3551a4",
        fillOpacity: "1",
        color: "#83b4d4",
        weight: "1",
      }}
    />
    
    
  ); 
};

const DataMap = () => {
    const [selectState,setSelectState] = useState(null);
  

  const zoomPropperties = {
    doubleClickZoom: true,
    closePopupOnClick: true,
    dragging: false,
    zoomSnap: true,
    zoomDelta: true,
    trackResize: false,
    touchZoom: false,
    scrollWheelZoom: false,
  };

  return (
    
    <section className=" pt-[15vh] px-5 sm:px-12 md:px-32 w-full pb-12">
         <div>
       
         {selectState && (
        <h2 className="text-2xl text-gray-500 font-bold mb-4"> {selectState}</h2>
      )}
      </div>
    <div className="flex justify-start items-center  gap-[30px]">
        
      <MapContainer
      id='leaflet-container'
        zoom={10}
        {...zoomPropperties}
        className=" h-[60vh] sm:h-[80vh] w-1/3 flex justify-center items-center"
      >
        <SetBounds geoJsonData={myanmarGeoJSON} selectState={selectState}
        setSelectState={setSelectState} 
         />
      </MapContainer>
      {/* Bar Chart */}
      {/* <div className="w-1/2 h-[100px]">
      <HorizonBarChart/>
      </div> */}
    </div>
    </section>
  );
};
export default DataMap;