 
let autocomplete;
//google api
function initAutocomplete(){
    autocomplete= new google.maps.places.Autocomplete(
        document.getElementById('locationsearch'),
        {
            types: ['street_address'],
            componentRestrictions: {'country' : ['IE']}
        });
    
}

// const icons = {
//     lost: {
//             icon: "../assets/img/lost.png",
//     },
//     found: {
//             icon:"../assets/img/circled-f.png" , 
//     }
// };
var map;
// Onload display lost and found markers
function Markers(){
    //init map
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {lat:53.3903232, lng: -6.3159103},
    });
    //init variable
    var mapMarkers = [];
    var information = [];
    var data = {
        dbname:"lost"
    }
    //ajax request to php for lost data
    $.ajax({
        url: "/php/markers.php",
        type: "GET",
        data: data,
        cache: false,
        success: function (res) {  
            res = JSON.parse(res);
            for(i = 0; i<res.length; i++){
                mapMarkers[i] = new google.maps.Marker({
                    position: {
                      lat : parseFloat(res[i].longitude),
                      lng : parseFloat(res[i].latitude)
                    },
                    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                    map: map,
                    label: "" + i
                });
                //puts category and location in pop up on pin 
                information[i] = new google.maps.InfoWindow({
                    content: `<div class="popup_container" style="color:black">
                    
                    <h3>${res[i].category}</h3><br/>
                    <p>${res[i].location}</p>
                    </div>`,
                    maxWidth: 300
                });

                mapMarkers[i].index = i;
                //when marker clicked information pop up shown
                google.maps.event.addListener(mapMarkers[i], 'click', function() {
                    information[this.index].open(map,mapMarkers[this.index]);
                    map.panTo(mapMarkers[this.index].getPosition());
                });
                    
            }
        },
        error: function () { //error message
            console.error("There was an error!");
        }
    });
    //same produre for found data
    data ={
        dbname:"found"
    }
    $.ajax({
        url: "/php/markers.php",
        type: "GET",
        data: data,
        cache: false,
        success: function (res) {  
            res = JSON.parse(res);
            for(i = 0; i<res.length; i++){
                mapMarkers[i] = new google.maps.Marker({
                    position: {
                      lat : parseFloat(res[i].longitude),
                      lng : parseFloat(res[i].latitude)
                    },
                    icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                    map: map,
                    label: "" + i
                });
                information[i] = new google.maps.InfoWindow({
                    content: `<div class="popup_container" style="color:black">
                    
                    <h3>${res[i].category}</h3><br/>
                    <p>${res[i].location}</p>
                    </div>`,
                    maxWidth: 300
                });

                mapMarkers[i].index = i;
                google.maps.event.addListener(mapMarkers[i], 'click', function() {
                    information[this.index].open(map,mapMarkers[this.index]);
                    map.panTo(mapMarkers[this.index].getPosition());
                });
                    
            }
        },
        error: function () { //error message
            console.error("There was an error!");
        }
    });
}
//geocoder form 
const geocoder = new google.maps.Geocoder();
//On button click run geocode function
document.getElementById("submit").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
});
//use geocode to create centre position for map
function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
