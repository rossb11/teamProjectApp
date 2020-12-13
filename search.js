function searchBar(){

    var input = document.getElementById("search").value;
     //alert(input);
    if (input == "home"){
        location.href = "index.html";
        return false;
    }
    else if (input == "categories"){
        location.href = "categories.html";
        return false;
    }
    else if (input == "maps"){
        location.href = "map.html";
        return false;
    }
    else if (input == "lost"){
        location.href = "lostForm.html";
        return false;
    }
    else if (input == "found"){
        location.href = "foundForm.html";
        return false;
    }
    else if (input == "contact"){
        location.href = "contactform.html";
        return false;
    }
    else if (input == "clothes"){
        location.href = "clothes.html";
        return false;
    }
    else if (input == "jewellery"){
        location.href = "jewellery.html";
        return false;
    }
    else if (input == "keys"){
        location.href = "keys.html";
        return false;
    }
    else if (input == "pets"){
        location.href = "pets.html";
        return false;
    }
    else if (input == "wallet"){
        location.href = "wallet.html";
        return false;
    }
    else if (input == "phone"){
        location.href = "phone.html";
        return false;
    }
    
    else {
        alert('Invalid Input.');
    }
        }