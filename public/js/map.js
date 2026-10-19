mapboxgl.accessToken=mapToken;


        // let mapToken = mapToken;
        // console.log(mapToken);
        // mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
        container:"map",
        accessToken: mapToken,
        style:"mapbox://styles/mapbox/streets-v12",
      center: listing.geometry.coordinates.length
    ? listing.geometry.coordinates
    : [ -118.7798, 34.0259 ],// starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
    
    const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup( new mapboxgl.Popup({offset: 25, })
    .setLngLat(
    listing.geometry.coordinates.length
        ? listing.geometry.coordinates
        : [-118.7798, 34.0259]
        )
    .setHTML(`<h4>${listing.location} welcome to your destination!</h4>`))
    .addTo(map);