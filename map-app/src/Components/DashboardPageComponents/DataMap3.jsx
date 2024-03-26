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
// 						fillColor: "#3551a4",
// 						fillOpacity: "1",
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

// const DataMap3 = () => {
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

// export default DataMap3;

// ----------------{Different Zooms different GeoJSON Datas only onEachFeature}----------------------

// import "../DashboardPageComponents/DataMap.css";
// import React, { useState, useEffect } from "react";
// import L from "leaflet";
// import { GeoJSON, MapContainer, useMap, Marker, Popup } from "react-leaflet";
// import myanmarGeoJSON from "./../../assets/state_region.json";
// import townshipGeoJSON from "./../../assets/township2.json";
// import "leaflet/dist/leaflet.css";
// import markerData from "./../../assets/markerData";

// const SetBounds = ({ myanmarGeoJSON }) => {
//     const [initialBounds, setInitialBounds] = useState(null);
//     const map = useMap();
//     const defaultStyle = {
//       fillColor: "#3551a4",
//       fillOpacity: "1",
//       color: "#83b4d4",
//       weight: "1",
//     };
//     const highlightedStyle = {
//       color: "#ff0000",
//       weight: "3",
//     };

//     const [showStateLayer, setShowStateLayer] = useState(true);
//     const [showTownshipLayer, setShowTownshipLayer] = useState(false);

//     const onEachFeature = (feature, layer) => {
//       if (feature.properties && feature.properties.ST) {
//         layer.on({
//           mouseover: () => {
//             layer.setStyle({ color: "#ff0000", weight: "3" });
//           },
//           mouseout: () => {
//             layer.setStyle({
//               fillColor: "#3551a4",
//               fillOpacity: "1",
//               color: "#83b4d4",
//               weight: "1",
//             });
//           },
//           click: () => {
//             layer.setStyle(highlightedStyle);
//             map.fitBounds(layer.getBounds(), { maxZoom: 12 });
//           },
//         });

//         if (feature.properties.ST === "Tanintharyi") {
//           L.tooltip({
//             permanent: true,
//             direction: "center",
//             className: "map-label",
//           })
//             .setLatLng([12.0825, 98.6586])
//             .setContent("Tanintharyi")
//             .addTo(map);
//         } else if (feature.properties.ST === "Yangon") {
//           L.tooltip({
//             permanent: true,
//             direction: "center",
//             className: "map-label",
//           })
//             .setLatLng([16.8661, 96.1951])
//             .setContent("Yangon")
//             .addTo(map);
//         } else {
//           layer
//             .bindTooltip(feature.properties.ST, {
//               permanent: true,
//               direction: "center",
//               className: "map-label",
//             })
//             .openTooltip();
//         }
//       }
//     };

//   //   const onEachFeatureForState = (feature, layer) => {
//   //     if (feature.properties && feature.properties.ST) {
//   //       layer.on({
//   //         mouseover: () => {
//   //           layer.setStyle({ color: "#ff0000", weight: "3" });
//   //         },
//   //         mouseout: () => {
//   //           layer.setStyle({
//   //             fillColor: "#3551a4",
//   //             fillOpacity: "1",
//   //             color: "#83b4d4",
//   //             weight: "1",
//   //           });
//   //         },
//   //         click: () => {
//   //           layer.setStyle(highlightedStyle);
//   //           map.fitBounds(layer.getBounds(), { maxZoom: 12 });
//   //         },
//   //       });

