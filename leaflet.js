let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.4, 8.3], 10);
let buddyRoma, buddyRomaMarker, pastaVino, pastaVinoMarker, baGhetto, baGhettoMarker;
buddyRoma = L.latLng(41.8966557, 12.4745354);
buddyRomaMarker = L.marker(buddyRoma).bindPopup("This is Buddy Roma, a vegan/vegetarian restaurant.").addTo(firstMap);
pastaVino = L.latLng(41.8946863, 12.4766886);
pastaVinoMarker = L.marker(pastaVino).bindPopup("This is Pasta e Vino, the cacio e pepe was very yummy!").addTo(firstMap);
baGhetto = L.latLng(41.8931237, 12.488252);
baGhettoMarker = L.marker(baGhetto).bindPopup("This is Ba'Ghetto Milky, a kosher italian restaurant!").addTo(firstMap);
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
