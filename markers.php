<?php
    require_once 'connect.php';
    $dbname=mysqli_real_escape_string($conn,$_REQUEST['dbname']);
    $sql="SELECT * FROM `$dbname`";
    
    $res = mysqli_query($conn, $sql);

    $items = array();
    while ($row = mysqli_fetch_array($res)) {
        $item = array(
            "longitude" => $row['longitude'],
            "latitude"  => $row['latitude'],
            "category" => $row['category'],
            "usserName" => $row['usserName'],
            "location"  => $row['location'],
            "phone" => $row['phone'],
            "email" => $row['email'],
            "itemDec" => $row['itemDec'],

            
        );
        $items[] = $item;
    }

    echo json_encode($items);
   
?>