//   //       if (feature.properties.ST === "Tanintharyi") {
//   //         L.tooltip({
//   //           permanent: true,
//   //           direction: "center",
//   //           className: "map-label",
//   //         })
//   //           .setLatLng([12.0825, 98.6586])
//   //           .setContent("Tanintharyi")
//   //           .addTo(map);
//   //       } else if (feature.properties.ST === "Yangon") {
//   //         L.tooltip({
//   //           permanent: true,
//   //           direction: "center",
//   //           className: "map-label",
//   //         })
//   //           .setLatLng([16.8661, 96.1951])
//   //           .setContent("Yangon")
//   //           .addTo(map);
//   //       } else {
//   //         layer
//   //           .bindTooltip(feature.properties.ST, {
//   //             permanent: true,
//   //             direction: "center",
//   //             className: "map-label",
//   //           })
//   //           .openTooltip();
//   //       }
//   //     }
//   //   };
//   //   const onEachFeatureForTownship = (feature, layer) => {
//   //     const map = useMap(); // Assuming you're using Leaflet's useMap hook for Next.js
//   //     if (feature.properties && feature.properties.ts_eng) {
//   //         const townshipName = feature.properties.ts_eng;

//   //         // Calculate the centroid of the polygon
//   //         const centroid = layer.getBounds().getCenter();

//   //         L.tooltip({
//   //             permanent: true,
//   //             direction: "center",
//   //             className: "map-label",
//   //         })
//   //         .setLatLng(centroid)
//   //         .setContent(townshipName)
//   //         .addTo(map);
//   //     } else {
//   //         // If township name is not available, bind tooltip to layer
//   //         layer
//   //             .bindTooltip("Township Name Not Available", {
//   //                 permanent: true,
//   //                 direction: "center",
//   //                 className: "map-label",
//   //             })
//   //             .openTooltip();
//   //     }
//   // };

//     useEffect(() => {
//       const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
//       const townshipLayer = new L.GeoJSON(townshipGeoJSON, { onEachFeature });

//       const bounds = stateLayer.getBounds();
//       map.fitBounds(bounds);
//       setInitialBounds(bounds);
//       map.setMaxZoom(16);
//       map.setMinZoom(4);

//       stateLayer.addTo(map);

//       map.on("zoomend", () => {
//         const currentZoom = map.getZoom();
//         if (currentZoom < 6) {
//           setShowStateLayer(true);
//           setShowTownshipLayer(false);
//           stateLayer.addTo(map);
//           townshipLayer.removeFrom(map);
//         } else {
//           setShowStateLayer(false);
//           setShowTownshipLayer(true);
//           stateLayer.removeFrom(map);
//           townshipLayer.addTo(map);
//         }
//       });

//       return () => {
//         map.off("zoomend");
//       };
//     }, [map]);

//     const resetZoom = () => {
//       map.fitBounds(initialBounds);
//     };

//     return (
//       <div>
//         {showStateLayer && (
//           <GeoJSON data={myanmarGeoJSON} onEachFeature={onEachFeature} style={defaultStyle} />
//         )}
//         {showTownshipLayer && (
//           <GeoJSON data={townshipGeoJSON} onEachFeature={onEachFeature} style={defaultStyle} />
//         )}
//         <button
//           className="reset-zoom-button"
//           onClick={resetZoom}
//           style={{
//             position: "absolute",
//             top: "10px",
//             right: "10px",
//             zIndex: 1000,
//             backgroundColor: "#fff",
//             border: "1px solid #ccc",
//             padding: "5px 10px",
//             cursor: "pointer",
//           }}
//         >
//           Reset Zoom
//         </button>
//       </div>
//     );
//   };

// const DataMap3 = () => {
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
//     <div className="">
//       <MapContainer
//         id="leaflet-container"
//         zoom={10}
//         {...zoomPropperties}
//         className="border-2 rounded-[8px] w-[1000px] h-[480px] flex justify-center items-center"
//       >
//         <SetBounds myanmarGeoJSON={myanmarGeoJSON} />
//         {markerData.map((marker, index) => (
//           <Marker key={index} position={marker.position} icon={marker.icon}>
//             <Popup>{marker.popupText}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DataMap3;

// ----------{onEachFeature and onEachFeatureTownship functioin}

// import "../DashboardPageComponents/DataMap.css";
// import React, { useState, useEffect } from "react";
// import L from "leaflet";
// import { GeoJSON, MapContainer, useMap, Marker, Popup } from "react-leaflet";
// import myanmarGeoJSON from "./../../assets/state_region.json";
// import townshipGeoJSON from "./../../assets/township2.json";
// import "leaflet/dist/leaflet.css";
// import markerData from "./../../assets/markerData";

