function initialize() {
    var mapOptions = {
        zoom: 1,
        center: new google.maps.LatLng(24.886436490787712, -70.2685546875),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };


    var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

    var worldCoords = [
    new google.maps.LatLng(-85.1054596961173, -180),
    new google.maps.LatLng(85.1054596961173, -180),
    new google.maps.LatLng(85.1054596961173, 180),
    new google.maps.LatLng(-85.1054596961173, 180),
    new google.maps.LatLng(-85.1054596961173, 0)];


    var EuropeCoords = [
    new google.maps.LatLng(29.68224948021748, -23.676965750000022),
    new google.maps.LatLng(29.68224948021748, 44.87772174999998),
    new google.maps.LatLng(71.82725578445813, 44.87772174999998),
    new google.maps.LatLng(71.82725578445813, -23.676965750000022)];


    // Construct the polygon.
    poly = new google.maps.Polygon({
        paths: [worldCoords, EuropeCoords],
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#000000',
        fillOpacity: 0.35
    });

    poly.setMap(map);
}
initialize();