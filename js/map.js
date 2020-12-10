 
let autocomplete;

function initAutocomplete(){
    autocomplete= new google.maps.places.Autocomplete(
        document.getElementById('locationsearch'),
        {
            types: ['street_address'],
            componentRestrictions: {'country' : ['IE']}
        });
    

}