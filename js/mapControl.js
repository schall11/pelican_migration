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

var icon = L.ExtraMarkers.icon({
    icon: 'ion-location',
    markerColor: 'red',
    shape: 'circle'

  });

var customLayer = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            switch(feature.properties.name) {
            case "Annabelle":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'A',
                    markerColor: 'yellow',
                    shape: 'circle'

                  })
            });
            case "Barnabus":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'B',
                    markerColor: 'green-light',
                    shape: 'circle'

                  })
            });
            case "Chester":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'C',
                    markerColor: 'red',
                    shape: 'circle'

                  })
            });
            case "Daphne":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'D',
                    markerColor: 'orange',
                    shape: 'circle'

                  })
            });
            case "Eleanor":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'E',
                    markerColor: 'cyan',
                    shape: 'circle'

                  })
            });
        }
        }

    },
    style: function (feature) {
        switch(feature.properties.name) {
            case "Annabelle":
                return {color: '#F4B323', weight: 2, opacity: 1};
            case "Barnabus":
                return {color: '#68AC3A', weight: 2, opacity: 1};
            case "Chester":
                return {color: '#831F21', weight: 2, opacity: 1};
            case "Daphne":
                return {color: '#EE8818', weight: 2, opacity: 1};
            case "Eleanor":
                return {color: '#27A5DB', weight: 2, opacity: 1};
        }
    }
});
var customLayer2 = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            switch(feature.properties.name) {
            case "Annabelle":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'A',
                    markerColor: 'yellow',
                    shape: 'circle'

                  })
            });
            case "Barnabus":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'B',
                    markerColor: 'green-light',
                    shape: 'circle'

                  })
            });
            case "Chester":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'C',
                    markerColor: 'red',
                    shape: 'circle'

                  })
            });
            case "Daphne":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'D',
                    markerColor: 'orange',
                    shape: 'circle'

                  })
            });
            case "Eleanor":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'E',
                    markerColor: 'cyan',
                    shape: 'circle'

                  })
            });
        }
        }

    },
    style: function (feature) {
        switch(feature.properties.name) {
            case "Annabelle":
                return {color: '#F4B323', weight: 2, opacity: 1};
            case "Barnabus":
                return {color: '#68AC3A', weight: 2, opacity: 1};
            case "Chester":
                return {color: '#831F21', weight: 2, opacity: 1};
            case "Daphne":
                return {color: '#EE8818', weight: 2, opacity: 1};
            case "Eleanor":
                return {color: '#27A5DB', weight: 2, opacity: 1};
        }
    }
});
var customLayer3 = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            switch(feature.properties.name) {
            case "Annabelle":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'A',
                    markerColor: 'yellow',
                    shape: 'circle'

                  })
            });
            case "Barnabus":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'B',
                    markerColor: 'green-light',
                    shape: 'circle'

                  })
            });
            case "Chester":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'C',
                    markerColor: 'red',
                    shape: 'circle'

                  })
            });
            case "Daphne":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'D',
                    markerColor: 'orange',
                    shape: 'circle'

                  })
            });
            case "Eleanor":
                return new L.Marker(latLng, {
                icon: L.ExtraMarkers.icon({
                    icon: 'fa-number',
                    number: 'E',
                    markerColor: 'cyan',
                    shape: 'circle'

                  })
            });
        }
        }

    },
    style: function (feature) {
        switch(feature.properties.name) {
            case "Annabelle":
                return {color: '#F4B323', weight: 2, opacity: 1};
            case "Barnabus":
                return {color: '#68AC3A', weight: 2, opacity: 1};
            case "Chester":
                return {color: '#831F21', weight: 2, opacity: 1};
            case "Daphne":
                return {color: '#EE8818', weight: 2, opacity: 1};
            case "Eleanor":
                return {color: '#27A5DB', weight: 2, opacity: 1};
        }
    }
});
var gpxLayer = omnivore.gpx('data/full_mig.gpx', null, customLayer).on('ready', function() {
    map.fitBounds(gpxLayer.getBounds(), {
        paddingBottomRight: [40, 40]
    });
});

var gpxAll = L.timeDimension.layer.geoJson(gpxLayer, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer2 = omnivore.gpx('data/southern_mig.gpx', null, customLayer2).on('ready', function() {
    map.fitBounds(gpxLayer2.getBounds(), {
        paddingBottomRight: [40, 40]
    });
});

var gpxNorthern= L.timeDimension.layer.geoJson(gpxLayer2, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer3 = omnivore.gpx('data/northern_mig.gpx', null, customLayer3).on('ready', function() {
    map.fitBounds(gpxLayer3.getBounds(), {
        paddingBottomRight: [40, 40]
    });
});

var gpxSouthern = L.timeDimension.layer.geoJson(gpxLayer3, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

console.log(map);


var overlayMaps = {
    "Southern Migration": gpxSouthern,
    "Northern Migration": gpxNorthern,
    "Full Year Migration": gpxAll
};
var baseLayers = getCommonBaseLayers(map); // see baselayers.js
L.control.layers(baseLayers, overlayMaps).addTo(map);
gpxAll.addTo(map);
