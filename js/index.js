
      // // Initialize and add the map
      // var latitude = 53.4129;
      // var longitude = 8.2439;
      
      // function initMap() {
        
      //   const map = new google.maps.Map(document.getElementById("map"), {
      //     zoom: 8,
      //     center: {lat:latitude, lng: longitude},
      //   });
        
      //   const marker = new google.maps.Marker({
      //     position: {lat:53.4129, lng: 8.2439},
      //     map: map,
      //   });
      // }
      // function getLocation() {
      
      //   if (navigator.geolocation) {
      //    navigator.geolocation.getCurrentPosition(showPosition);
      //   // console.log(navigator.geolocation.getCurrentPosition);
      //   } else {
      //     x.innerHTML = "Geolocation is not supported by this browser.";
      //   }
      // }
      // getLocation();

      // function showPosition(position) {
      //   latitude = position.coords.latitude;
      //   longitude = position.coords.longitude;
      // }
      // Set these to dublin
    var latitude = 53.4129;
    var longitude = 8.2439;
    // initalizing the map 
    // its a var so it can be changed later in the the show position method
    // consts cant be changed same as final keyword on variables in java
    var map;

    // loading map onto page
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 8,
          center: {lat:latitude, lng: longitude},
        });
    }
    
    // Using the built in browser geolocation API
    // This is not 100% percise but nice feature to have
    function getLocation() {
        // if we can use geolocation and permissions accepted
        if (navigator.geolocation) {
          // call the show position method
         navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          // console.error we can see this in dev tools (ctrl + shft + i)
          // unlikely we will see this error
          console.error("Geolocation is not supported by this browser.");
        }
    }

    // we can now do stuff with the data from the geolocation API
    function showPosition(position) {
        // Updating our map to match our precise location
        map.setZoom(15);
        map.setCenter({
          lat : position.coords.latitude,
          lng : position.coords.longitude
        });
        
        // The marker, positioned at YourLocation
        const marker = new google.maps.Marker({
          position: {
            lat : position.coords.latitude,
            lng : position.coords.longitude
          },
          map: map,
          label: "Your Current Location"
        });
                
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    }

    // calling the getLocation() method
    getLocation();
    