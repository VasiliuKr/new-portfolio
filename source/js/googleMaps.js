function initMap() {
	// Change some styles
	var styleArray = [
		{
			featureType: 'water',
			stylers: [{color: '#00bfa5'}]
		},
		{
			featureType: 'landscape',
			elementType: 'geometry.fill',
			stylers: [{color: '#ffffff'}]
		},
		{
			featureType: 'landscape.man_made',
			elementType: 'all',
			stylers: [{saturation: '-70'}]
		},
		{
			featureType: 'landscape.natural',
			elementType: 'all',
			stylers: [{visibility: 'off'}]
		},
		{
			featureType: 'poi',
			elementType: 'labels',
			stylers: [{visibility: 'off'}]
		},
		{
			featureType: 'poi.park',
			elementType: 'all',
			stylers: [{visibility: 'off'}]
		},
		{
			featureType: 'road',
			elementType: 'all',
			stylers: [{lightness: '-15'}]
		},
		{
			featureType: 'transit',
			elementType: 'labels',
			stylers: [{visibility: 'off'}]
			}
	];
	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('myGoogleMap'), {
		center: {lat: 56.136874, lng: 47.261590},
		scrollwheel: false,
		zoom: 14,
		styles: styleArray,
		disableDefaultUI: true
	});
	// Create marker
	var myMarker = new google.maps.Marker({
		position: {lat: 56.127956, lng: 47.265265},
		map: map,
		icon: 'assets/img/map_marker_large.png'
	});
}