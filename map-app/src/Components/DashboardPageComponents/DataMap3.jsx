import "../DashboardPageComponents/DataMap.css";
import React, { useState, useEffect } from "react";
import L, { tooltip } from "leaflet";
import { GeoJSON, MapContainer, useMap, Marker, Popup } from "react-leaflet";
import myanmarGeoJSON from "./../../assets/state_region.json";
import townshipGeoJSON from "./../../assets/township2.json";
import "leaflet/dist/leaflet.css";
import markerData from "./../../assets/markerData";

const SetBounds = () => {
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
	const [townshipTooltips, setTownshipTooltips] = useState([]);
	const [tooltipLayers, setTooltipLayers] = useState([]);
	const [add, setAdd] = useState(1);
	const [geo, setGeo] = useState(myanmarGeoJSON)

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

	const onEachFeatureTownship = (feature, layer) => {
		if (feature.properties && feature.properties.ts_eng) {
			const townshipName = feature.properties.ts_eng;
			const centroid = layer.getBounds().getCenter();
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
					map.fitBounds(layer.getBounds(), { maxZoom: 8 });
				},
			});

			const tooltip = L.tooltip({
				permanent: true,
				direction: "center",
				className: "map-label",
			})
				.setLatLng(centroid)
				.setContent(townshipName)
				.addTo(map);

			setTownshipTooltips((prevTownshipTooltips) => {
				const i = [...prevTownshipTooltips, tooltip]
				console.log("tooltip", tooltip, "updated array", i)
				return i
			});
		} else {
			layer
				.bindTooltip("Township Name Not Available", {
					permanent: true,
					direction: "center",
					className: "map-label",
				})
				.openTooltip();
		}
	};

	const resetZoom = () => {
		map.fitBounds(initialBounds);
		// Remove all state tooltips
		tooltipLayers.forEach((tooltip) => tooltip.remove());
		setTooltipLayers([]);
		// Remove all township tooltips
		townshipTooltips.forEach((tooltip) => tooltip.remove());
		setTownshipTooltips([]);
	};
	// useEffect(() => {
	// 	const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
	// 	const townshipLayer = new L.GeoJSON(townshipGeoJSON, {
	// 		onEachFeatureTownship,
	// 	});
	// 	const bounds = stateLayer.getBounds();
	// 	map.fitBounds(bounds);
	// 	setInitialBounds(bounds);
	// 	map.setMaxZoom(16);
	// 	map.setMinZoom(4);
	// 	stateLayer.addTo(map);

	// 	const handleZoomStart = () => {
	// 		const currentZoom = map.getZoom();

	// 		// Remove all t	ownship tooltips before zooming
	// 		// tooltipLayers.forEach((tooltip) => tooltip.remove());
	// 		// setTooltipLayers([]);
	// 		// const currentZoom = map.getZoom();
			
	// 		// if (currentZoom < 7) {
				
	// 		// 	setShowStateLayer(true);
	// 		// 	setShowTownshipLayer(false);
	// 		// 	townshipLayer.removeFrom(map);
	// 		// 	stateLayer.addTo(map);
	// 		// 	// Remove all township tooltips
	// 		// 	townshipTooltips.forEach((tooltip) => tooltip.remove());
	// 		// 	console.log('townships name',tooltipTooltips)
	// 		// 	setTownshipTooltips([]);
	// 		// 	// Remove all state tooltips
	// 		// 	tooltipLayers.forEach((tooltip) => tooltip.remove());
	// 		// 	setTooltipLayers([]);
	// 		// } else {
	// 		// 	setShowStateLayer(false);
	// 		// 	setShowTownshipLayer(true);
	// 		// 	stateLayer.removeFrom(map);
	// 		// 	townshipLayer.addTo(map);
				
	// 		// }
	// 	};

	// 	const handleZoomEnd = () => {
	// 		console.log('zoom end')
	// 		const currentZoom = map.getZoom();
	// 			console.log("townshipLayer", townshipLayer._mapToAdd)
	// 			console.log("current zoom", currentZoom)

	// 		if (currentZoom < 7 && townshipLayer._mapToAdd) {
	// 			// console.log("here")
	// 			// setShowStateLayer(true);
	// 			console.log("here")
	// 			// townshipLayer.removeFrom(map);
    // // Explicitly remove each township tooltip
	// console.log("townshipTooltips", townshipTooltips)
    // 		townshipTooltips.forEach((tooltip) => {
	// 			console.log(tooltip)

    //   				console.log('Removing tooltip:', tooltip); // Debug log
    //   				tooltip.remove();
    // 			});
    // // setTownshipTooltips([]);
	// 			// // Remove all township tooltips
	// 			// townshipTooltips.forEach((tooltip) => tooltip.remove());
	// 			// console.log('townships name',townshipTooltips)
	// 			// // setTownshipTooltips([]);
	// 			// stateLayer.addTo(map);
	// 			map.removeLayer(townshipLayer)
				
	// 			// console.log("TownshipTooltips", townshipTooltips)
	// 			// // Remove all state tooltips
	// 			// tooltipLayers.forEach((tooltip) => tooltip.remove());

				
	// 		// 	setTooltipLayers([]);
	// 		} else if(currentZoom >7) {
	// 			console.log("greater than 7")
	// 			// setShowStateLayer(false)	;
	// 			setShowTownshipLayer(true);
	// 			// stateLayer.removeFrom(map);
	// 			townshipLayer.addTo(map);

				
	// 			// setGeo(townshipGeoJSON)

				
	// 		}
	// 	};

	// 	map.on("zoomend", handleZoomEnd);
	// 	map.on("zoomstart", handleZoomStart);
		

	// 	return () => {
	// 		map.off("zoomstart", handleZoomStart);
	// 		map.off("zoomend", handleZoomEnd);
	// 	};
	// }, [map]);
	
	useEffect(() => {
		// Create layer groups for states and townships
		const stateLayerGroup = L.layerGroup().addTo(map); // Initially added to map
		const townshipLayerGroup = L.layerGroup(); // Not added to map initially
	
		// Define state layer with onEachFeature logic
		const stateLayer = new L.GeoJSON(myanmarGeoJSON, { 
			onEachFeature: (feature, layer) => {
				// Attach tooltips or any interactions here
				layer.bindTooltip(feature.properties.name, {permanent: true, className: "my-custom-tooltip"});
				layer.addTo(stateLayerGroup); // Add each layer to the state layer group
			}
		});
	
		// Define township layer with onEachFeatureTownship logic
		const townshipLayer = new L.GeoJSON(townshipGeoJSON, {
			onEachFeature: (feature, layer) => {
				// Attach tooltips or any interactions here
				layer.bindTooltip(feature.properties.ts_eng, {permanent: true, className: "my-custom-tooltip"});
				layer.addTo(townshipLayerGroup); // Add each layer to the township layer group
			}
		});
	
		// Fit map bounds to state layer initially
		const bounds = stateLayer.getBounds();
		map.fitBounds(bounds);
		setInitialBounds(bounds);
		map.setMaxZoom(16);
		map.setMinZoom(4);
	
		// Zoom event handling
		const handleZoomEnd = () => {
			const currentZoom = map.getZoom();
			console.log("Current Zoom:", currentZoom);
	
			if (currentZoom < 7) {
				if (!map.hasLayer(stateLayerGroup)) {
					map.addLayer(stateLayerGroup);
				}
				map.removeLayer(townshipLayerGroup);
			} else {
				if (!map.hasLayer(townshipLayerGroup)) {
					map.addLayer(townshipLayerGroup);
				}
				map.removeLayer(stateLayerGroup);
			}
		};
	
		map.on("zoomend", handleZoomEnd);
	
		// Clean up on component unmount
		return () => {
			map.off("zoomend", handleZoomEnd);
			map.removeLayer(stateLayerGroup);
			map.removeLayer(townshipLayerGroup);
		};
	}, [map]);
	
	const zoomPropperties = {
		doubleClickZoom: true,
		closePopupOnClick: true,
		dragging: true,
		zoomSnap: true,
		zoomDelta: true,
		trackResize: false,
		touchZoom: false,
		// zoomControl:false,
		scrollWheelZoom: false,
	};
	return (
		<div>
			{console.log("showStateLayer", showStateLayer)}
			{showStateLayer && (
				<GeoJSON
					data={myanmarGeoJSON}
					onEachFeature={onEachFeature}
					style={defaultStyle}
				/>
			)} 
			{console.log("showTownshipLayer", showTownshipLayer)}
			{showTownshipLayer && (
				<GeoJSON
					data={townshipGeoJSON}
					onEachFeature={onEachFeatureTownship}
					style={defaultStyle}
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

const DataMap3 = () => {
	const zoomPropperties = {
		doubleClickZoom: true,
		closePopupOnClick: true,
		dragging: true,
		zoomSnap: true,
		zoomDelta: true,
		trackResize: false,
		touchZoom: false,
		// zoomControl:false,
		scrollWheelZoom: false,
	};

	return (
		<div className="">
			<MapContainer
				id="leaflet-container"
				{...zoomPropperties}
				className="border-2 rounded-[8px] w-[1000px] h-[480px] flex justify-center items-center"
			>
				<SetBounds />
				{markerData.map((marker, index) => (
					<Marker key={index} position={marker.position} icon={marker.icon}>
						<Popup>{marker.popupText}</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default DataMap3;
