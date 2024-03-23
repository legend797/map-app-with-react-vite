import "../DashboardPageComponents/DataMap.css";

import React, { useState, useEffect, useRef } from "react";
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
	// const [highlightedState, setHighlightedState] = useState(null);
	const [initialBounds, setInitialBounds] = useState(null);
  
	const map = useMap();
  
	const onEachFeature = (feature, layer) => {
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
			
			  layer.setStyle({
				fillColor: "#3551a4",
				fillOpacity: "1",
			  });
			 
			
			
		  },
		  click: () => {
			
  
			  // Highlight the newly clicked state
			  layer.setStyle({
				fillColor: "#ff0000",
				fillOpacity: "0.5",
			  });
			  
			  setSelectState(feature.properties.ST);
			  map.fitBounds(layer.getBounds(), { maxZoom: 10 });
			
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
  
	useEffect(() => {
	  const layer = new L.GeoJSON(geoJsonData, {
		onEachFeature,
	  });
  
	  const bounds = layer.getBounds();
	  map.fitBounds(bounds);
	  setInitialBounds(bounds);
	  map.setMaxZoom(16);
	  map.setMinZoom(4);
	}, [map, geoJsonData]);
  
	const resetZoom = () => {
	  map.fitBounds(initialBounds);
	  
	  setSelectState(null);
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
		<div className=" ">
			<MapContainer
				id="leaflet-container"
				zoom={10}
				{...zoomPropperties}
				className="border-2 rounded-[8px] w-[1000px] h-[480px]  flex justify-center items-center"
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