// const SetBounds = ({ myanmarGeoJSON }) => {
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

// 	const [showStateLayer, setShowStateLayer] = useState(true);
// 	const [showTownshipLayer, setShowTownshipLayer] = useState(false);

// 	const onEachFeature = (feature, layer) => {
// 		if (feature.properties && feature.properties.ST) {
// 			layer.on({
// 				mouseover: () => {
// 					layer.setStyle({ color: "#ff0000", weight: "3" });
// 				},
// 				mouseout: () => {
// 					layer.setStyle({
// 						fillColor: "#3551a4",
// 						fillOpacity: "1",
// 						color: "#83b4d4",
// 						weight: "1",
// 					});
// 				},
// 				click: () => {
// 					layer.setStyle(highlightedStyle);
// 					map.fitBounds(layer.getBounds(), { maxZoom: 12 });
// 				},
// 			});

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

// 	const onEachFeatureTownship = (feature, layer) => {
// 		if (feature.properties && feature.properties.ts_eng) {
// 			const townshipName = feature.properties.ts_eng;

// 			// Calculate the centroid of the polygon
// 			const centroid = layer.getBounds().getCenter();

// 			layer.on({
// 				mouseover: () => {
// 					layer.setStyle({ color: "#ff0000", weight: "3" });
// 				},
// 				mouseout: () => {
// 					layer.setStyle({
// 						fillColor: "#3551a4",
// 						fillOpacity: "1",
// 						color: "#83b4d4",
// 						weight: "1",
// 					});
// 				},
// 				click: () => {
// 					layer.setStyle(highlightedStyle);
// 					map.fitBounds(layer.getBounds(), { maxZoom: 10 });
// 				},
// 			});

// 			L.tooltip({
// 				permanent: true,
// 				direction: "center",
// 				className: "map-label",
// 			})
// 				.setLatLng(centroid)
// 				.setContent(townshipName)
// 				.addTo(map);
// 		} else {
// 			// If township name is not available, bind tooltip to layer
// 			layer
// 				.bindTooltip("Township Name Not Available", {
// 					permanent: true,
// 					direction: "center",
// 					className: "map-label",
// 				})
// 				.openTooltip();
// 		}
// 	};

//   const resetZoom = () => {
//     map.fitBounds(initialBounds);
//     setShowStateLayer(true);
//     setShowTownshipLayer(false);
//     const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
//     const townshipLayer = new L.GeoJSON(townshipGeoJSON, { onEachFeatureTownship });

//     townshipLayer.removeFrom(map);
//     stateLayer.addTo(map);
//   };

// 	useEffect(() => {
// 		const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
// 		const townshipLayer = new L.GeoJSON(townshipGeoJSON, {
// 			onEachFeatureTownship,
// 		});

// 		const bounds = stateLayer.getBounds();
// 		map.fitBounds(bounds);
// 		setInitialBounds(bounds);
// 		map.setMaxZoom(16);
// 		map.setMinZoom(4);

// 		stateLayer.addTo(map);

// 		map.on("zoomend", () => {
// 			const currentZoom = map.getZoom();
// 			if (currentZoom < 6) {
// 				setShowStateLayer(true);
// 				setShowTownshipLayer(false);
// 				townshipLayer.removeFrom(map);
//     stateLayer.addTo(map);
// 			} else {
// 				setShowStateLayer(false);
// 				setShowTownshipLayer(true);
// 				townshipLayer.removeFrom(map);
//     stateLayer.addTo(map);
// 			}
// 		});

// 		return () => {
// 			map.off("zoomend");
// 		};
// 	}, [map]);

