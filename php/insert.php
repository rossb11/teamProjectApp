<?php
    require_once 'connect.php';
    
    $name=$_REQUEST['name'];
    $mail=$_REQUEST['email'];
    $pnum=$_REQUEST['phone'];
    

    $sql="INSERT INTO found (usserName, phone, email) VALUE";
   
    $sql .="('" . $name . "',";
    $sql .="'" . $pnum . "',";
    $sql .="'" . $mail . "')";
?>