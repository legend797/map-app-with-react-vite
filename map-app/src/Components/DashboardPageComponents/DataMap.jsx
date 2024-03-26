

// -----------------{No highlighted State}---------------------------------------------------------------

// import "../DashboardPageComponents/DataMap.css";
// import React, { useState, useEffect } from "react";
// import L from "leaflet";
// import { GeoJSON, MapContainer, useMap, Marker, Popup } from "react-leaflet";
// import myanmarGeoJSON from "./../../assets/state_region.json";
// import townshipGeoJSON from "./../../assets/township2.json";
// import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
// import markerData from "./../../assets/markerData";

// const SetBounds = ({ geoJsonData }) => {
// 	const [initialBounds, setInitialBounds] = useState(null);

// 	const map = useMap();

// 	const defaultStyle = {
// 		fillColor: "#3551a4",
// 		fillOpacity: "1",
// 		color: "#83b4d4",
// 		weight: "1",
// 	};

// 	const highlightedStyle = {
// 		color: "#ff0000",
// 		weight: "3",
// 	};

// 	const onEachFeature = (feature, layer) => {
// 		if (feature.properties && feature.properties.ST) {
// 			layer.on({
// 				mouseover: () => {
// 					layer.setStyle({
// 						color: "#ff0000",
// 						weight: "3",
// 					});
// 				},
// 				mouseout: () => {
// 					layer.setStyle({
// 						// fillColor: "#3551a4",
// 						// fillOpacity: "1",
// 						color: "#83b4d4",
// 						weight: "1",
// 					});
// 				},
// 				click: () => {
// 					// Highlight the selected state and zoom state
// 					layer.setStyle(highlightedStyle);

// 					map.fitBounds(layer.getBounds(), { maxZoom: 12 });
// 				},
// 			});

// 			// Add tooltips for specific states
// 			if (feature.properties.ST === "Tanintharyi") {
// 				L.tooltip({
// 					permanent: true,
// 					direction: "center",
// 					className: "map-label",
// 				})
// 					.setLatLng([12.0825, 98.6586])
// 					.setContent("Tanintharyi")
// 					.addTo(map);
// 			} else if (feature.properties.ST === "Yangon") {
// 				L.tooltip({
// 					permanent: true,
// 					direction: "center",
// 					className: "map-label",
// 				})
// 					.setLatLng([16.8661, 96.1951])
// 					.setContent("Yangon")
// 					.addTo(map);
// 			} else {
// 				layer
// 					.bindTooltip(feature.properties.ST, {
// 						permanent: true,
// 						direction: "center",
// 						className: "map-label",
// 					})
// 					.openTooltip();
// 			}
// 		}
// 	};

// 	useEffect(() => {
// 		const layer = new L.GeoJSON(geoJsonData, { onEachFeature });
// 		const bounds = layer.getBounds();
// 		map.fitBounds(bounds);
// 		setInitialBounds(bounds);
// 		map.setMaxZoom(16);
// 		map.setMinZoom(4);
// 	}, [map, geoJsonData]);

// 	const resetZoom = () => {
// 		map.fitBounds(initialBounds);
// 	};

// 	return (
// 		<div>
// 			<GeoJSON
// 				data={geoJsonData}
// 				onEachFeature={onEachFeature}
// 				style={defaultStyle}
// 			/>
// 			<button
// 				className="reset-zoom-button"
// 				onClick={resetZoom}
// 				style={{
// 					position: "absolute",
// 					top: "10px",
// 					right: "10px",
// 					zIndex: 1000,
// 					backgroundColor: "#fff",
// 					border: "1px solid #ccc",
// 					padding: "5px 10px",
// 					cursor: "pointer",
// 				}}
// 			>
// 				Reset Zoom
// 			</button>
// 		</div>
// 	);
// };

// const DataMap = () => {
// 	const zoomPropperties = {
// 		doubleClickZoom: true,
// 		closePopupOnClick: true,
// 		dragging: true,
// 		zoomSnap: true,
// 		zoomDelta: true,
// 		trackResize: false,
// 		touchZoom: false,
// 		scrollWheelZoom: false,
// 	};

// 	return (
// 		<div className="">
// 			<MapContainer
// 				id="leaflet-container"
// 				zoom={10}
// 				{...zoomPropperties}
// 				className="border-2 rounded-[8px] w-[1000px] h-[480px] flex justify-center items-center"
// 			>
// 				<SetBounds geoJsonData={myanmarGeoJSON} />
// 				{markerData.map((marker, index) => (
// 					<Marker key={index} position={marker.position} icon={marker.icon}>
// 						<Popup>{marker.popupText}</Popup>
// 					</Marker>
// 				))}
// 			</MapContainer>
// 		</div>
// 	);
// };

// export default DataMap;

// -----------------{No highlighted State 2}---------------------------------------------------------------


import "../DashboardPageComponents/DataMap.css";
import React, { useState, useEffect } from "react";
import L from "leaflet";
import { GeoJSON, MapContainer, useMap, Marker, Popup } from "react-leaflet";
import myanmarGeoJSON from "./../../assets/state_region.json";
import townshipGeoJSON from "./../../assets/township2.json";
import "leaflet/dist/leaflet.css";
import markerData from "./../../assets/markerData";

const SetBounds = ({ geoJsonData }) => {
  const [initialBounds, setInitialBounds] = useState(null);
  const map = useMap();
  const defaultStyle = {
    fillColor: "#3551a4",
    fillOpacity: "1",
    color: "#83b4d4",
    weight: "1",
  };
  const highlightedStyle = {
    color: "#ff0000",
    weight: "3",
  };

  const [showStateLayer, setShowStateLayer] = useState(true);
  const [showTownshipLayer, setShowTownshipLayer] = useState(false);

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.ST) {
      layer.on({
        mouseover: () => {
          layer.setStyle({ color: "#ff0000", weight: "3" });
        },
        mouseout: () => {
          layer.setStyle({
            fillColor: "#3551a4",
            fillOpacity: "1",
            color: "#83b4d4",
            weight: "1",
          });
        },
        click: () => {
          layer.setStyle(highlightedStyle);
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
    const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
    const townshipLayer = new L.GeoJSON(townshipGeoJSON, { onEachFeature });

    const bounds = stateLayer.getBounds();
    map.fitBounds(bounds);
    setInitialBounds(bounds);
    map.setMaxZoom(16);
    map.setMinZoom(4);

    stateLayer.addTo(map);

    map.on("zoomend", () => {
      const currentZoom = map.getZoom();
      if (currentZoom < 6) {
        setShowStateLayer(true);
        setShowTownshipLayer(false);
        stateLayer.addTo(map);
        townshipLayer.removeFrom(map);
      } else {
        setShowStateLayer(false);
        setShowTownshipLayer(true);
        stateLayer.removeFrom(map);
        townshipLayer.addTo(map);
      }
    });

    return () => {
      map.off("zoomend");
    };
  }, [map]);

  const resetZoom = () => {
    map.fitBounds(initialBounds);
  };

  return (
    <div>
      {showStateLayer && (
        <GeoJSON data={myanmarGeoJSON} onEachFeature={onEachFeature} style={defaultStyle} />
      )}
      {showTownshipLayer && (
        <GeoJSON data={townshipGeoJSON} onEachFeature={onEachFeature} style={defaultStyle} />
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
  const zoomPropperties = {
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
    <div className="">
      <MapContainer
        id="leaflet-container"
        zoom={10}
        {...zoomPropperties}
        className="border-2 rounded-[8px] w-[1000px] h-[480px] flex justify-center items-center"
      >
        <SetBounds geoJsonData={myanmarGeoJSON} />
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