// 	return (
// 		<div>
// 			{showStateLayer && (
// 				<GeoJSON
// 					data={myanmarGeoJSON}
// 					onEachFeature={onEachFeature}
// 					style={defaultStyle}
// 				/>
// 			)}
// 			{showTownshipLayer && (
// 				<GeoJSON
// 					data={townshipGeoJSON}
// 					onEachFeature={onEachFeatureTownship}
// 					style={defaultStyle}
// 				/>
// 			)}
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

// const DataMap3 = () => {
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
// 				<SetBounds myanmarGeoJSON={myanmarGeoJSON} />
// 				{markerData.map((marker, index) => (
// 					<Marker key={index} position={marker.position} icon={marker.icon}>
// 						<Popup>{marker.popupText}</Popup>
// 					</Marker>
// 				))}
// 			</MapContainer>
// 		</div>
// 	);
// };

// export default DataMap3;

// -------{Remove Tooltip}

// import "../DashboardPageComponents/DataMap.css";
// import React, { useState, useEffect } from "react";
// import L from "leaflet";
// import { GeoJSON, MapContainer,Marker,Popup, useMap } from "react-leaflet";
// import myanmarGeoJSON from "./../../assets/state_region.json";
// import townshipGeoJSON from "./../../assets/township2.json";
// import "leaflet/dist/leaflet.css";
// import markerData from "./../../assets/markerData";

// const SetBounds = ({ myanmarGeoJSON }) => {
//   const [initialBounds, setInitialBounds] = useState(null);
//   const map = useMap();
//   const defaultStyle = {
//     fillColor: "#3551a4",
//     fillOpacity: "1",
//     color: "#83b4d4",
//     weight: "1",
//   };
//   const highlightedStyle = {
//     color: "#ff0000",
//     weight: "3",
//   };
//   const [showStateLayer, setShowStateLayer] = useState(true);
//   const [showTownshipLayer, setShowTownshipLayer] = useState(false);

//   const onEachFeature = (feature, layer) => {
//     if (feature.properties && feature.properties.ST) {
//       layer.on({
//         mouseover: () => {
//           layer.setStyle({ color: "#ff0000", weight: "3" });
//         },
//         mouseout: () => {
//           layer.setStyle({
//             fillColor: "#3551a4",
//             fillOpacity: "1",
//             color: "#83b4d4",
//             weight: "1",
//           });
//         },
//         click: () => {
//           layer.setStyle(highlightedStyle);
//           map.fitBounds(layer.getBounds(), { maxZoom: 12 });
//         },
//       });

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

//   const tooltipLayers = [];

//   const onEachFeatureTownship = (feature, layer) => {
//     if (feature.properties && feature.properties.ts_eng) {
//       const townshipName = feature.properties.ts_eng;
//       const centroid = layer.getBounds().getCenter();

//       layer.on({
//         mouseover: () => {
//           layer.setStyle({ color: "#ff0000", weight: "3" });
//         },
//         mouseout: () => {
//           layer.setStyle({
//             fillColor: "#3551a4",
//             fillOpacity: "1",
//             color: "#83b4d4",
//             weight: "1",
//           });
//         },
//         click: () => {
//           layer.setStyle(highlightedStyle);
//           map.fitBounds(layer.getBounds(), { maxZoom: 10 });
//         },
//       });

//       const tooltip = L.tooltip({
//         permanent: true,
//         direction: "center",
//         className: "map-label",
//       })
//         .setLatLng(centroid)
//         .setContent(townshipName)
//         .addTo(map);

//       tooltipLayers.push(tooltip);
//     } else {
//       layer
//         .bindTooltip("Township Name Not Available", {
//           permanent: true,
//           direction: "center",
//           className: "map-label",
//         })
//         .openTooltip();
//     }
//   };

//   const resetZoom = () => {
//     map.fitBounds(initialBounds);
//     setShowStateLayer(true);
//     setShowTownshipLayer(false);
//     const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
//     const townshipLayer = new L.GeoJSON(townshipGeoJSON, { onEachFeatureTownship });
//     townshipLayer.removeFrom(map);
//     stateLayer.addTo(map);
//   };

