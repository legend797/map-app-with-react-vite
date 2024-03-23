// import "../DashboardPageComponents/DataMap.css";

// import React, { useState, useEffect, useRef } from "react";
// import L from "leaflet";
// import {
//   GeoJSON,
//   MapContainer,
//   useMap,
//   TileLayer,
//   Marker,
//   Popup,
// } from "react-leaflet";
// import myanmarGeoJSON from "./../../assets/state_region.json";
// import townshipGeoJSON from "./../../assets/township2.json";
// import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

// import markerData from "./../../assets/markerData";

// const SetBounds = ({ geoJsonData, selectState, setSelectState }) => {
//   const [highlightedState, setHighlightedState] = useState(null);
//   const [initialBounds, setInitialBounds] = useState(null);
//   const [showTownships, setShowTownships] = useState(false);

//   const map = useMap();

//   const onEachFeature = (feature, layer) => {
//     if (feature.properties && feature.properties.ST) {
//       // Add hover event listener
//       layer.on({
//         mouseover: () => {
//           layer.setStyle({
//             fillColor: "#c40000",
//             fillOpacity: "0.4",
//           });
//         },
//         mouseout: () => {
//           if (highlightedState !== feature.properties.ST) {
//             layer.setStyle({
//               fillColor: "#3551a4",
//               fillOpacity: "1",
//             });
//           }
//         },
//         click: () => {
//           if (highlightedState === feature.properties.ST) {
//             // Clicked on the same state, reset the color
//             layer.setStyle({
//               fillColor: "#3551a4",
//               fillOpacity: "1",
//             });
//             setHighlightedState(null);
//             setSelectState(null);
//             map.fitBounds(initialBounds);
//           } else {
//             // Reset the previously highlighted state's color
//             if (highlightedState) {
//               map.eachLayer((layer) => {
//                 if (
//                   layer.feature &&
//                   layer.feature.properties.ST === highlightedState
//                 ) {
//                   layer.setStyle({
//                     fillColor: "#3551a4",
//                     fillOpacity: "1",
//                   });
//                 }
//               });
//             }

//             // Highlight the newly clicked state
//             layer.setStyle({
//               fillColor: "#ff0000",
//               fillOpacity: "0.5",
//             });
//             setHighlightedState(feature.properties.ST);
//             setSelectState(feature.properties.ST);
//             map.fitBounds(layer.getBounds(), { maxZoom: 10 });
//           }
//         },
//       });

//       // Add tooltips for specific states
//       if (feature.properties.ST === "Tanintharyi") {
//         L.tooltip({
//           permanent: true,
//           direction: "center",
//           className: "map-label",
//         })
//           .setLatLng([12.0825, 98.6586])
//           .setContent("Tanintharyi")
//           .addTo(map);
//       } else if (feature.properties.ST === "Yangon") {
//         L.tooltip({
//           permanent: true,
//           direction: "center",
//           className: "map-label",
//         })
//           .setLatLng([16.8661, 96.1951])
//           .setContent("Yangon")
//           .addTo(map);
//       } else {
//         layer
//           .bindTooltip(feature.properties.ST, {
//             permanent: true,
//             direction: "center",
//             className: "map-label",
//           })
//           .openTooltip();
//       }
//     }
//   };

//   const onEachTownshipFeature = (feature, layer) => {
//     if (feature.properties && feature.properties.ts_eng) {
//       const townshipName = feature.properties.ts_eng;
      
//       // Calculate the centroid of the polygon
//       const centroid = layer.getBounds().getCenter();
  
//       L.tooltip({
//           permanent: true,
//           direction: "center",
//           className: "map-label",
//       })
//       .setLatLng(centroid)
//       .setContent(townshipName)
//       .addTo(map);
//     } else {
//       // If township name is not available, bind tooltip to layer
//       layer
//           .bindTooltip("Township Name Not Available", {
//               permanent: true,
//               direction: "center",
//               className: "map-label",
//           })
//           .openTooltip();
//     }
//   };

//   useEffect(() => {
//     const layer = new L.GeoJSON(geoJsonData, {
//       onEachFeature,
//     });

//     const bounds = layer.getBounds();
//     map.fitBounds(bounds);
//     setInitialBounds(bounds);
//     map.setMaxZoom(16);
//     map.setMinZoom(4);

//     // Add event listener for zoom change
//     map.on("zoomend", () => {
//       const currentZoom = map.getZoom();
//       setShowTownships(currentZoom >= 10);
//     });

//     // Clean up the event listener when the component unmounts
//     return () => {
//       map.off("zoomend");
//     };
//   }, [map, geoJsonData]);

//   const resetZoom = () => {
//     map.fitBounds(initialBounds);
//     setHighlightedState(null);
//     setSelectState(null);
//     setShowTownships(false);
//   };

