function initMap() {
    const location = {
        'lat': 9.651928378490256,
        'lng': 6.53316948188512, 
    };

    const map = new google.maps.Map(
        document.getElementById("map-box"),
        {
            'zoom': 15,
            'center': location
        }
    );

    //marker
    const marker = new google.maps.Marker(
    {
        'position': location,
        'map': map,
    });
}

