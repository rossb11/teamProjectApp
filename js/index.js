
      // Initialize and add the map
      var latitude = 53.4129;
      var longitude = 8.2439;
      
      function initMap() {
        
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 8,
          center: {lat:latitude, lng: longitude},
        });
        
        const marker = new google.maps.Marker({
          position: {lat:53.4129, lng: 8.2439},
          map: map,
        });
      }
      function getLocation() {
      
        if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
        // console.log(navigator.geolocation.getCurrentPosition);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      getLocation();

      function showPosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      }
    