//   return (
//     <div>
//       <GeoJSON
//         data={geoJsonData}
//         onEachFeature={onEachFeature}
//         style={{
//           fillColor: "#3551a4",
//           fillOpacity: "1",
//           color: "#83b4d4",
//           weight: "1",
//         }}
//       />
//       {showTownships && (
//         <GeoJSON
//           data={townshipGeoJSON}
//           onEachFeature={onEachTownshipFeature}
//           style={{
//             fillColor: "#83b4d4",
//             fillOpacity: "0.5",
//             color: "#3551a4",
//             weight: "1",
//           }}
//         />
//       )}
//       <button
//         className="reset-zoom-button"
//         onClick={resetZoom}
//         style={{
//           position: "absolute",
//           top: "10px",
//           right: "10px",
//           zIndex: 1000,
//           backgroundColor: "#fff",
//           border: "1px solid #ccc",
//           padding: "5px 10px",
//           cursor: "pointer",
//         }}
//       >
//         Reset Zoom
//       </button>
//     </div>
//   );
// };

// const DataMap = () => {
//   const [selectState, setSelectState] = useState(null);

//   const zoomPropperties = {
//     doubleClickZoom: true,
//     closePopupOnClick: true,
//     dragging: true,
//     zoomSnap: true,
//     zoomDelta: true,
//     trackResize: false,
//     touchZoom: false,
//     scrollWheelZoom: false,
//   };

//   return (
//     <div className=" ">
//       <MapContainer
//         id="leaflet-container"
//         zoom={10}
//         {...zoomPropperties}
//         className="border-2 rounded-[8px] w-[1000px] h-[480px]  flex justify-center items-center"
//       >
//         <SetBounds
//           geoJsonData={myanmarGeoJSON}
//           selectState={selectState}
//           setSelectState={setSelectState}
//         />
//         {markerData.map((marker, index) => (
//           <Marker key={index} position={marker.position} icon={marker.icon}>
//             <Popup>{marker.popupText}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DataMap;