//   useEffect(() => {
//     const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
//     const townshipLayer = new L.GeoJSON(townshipGeoJSON, { onEachFeatureTownship });
//     const bounds = stateLayer.getBounds();
//     map.fitBounds(bounds);
//     setInitialBounds(bounds);
//     map.setMaxZoom(16);
//     map.setMinZoom(4);
//     stateLayer.addTo(map);

//     map.on("zoomend", () => {
//       const currentZoom = map.getZoom();
//       if (currentZoom < 6) {
//         setShowStateLayer(true);
//         setShowTownshipLayer(false);
//         townshipLayer.removeFrom(map);
//         stateLayer.addTo(map);

//         // Remove township tooltip layers
//         tooltipLayers.forEach((tooltip) => tooltip.remove());
//         tooltipLayers.length = 0; // Clear the tooltipLayers array
//       } else {
//         setShowStateLayer(false);
//         setShowTownshipLayer(true);
//         townshipLayer.removeFrom(map);
//         stateLayer.addTo(map);
//       }
//     });

//     return () => {
//       map.off("zoomend");
//     };
//   }, [map]);

//   return (
//     <div>
//       {showStateLayer && (
//         <GeoJSON data={myanmarGeoJSON} onEachFeature={onEachFeature} style={defaultStyle} />
//       )}
//       {showTownshipLayer && (
//         <GeoJSON data={townshipGeoJSON} onEachFeature={onEachFeatureTownship} style={defaultStyle} />
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

// const DataMap3 = () => {
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
//     <div className="">
//       <MapContainer
//         id="leaflet-container"
//         zoom={10}
//         {...zoomPropperties}
//         className="border-2 rounded-[8px] w-[1000px] h-[480px] flex justify-center items-center"
//       >
//         <SetBounds myanmarGeoJSON={myanmarGeoJSON} />
//         {markerData.map((marker, index) => (
//           <Marker key={index} position={marker.position} icon={marker.icon}>
//             <Popup>{marker.popupText}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DataMap3;

// -----------{reset zoom button work version}----------------------

// import "../DashboardPageComponents/DataMap.css";
// import React, { useState, useEffect } from "react";
// import L from "leaflet";
// import { GeoJSON, MapContainer, useMap, Marker, Popup } from "react-leaflet";
// import myanmarGeoJSON from "./../../assets/state_region.json";
// import townshipGeoJSON from "./../../assets/township2.json";
// import "leaflet/dist/leaflet.css";
// import markerData from "./../../assets/markerData";

// const SetBounds = ({ myanmarGeoJSON }) => {
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
// 	const [showStateLayer, setShowStateLayer] = useState(true);
// 	const [showTownshipLayer, setShowTownshipLayer] = useState(false);
// 	const [townshipTooltips, setTownshipTooltips] = useState([]);
// 	const [tooltipLayers, setTooltipLayers] = useState([]);

// 	const onEachFeature = (feature, layer) => {
// 		if (feature.properties && feature.properties.ST) {
// 			layer.on({
// 				mouseover: () => {
// 					layer.setStyle({ color: "#ff0000", weight: "3" });
// 				},
// 				mouseout: () => {
// 					layer.setStyle({
// 						fillColor: "#3551a4",
// 						fillOpacity: "1",
// 						color: "#83b4d4",
// 						weight: "1",
// 					});
// 				},
// 				click: () => {
// 					layer.setStyle(highlightedStyle);
// 					map.fitBounds(layer.getBounds(), { maxZoom: 12 });
// 				},
// 			});

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

// 	const onEachFeatureTownship = (feature, layer) => {
// 		if (feature.properties && feature.properties.ts_eng) {
// 			const townshipName = feature.properties.ts_eng;
// 			const centroid = layer.getBounds().getCenter();
// 			layer.on({
// 				mouseover: () => {
// 					layer.setStyle({ color: "#ff0000", weight: "3" });
// 				},
// 				mouseout: () => {
// 					layer.setStyle({
// 						fillColor: "#3551a4",
// 						fillOpacity: "1",
// 						color: "#83b4d4",
// 						weight: "1",
// 					});
// 				},
// 				click: () => {
// 					layer.setStyle(highlightedStyle);
// 					map.fitBounds(layer.getBounds(), { maxZoom: 8 });
// 				},
// 			});

