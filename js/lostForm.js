function lostForm(){ 

    const lostListing = {
        name:  $("input#name").val(),
        email: $("input#email").val(),
        phone: $("input#phone").val(),
        category: $("select#categorys").val(),
        location: $("textarea#Location").val(),
        itemDescription: $("textarea#ItemDescription").val()
    }

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': lostListing.location}, function(results, status) {
        if (status == 'OK') {
            
            lostListing.longitude = results[0].geometry.location.lat();
            lostListing.latitude = results[0].geometry.location.lng();

            if(lostListing.name === "" || lostListing.email === "" || lostListing.phone === "" || lostListing.category === ""
            || lostListing.location === "" || lostListing.itemDescription === ""){
                toast.error("Form is invalid");
            }else{
                $.ajax({
                    url: "/php/lost.php",
                    type: "POST",
                    data: lostListing,
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