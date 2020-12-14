<!-- <table> Ross attempt at retrieving data, Jack got working before i finished 
    <tr>
        <th>ItemId</th>
        <th>Category</th>
        <th>Item Description</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Location</th>
    </tr>

    <body id="data">

    </body>
</table>

<script>
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "categories.php";
    var asynchranous = true;

    ajax.open(method, url, asynchranous);

    ajax.send();

    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            console.log(data);

            var html = "";

            for(var i = 0;i < data.length: i++){
                var category = data[a].category;
                var itemDesc = data[a].itemDesc;
                var usserName = data[a].usserName;
                var phone = data[a].phone;
                var email = data[a].email;
                var location = data[a].location;
            }

            html += "<tr>";
                html += "<td>" + category + "</td>";
                html += "<td>" + itemDesc + "</td>";
                html += "<td>" + usserName + "</td>";
                html += "<td>" + phone + "</td>";
                html += "<td>" + email + "</td>";
                html += "<td>" + location + "</td>";

            html += "</tr>"

        }
    }



</script> -->