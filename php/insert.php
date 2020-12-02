<?php
    require_once 'connect.php';
    $dbTable=mysqli_real_escape_string($conn,$_REQUEST['dbTable']);
    $name=mysqli_real_escape_string($conn,$_REQUEST['name']);
    $cat=mysqli_real_escape_string($conn,$_REQUEST['cat']);
    $location=mysqli_real_escape_string($conn,$_REQUEST['location']);
    $mail=mysqli_real_escape_string($conn,$_REQUEST['email']);
    $pnum=mysqli_real_escape_string($conn,$_REQUEST['phone']);
    $dec=mysqli_real_escape_string($conn,$_REQUEST['dec']);
    
    $sql="INSERT INTO $dbTable (category,itemDec,usserName, phone, email,location) VALUE ('$cat','$dec','$name','$pnum','$mail','$location')";


    if(mysqli_query($conn, $sql)){
        print("stored");
    }else{
        print("failed");
    }
    mysqli_close($conn);
    
   
   echo "<script>location.href='../index.html'</script>";
?>