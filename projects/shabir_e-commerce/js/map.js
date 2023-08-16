// navigator.geolocation.getCurrentPosition(function(position) {
//   var lat = position.coords.latitude;
//   var lng = position.coords.longitude;

//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: lat, lng: lng},
//     zoom: 16
//   });

//   var marker = new google.maps.Marker({
//     position: {lat: lat, lng: lng},
//     map: map
//   });
// });


  // Initialize the map
    var map = L.map('map').setView([0, 0], 13);

    // Add the OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var latLng = new L.LatLng(lat, lng);
        map.setView(latLng, 13);

        // Add a marker to the user's current location
        var marker = L.marker(latLng).addTo(map);

        // Track the user's movement on the map
        navigator.geolocation.watchPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var latLng = new L.LatLng(lat, lng);
            marker.setLatLng(latLng);
            map.setView(latLng, 13);
        });
    });