function foundForm(){ 

    const foundListing = {
        name:  $("input#name").val(),
        email: $("input#email").val(),
        phone: $("input#phone").val(),
        category: $("select#categorys").val(),
        location: $("textarea#Location").val(),
        itemDescription: $("textarea#ItemDescription").val()
    }
    
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': foundListing.location}, function(results, status) {
        if (status == 'OK') {
            
            foundListing.longitude = results[0].geometry.location.lat();
            foundListing.latitude = results[0].geometry.location.lng();

            if(foundListing.name === "" || foundListing.email === "" || foundListing.phone === "" || foundListing.category === ""
            || foundListing.location === "" || foundListing.itemDescription === ""){
                toast.error("Form is invalid");
            }else{
                $.ajax({
                    url: "/php/found.php",
                    type: "POST",
                    data: foundListing,
                    cache: false,
                    success: function () {
                        toast.success("Saved to Database!");
                    },
                    error: function () {
                        toast.error("There was an error!");
                    }
                });
            }
        } else {
          toast.error('Geocode was not successful for the following reason: ' + status);
        }
    });
    
    
}
      