// 			const tooltip = L.tooltip({
// 				permanent: true,
// 				direction: "center",
// 				className: "map-label",
// 			})
// 				.setLatLng(centroid)
// 				.setContent(townshipName)
// 				.addTo(map);

// 			setTownshipTooltips((prevTownshipTooltips) => [
// 				...prevTownshipTooltips,
// 				tooltip,
// 			]);
// 		} else {
// 			layer
// 				.bindTooltip("Township Name Not Available", {
// 					permanent: true,
// 					direction: "center",
// 					className: "map-label",
// 				})
// 				.openTooltip();
// 		}
// 	};

// 	const resetZoom = () => {
// 		map.fitBounds(initialBounds);
// 		// Remove all state tooltips
// 		tooltipLayers.forEach((tooltip) => tooltip.remove());
// 		setTooltipLayers([]);
// 		// Remove all township tooltips
// 		townshipTooltips.forEach((tooltip) => tooltip.remove());
// 		setTownshipTooltips([]);
// 	};

// 	useEffect(() => {
// 		const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
// 		const townshipLayer = new L.GeoJSON(townshipGeoJSON, {
// 			onEachFeatureTownship,
// 		});
// 		const bounds = stateLayer.getBounds();
// 		map.fitBounds(bounds);
// 		setInitialBounds(bounds);
// 		map.setMaxZoom(16);
// 		map.setMinZoom(4);
// 		stateLayer.addTo(map);

// 		const handleZoomStart = () => {
// 			// Remove all township tooltips before zooming
// 			tooltipLayers.forEach((tooltip) => tooltip.remove());
// 			setTooltipLayers([]);
// 		};

// 		const handleZoomEnd = () => {
// 			const currentZoom = map.getZoom();
// 			if (currentZoom < 7) {
// 				setShowStateLayer(true);
// 				setShowTownshipLayer(false);
// 				townshipLayer.removeFrom(map);
// 				stateLayer.addTo(map);
// 				// Remove all township tooltips
// 				townshipTooltips.forEach((tooltip) => tooltip.remove());
// 				setTownshipTooltips([]);
// 				// Remove all state tooltips
// 				tooltipLayers.forEach((tooltip) => tooltip.remove());
// 				setTooltipLayers([]);
// 			} else {
// 				setShowStateLayer(false);
// 				setShowTownshipLayer(true);
// 				stateLayer.removeFrom(map);
// 				townshipLayer.addTo(map);
// 			}
// 		};

// 		map.on("zoomstart", handleZoomStart);
// 		map.on("zoomend", handleZoomEnd);

// 		return () => {
// 			map.off("zoomstart", handleZoomStart);
// 			map.off("zoomend", handleZoomEnd);
// 		};
// 	}, [map]);

// 	return (
// 		<div>
// 			{showStateLayer && (
// 				<GeoJSON
// 					data={myanmarGeoJSON}
// 					onEachFeature={onEachFeature}
// 					style={defaultStyle}
// 				/>
// 			)}
// 			{showTownshipLayer && (
// 				<GeoJSON
// 					data={townshipGeoJSON}
// 					onEachFeature={onEachFeatureTownship}
// 					style={defaultStyle}
// 				/>
// 			)}
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

// const DataMap3 = () => {
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
// 				{...zoomPropperties}
// 				className="border-2 rounded-[8px] w-[1000px] h-[480px] flex justify-center items-center"
// 			>
// 				<SetBounds myanmarGeoJSON={myanmarGeoJSON} />
// 				{markerData.map((marker, index) => (
// 					<Marker key={index} position={marker.position} icon={marker.icon}>
// 						<Popup>{marker.popupText}</Popup>
// 					</Marker>
// 				))}
// 			</MapContainer>
// 		</div>
// 	);
// };

