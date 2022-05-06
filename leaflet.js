let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);
let viniCucinaBlasi;
viniCucinaBlasi = L.marker([41.896783, 12.476332]);
viniCucinaBlasi.addTo(firstMap);
viniCucinaBlasi.bindPopup("This is Vini & Cucina Blasi!");
let ilGiordinaAlFori;
ilGiordinaAlFori = L.marker([41.893233, 12.488525)];
ilGiordinaAlFori.addTo(firstMap);
ilGiordinaAlFori.bindPopup("This is il Giordina al Fori!");
let baccanale;
baccanale = L.marker([41.895996, 12.472184)];
baccanale.addTo(firstMap);
baccanale.bindPopup("This is Baccanale!");

let viniCucinaBlasi, viniCucinaBlasiMarker, ilGiordinaAlFori, ilGiordinaAlForiMarker, baccanale, baccanaleMarker;
viniCucinaBlasi = L.latLng(41.896783, 12.476332);
viniCucinaBlasiMarker = L.marker(viniCusinaBlasi).bindPopup("This is Vini & Cucina Blasi").addTo(firstMap);
ilGiordinaAlFori = L.latLng(41.893233, 12.488525);
ilGiordinaAlFori = L.marker(ilGiordinaAlFori).bindPopup("This is il Giordana al Fori").addTo(firstMap);
baccanale = L.latLng(41.895996, 12.472184);
baccanaleMarker = L.marker(baccanale).bindPopup("This is Baccanale").addTo(firstMap);
let circle;
circle = L.circle(viniCucinaBlasi,       {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap)
circle = L.circle(ilGiordinaAlFori),     {radius: 50,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap)
circle = L.circle(baccanale,             {radius: 50,
                                          color: "#859900",
                                          fillColor: "#cb4b16",
                                          opacity: 0.9,
                                          fillOpacity: 0.25}
          ).addTo(firstMap);
/*
let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);
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


let washingtonSquarePark, washingtonSquareParkMarker, bobstLibrary, bobstLibraryMarker, waverlyPlace, waverlyPlaceMarker;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).bindPopup("This is Washington Square Park.").addTo(firstMap);
bobstLibrary = L.latLng(40.729444, -73.997222);
bobstLibraryMarker = L.marker(bobstLibrary).bindPopup("This is Bobst Library.").addTo(firstMap);
waverlyPlace = L.latLng(40.73449, -74.00358);
waverlyPlaceMarker = L.marker(waverlyPlace).bindPopup("I added another point, fools.").addTo(firstMap);
let circle;
circle = L.circle(washingtonSquarePark, {radius: 100,
                                         color: "#ffccff",
                                         fillColor: "#ffccff",
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(bobstLibrary,          {radius: 100,
                                          color: "#ffccff",
                                          fillColor: "#ffccff",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(waverlyPlace,          {radius: 100,
                                          color: "#d33682",
                                          fillColor: "#d33682",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap); */
