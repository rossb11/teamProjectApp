function foundForm(){ 
    //object 
    const foundListing = {
        name:  $("input#name").val(),
        email: $("input#email").val(),
        phone: $("input#phone").val(),
        category: $("select#categorys").val(),
        location: $("textarea#Location").val(),
        itemDescription: $("textarea#ItemDescription").val()
    }
    //For coordinates
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': foundListing.location}, function(results, status) {
        if (status == 'OK') {
            //Adds coordinates to database longitude and latitude 
            foundListing.longitude = results[0].geometry.location.lat();
            foundListing.latitude = results[0].geometry.location.lng();

            //if statement throws toast error if fields not filled in 
            if(foundListing.name === "" || foundListing.email === "" || foundListing.phone === "" || foundListing.category === ""
            || foundListing.location === "" || foundListing.itemDescription === ""){
                toast.error("Form is invalid");
            } else{ 
                $.ajax({
                    url: "/php/found.php",
                    type: "POST",
                    data: foundListing,
                    cache: false,
                    success: function () {  //success message
                        toast.success("Saved to Database!");
                    },
                    error: function () { //error message
                        toast.error("There was an error!");
                    }
                });
            }
        } else {
          toast.error('Geocode was not successful for the following reason: ' + status);
        }
    });
    
    
}
      