// export default DataMap3;

// -------{version 2}-------------------------------------------------------------

// import "../DashboardPageComponents/DataMap.css";
// import React, { useState, useEffect } from "react";
// import L from "leaflet";
// import { GeoJSON, MapContainer, Marker, Popup } from "react-leaflet";
// import myanmarGeoJSON from "./../../assets/state_region.json";
// import townshipGeoJSON from "./../../assets/township2.json";
// import "leaflet/dist/leaflet.css";
// import markerData from "./../../assets/markerData";

// const SetBounds = ({ myanmarGeoJSON }) => {

//   const [initialBounds, setInitialBounds] = useState(null);

//   const defaultStyle = {
//     fillColor: "#3551a4",
//     fillOpacity: "1",
//     color: "#83b4d4",
//     weight: "1",
//   };
//   const highlightedStyle = {
//     color: "#ff0000",
//     weight: "3",
//   };
//   const [showStateLayer, setShowStateLayer] = useState(true);
//   const [showTownshipLayer, setShowTownshipLayer] = useState(false);
//   const [tooltipLayers, setTooltipLayers] = useState([]);
//   const map = useMap();
//   const onEachFeature = (feature, layer) => {
//     if (feature.properties && feature.properties.ST) {
//       layer.on({
//         mouseover: () => {
//           layer.setStyle(highlightedStyle);
//         },
//         mouseout: () => {
//           layer.setStyle(defaultStyle);
//         },
//         click: () => {
//           layer.setStyle(highlightedStyle);
//           map.fitBounds(layer.getBounds(), { maxZoom: 12 });
//         },
//       });

//       const tooltip = layer.bindTooltip(feature.properties.ST, {
//         permanent: true,
//         direction: "center",
//         className: "map-label",
//       }).openTooltip();

//       setTooltipLayers(prev => [...prev, tooltip]);
//     }
//   };

//   const onEachFeatureTownship = (feature, layer) => {
//     if (feature.properties && feature.properties.ts_eng) {
//       const townshipName = feature.properties.ts_eng;
//       const centroid = layer.getBounds().getCenter();

//       layer.on({
//         mouseover: () => {
//           layer.setStyle(highlightedStyle);
//         },
//         mouseout: () => {
//           layer.setStyle(defaultStyle);
//         },
//         click: () => {
//           layer.setStyle(highlightedStyle);
//           map.fitBounds(layer.getBounds(), { maxZoom: 10 });
//         },
//       });

//       const tooltip = L.tooltip({
//         permanent: true,
//         direction: "center",
//         className: "map-label",
//       })
//         .setLatLng(centroid)
//         .setContent(townshipName)
//         .addTo(map);

//       setTooltipLayers(prev => [...prev, tooltip]);
//     }
//   };

//   const resetZoom = () => {
//     map.fitBounds(initialBounds);
//     tooltipLayers.forEach(tooltip => {
//       if (tooltip instanceof L.Tooltip) {
//         tooltip.remove();
//       } else {
//         // For bound tooltips, assuming you find a way to directly remove them
//       }
//     });
//     setTooltipLayers([]);
//   };

//   useEffect(() => {
//     const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
//     const townshipLayer = new L.GeoJSON(townshipGeoJSON, { onEachFeatureTownship });
//     const bounds = stateLayer.getBounds();
//     map.fitBounds(bounds);
//     setInitialBounds(bounds);
//     map.setMaxZoom(16);
//     map.setMinZoom(4);
//     stateLayer.addTo(map);

//     const handleZoomStart = () => {
//       tooltipLayers.forEach(tooltip => tooltip.remove());
//       setTooltipLayers([]);
//     };

