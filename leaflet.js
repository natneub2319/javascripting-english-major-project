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
          ).addTo(firstMap);
circle = L.circle(ilGiordinaAlFori),     {radius: 50,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);
