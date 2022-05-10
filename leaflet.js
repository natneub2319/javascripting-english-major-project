let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([41.8719, 12.5674], 16);
//the following code places a marker on the map
/*let bobstLibrary;
bobstLibrary = L.marker([40.729444, -73.997222]);
bobstLibrary.addTo(firstMap);
bobstLibrary.bindPopup("This is Bobst Library.");
*/
/*let bobstCoords;
bobstCoords = L.latLng(40.729444, -73.997222);
firstMap.panTo(bobstCoords);
//This is an example of the pan to method
let eiffelTower;
eiffelTower = L.latLng(48.858222, 2.2945);
firstMap.panTo(eiffelTower);
*/
//This is an example of a polyline / polygon shape
/*let washingtonSquarePark, washingtonSquareParkMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).addTo(firstMap);
tenThousandth = [[40.7307, -73.9976], [40.7307, -73.9974],
                 [40.7309, -73.9974], [40.7309, -73.9976]];
tenThousandthPolygon = L.polygon(tenThousandth, {
                                  color: "#268bd2",
                                  fillColor: "#fdf6e3"
                                }
                        ).addTo(firstMap);
thousandth = [[washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng + 0.001],
              [washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng + 0.001]];
thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
                      ).addTo(firstMap);
*/

let buddyRoma, buddyRomaMarker, pastaVino, pastaVinoMarker, baGhetto, baGhettoMarker, giordinaFori, giordinaForiMarker;
buddyRoma = L.latLng(41.8966557, 12.4745354);
buddyRomaMarker = L.marker(buddyRoma).bindPopup("This is Buddy Roma, a vegan/vegetarian restaurant.").addTo(firstMap);
pastaVino = L.latLng(41.8946863, 12.4766886);
pastaVinoMarker = L.marker(pastaVino).bindPopup("This is Pasta e Vino, the cacio e pepe was very yummy!").addTo(firstMap);
baGhetto = L.latLng(41.8931237, 12.488252);
baGhettoMarker = L.marker(baGhetto).bindPopup("This is Ba'Ghetto Milky, a kosher italian restaurant!").addTo(firstMap);
giordinaFori = L.latlng(41.8931237, 12.4750259);
giordinaForiMarker = L.marker(giordinaFori).bindPopup("This is il Giordina al Fori. We looked up the translation and we found it is 'the garden of holes XD").addTo(firstMap);
let circle;
circle = L.circle(buddyRoma,            {radius: 100,
                                         color: "#ffccff",
                                         fillColor: "#ffccff",
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(pastaVino,             {radius: 100,
                                          color: "#ffccff",
                                          fillColor: "#ffccff",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(baGhetto,              {radius: 100,
                                          color: "#d33682",
                                          fillColor: "#d33682",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(giordinaFori,          {radius: 100,
                                          color: "#d33682",
                                          fillColor: "#d33682",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstmap);
