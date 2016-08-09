var startDate = new Date();
startDate.setUTCHours(0, 0, 0, 0);

var map = L.map('map', {
    zoom: 12,
    fullscreenControl: true,
    center: [39.3, 4]
});

// start of TimeDimension manual instantiation
var timeDimension = new L.TimeDimension({
        period: "PT12H",
    });
// helper to share the timeDimension object between all layers
map.timeDimension = timeDimension; 
// otherwise you have to set the 'timeDimension' option on all layers.

var player        = new L.TimeDimension.Player({
    transitionTime: 25, 
    loop: false,
    startOver:true
}, timeDimension);

var timeDimensionControlOptions = {
    player:        player,
	displayDate: false,
	loopButton: true,
    timeDimension: timeDimension,
    position:      'bottomleft',
    autoPlay:      true,
    minSpeed:      1,
    speedStep:     1,
    maxSpeed:      60,
    timeSliderDragUpdate: true
};

var timeDimensionControl = new L.Control.TimeDimension(timeDimensionControlOptions);
map.addControl(timeDimensionControl);

var icon = L.icon({
    iconUrl: 'img/dot.png',
    iconSize: [49, 66],
    iconAnchor: [5, 25]
});

var customLayer = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng);
        }
        return L.circleMarker(latLng);
    }
});

var gpxLayer = omnivore.gpx('data/annabelle.gpx', null, customLayer).on('ready', function() {
    map.fitBounds(gpxLayer.getBounds(), {
        paddingBottomRight: [40, 40]
    });
});

var gpxTimeLayer = L.timeDimension.layer.geoJson(gpxLayer, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

console.log(map);


var overlayMaps = {
    "Migration 1": gpxTimeLayer
   
};
var baseLayers = getCommonBaseLayers(map); // see baselayers.js
L.control.layers(baseLayers, overlayMaps).addTo(map);
gpxTimeLayer.addTo(map);