//     const handleZoomEnd = () => {
//       const currentZoom = map.getZoom();
//       if (currentZoom < 7) {
//         setShowStateLayer(true);
//         setShowTownshipLayer(false);
//         townshipLayer.removeFrom(map);
//         stateLayer.addTo(map);
//       } else {
//         setShowStateLayer(false);
//         setShowTownshipLayer(true);
//         stateLayer.removeFrom(map);
//         townshipLayer.addTo(map);
//       }
//     };

//     map.on("zoomstart", handleZoomStart);
//     map.on("zoomend", handleZoomEnd);

//     return () => {
//       map.off("zoomstart", handleZoomStart);
//       map.off("zoomend", handleZoomEnd);
//     };
//   }, [map]);

//   return (
//     <div>
//       {showStateLayer && (
//         <GeoJSON data={myanmarGeoJSON} onEachFeature={onEachFeature} style={defaultStyle} />
//       )}
//       {showTownshipLayer && (
//         <GeoJSON data={townshipGeoJSON} onEachFeature={onEachFeatureTownship} style={defaultStyle} />
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

// const DataMap3 = () => {
//   const zoomProperties = {
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
//     <div>
//       <MapContainer
//         id="leaflet-container"
//         zoom={10}
//         {...zoomProperties}
//         className="border-2 rounded-[8px] w-[1000px] h-[480px] flex justify-center items-center"
//       >
//         <SetBounds myanmarGeoJSON={myanmarGeoJSON} />
//         {markerData.map((marker, index) => (
//           <Marker key={index} position={marker.position} icon={marker.icon}>
//             <Popup>{marker.popupText}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DataMap3;

// ------{testing version}

import "../DashboardPageComponents/DataMap.css";
import React, { useState, useEffect } from "react";
import L from "leaflet";
import { GeoJSON, MapContainer, useMap, Marker, Popup } from "react-leaflet";
import myanmarGeoJSON from "./../../assets/state_region.json";
import townshipGeoJSON from "./../../assets/township2.json";
import "leaflet/dist/leaflet.css";
import markerData from "./../../assets/markerData";

const SetBounds = ({ myanmarGeoJSON }) => {
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

			setTownshipTooltips((prevTownshipTooltips) => [
				...prevTownshipTooltips,
				tooltip,
			]);
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

	useEffect(() => {
		const stateLayer = new L.GeoJSON(myanmarGeoJSON, { onEachFeature });
		const townshipLayer = new L.GeoJSON(townshipGeoJSON, {
			onEachFeatureTownship,
		});
		const bounds = stateLayer.getBounds();
		map.fitBounds(bounds);
		setInitialBounds(bounds);
		map.setMaxZoom(16);
		map.setMinZoom(4);
		stateLayer.addTo(map);

		const handleZoomStart = () => {
			// Remove all township tooltips before zooming
			tooltipLayers.forEach((tooltip) => tooltip.remove());
			setTooltipLayers([]);
		};

		const handleZoomEnd = () => {
			const currentZoom = map.getZoom();
			
			if (currentZoom < 7) {
				
				setShowStateLayer(true);
				setShowTownshipLayer(false);
				townshipLayer.removeFrom(map);
				stateLayer.addTo(map);
				// Remove all township tooltips
				townshipTooltips.forEach((tooltip) => tooltip.remove());
				setTownshipTooltips([]);
				// Remove all state tooltips
				tooltipLayers.forEach((tooltip) => tooltip.remove());
				setTooltipLayers([]);
			} else {
				setShowStateLayer(false);
				setShowTownshipLayer(true);
				stateLayer.removeFrom(map);
				townshipLayer.addTo(map);
				
			}
		};

		map.on("zoomend", handleZoomEnd);
		map.on("zoomstart", handleZoomStart);
		

		return () => {
			map.off("zoomstart", handleZoomStart);
			map.off("zoomend", handleZoomEnd);
		};
	}, [map]);

	return (
		<div>
			{showStateLayer && (
				<GeoJSON
					data={myanmarGeoJSON}
					onEachFeature={onEachFeature}
					style={defaultStyle}
				/>
			)}
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
				<SetBounds myanmarGeoJSON={myanmarGeoJSON} />
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