import "../DashboardPageComponents/DataMap.css";
import React, { useState, useEffect } from "react";
import L from "leaflet";
import {
  GeoJSON,
  MapContainer,
  useMap,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import myanmarGeoJSON from "./../../assets/state_region.json";
import townshipGeoJSON from "./../../assets/township2.json";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import markerData from "./../../assets/markerData";

const SetBounds = ({ geoJsonData, selectState, setSelectState }) => {
  const [highlightedState, setHighlightedState] = useState(null);
  const [initialBounds, setInitialBounds] = useState(null);
  const [showTownships, setShowTownships] = useState(false);
  const map = useMap();

  const onEachFeature = (feature, layer) => {
    // Your existing onEachFeature implementation...
    
    if (feature.properties && feature.properties.ST) {
      // Add hover event listener
      layer.on({
        mouseover: () => {
          layer.setStyle({
            fillColor: "#c40000",
            fillOpacity: "0.4",
          });
        },
        mouseout: () => {
          if (highlightedState !== feature.properties.ST) {
            layer.setStyle({
              fillColor: "#3551a4",
              fillOpacity: "1",
            });
          }
        },
        click: () => {
          if (highlightedState === feature.properties.ST) {
            // Clicked on the same state, reset the color
            layer.setStyle({
              fillColor: "#3551a4",
              fillOpacity: "1",
            });
            setHighlightedState(null);
            setSelectState(null);
            map.fitBounds(initialBounds);
          } else {
            // Reset the previously highlighted state's color
            if (highlightedState) {
              map.eachLayer((layer) => {
                if (
                  layer.feature &&
                  layer.feature.properties.ST === highlightedState
                ) {
                  layer.setStyle({
                    fillColor: "#3551a4",
                    fillOpacity: "1",
                  });
                }
              });
            }

            // Highlight the newly clicked state
            layer.setStyle({
              fillColor: "#ff0000",
              fillOpacity: "0.5",
            });
            setHighlightedState(feature.properties.ST);
            setSelectState(feature.properties.ST);
            map.fitBounds(layer.getBounds(), { maxZoom: 10 });
          }
        },
      });

      // Add tooltips for specific states
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

  const onEachTownshipFeature = (feature, layer) => {
    // Corrected implementation without the incorrect useMap() call
    if (feature.properties && feature.properties.ts_eng) {
      const townshipName = feature.properties.ts_eng;
      const centroid = layer.getBounds().getCenter();
      L.tooltip({
        permanent: true,
        direction: "center",
        className: "map-label",
      })
      .setLatLng(centroid)
      .setContent(townshipName)
      .addTo(map);
    } else {
      layer.bindTooltip("Township Name Not Available", {
        permanent: true,
        direction: "center",
        className: "map-label",
      }).openTooltip();
    }
  };




  useEffect(() => {
    // Setup the GeoJSON layer for the main geoJsonData (e.g., states or regions)
    const mainLayer = L.geoJSON(geoJsonData, {
      onEachFeature: onEachFeature,onEachTownshipFeature,
      style: {
        fillColor: "#3551a4",
        fillOpacity: "1",
        color: "#83b4d4",
        weight: "1",
      }
    }).addTo(map);
  
    // Calculate and set the initial map bounds based on the main geoJsonData layer
    const bounds = mainLayer.getBounds();
    map.fitBounds(bounds);
    setInitialBounds(bounds);
  
    // Setup the maximum and minimum zoom levels
    map.setMaxZoom(16);
    map.setMinZoom(4);
  
    // Add the township layer without adding it to the map yet
    const townshipLayer = L.geoJSON(townshipGeoJSON, {
      onEachFeature: onEachTownshipFeature,
      style: {
        fillColor: "#83b4d4",
        fillOpacity: "0.5",
        color: "#3551a4",
        weight: "1",
      }
    });
  
    // Add event listener for zoom change to toggle the township layer
    map.on("zoomend", () => {
      const currentZoom = map.getZoom();
      if (currentZoom >= 10 && !map.hasLayer(townshipLayer)) {
        map.addLayer(townshipLayer);
        setShowTownships(true);
      } else if (currentZoom < 10 && map.hasLayer(townshipLayer)) {
        map.removeLayer(townshipLayer);
        setShowTownships(false);
      }
    });
  
    // Clean up: remove the layers and the event listener when the component unmounts or dependencies change
    return () => {
      map.removeLayer(mainLayer);
      map.removeLayer(townshipLayer);
      map.off("zoomend");
    };
  }, [map, geoJsonData, showTownships]);

  useEffect(() => {
    // Setup the main GeoJSON layer for Myanmar (states or regions)
    const mainLayer = L.geoJSON(geoJsonData, {
      onEachFeature: onEachFeature,
      style: {
        fillColor: "#3551a4",
        fillOpacity: "1",
        color: "#83b4d4",
        weight: "1",
      }
    }).addTo(map); // Initially add the main layer to the map
  
    // Setup the township GeoJSON layer but do not add it to the map yet
    const townshipLayer = L.geoJSON(townshipGeoJSON, {
      onEachFeature: onEachTownshipFeature,
      style: {
        fillColor: "#83b4d4",
        fillOpacity: "0.5",
        color: "#3551a4",
        weight: "1",
      }
    });
  
    // Calculate and set the initial map bounds based on the main geoJsonData layer
    const bounds = mainLayer.getBounds();
    map.fitBounds(bounds);
    setInitialBounds(bounds);
  
    // Setup maximum and minimum zoom levels
    map.setMaxZoom(16);
    map.setMinZoom(4);
  
    // Add event listener for zoom change to toggle between the main layer and the township layer
    map.on("zoomend", () => {
      const currentZoom = map.getZoom();
      if (currentZoom >= 6 && !map.hasLayer(townshipLayer)) {
        map.addLayer(townshipLayer); // Add township layer if zoom is 6 or more
        if (map.hasLayer(mainLayer)) {
          map.removeLayer(mainLayer); // Remove the main layer if it's present
        }
        setShowTownships(true);
      } else if (currentZoom < 6) {
        if (!map.hasLayer(mainLayer)) {
          map.addLayer(mainLayer); // Add the main layer if zoom is less than 6
        }
        if (map.hasLayer(townshipLayer)) {
          map.removeLayer(townshipLayer); // Remove township layer if it's present
        }
        setShowTownships(false);
      }
    });
  
    // Clean up: remove layers and the event listener when the component unmounts or dependencies change
    return () => {
      if (map.hasLayer(mainLayer)) {
        map.removeLayer(mainLayer);
      }
      if (map.hasLayer(townshipLayer)) {
        map.removeLayer(townshipLayer);
      }
      map.off("zoomend");
    };
  }, [map, geoJsonData, townshipGeoJSON, onEachFeature, onEachTownshipFeature]);

  

  const resetZoom = () => {
    map.fitBounds(initialBounds);
    setHighlightedState(null);
    setSelectState(null);
    setShowTownships(false);
  };

  return (
    <div>
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
      {showTownships && (
        <GeoJSON
          data={townshipGeoJSON}
          onEachFeature={onEachTownshipFeature}
          style={{
            fillColor: "#83b4d4",
            fillOpacity: "0.5",
            color: "#3551a4",
            weight: "1",
          }}
        />
      )}
      <button
        className="reset-zoom-button"
        onClick={resetZoom}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1000,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Reset Zoom
      </button>
    </div>
  );
};

const DataMap = () => {
  const [selectState, setSelectState] = useState(null);

  const zoomProperties = {
    doubleClickZoom: true,
    closePopupOnClick: true,
    dragging: true,
    zoomSnap: true,
    zoomDelta: true,
    trackResize: false,
    touchZoom: false,
    scrollWheelZoom: false,
  };

  return (
    <div>
      <MapContainer
        id="leaflet-container"
        zoom={10}
        {...zoomProperties}
        className="border-2 rounded-[8px] w-[1000px] h-[480px] flex justify-center items-center"
      >
        <SetBounds
          geoJsonData={myanmarGeoJSON}
          selectState={selectState}
          setSelectState={setSelectState}
        />
        {markerData.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={marker.icon}>
            <Popup>{marker.popupText}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DataMap;