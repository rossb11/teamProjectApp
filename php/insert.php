<?php
    require_once 'connect.php';
    $dbLocation=mysqli_real_escape_string($conn,$_REQUEST['dbLocation']);
    $name=mysqli_real_escape_string($conn,$_REQUEST['name']);
    $mail=mysqli_real_escape_string($conn,$_REQUEST['email']);
    $pnum=mysqli_real_escape_string($conn,$_REQUEST['phone']);
    $dec=mysqli_real_escape_string($conn,$_REQUEST['dec']);
    
    $sql="INSERT INTO found (itemDec,usserName, phone, email) VALUE ('$dec','$name','$pnum','$mail')";


    if(mysqli_query($conn, $sql)){
        print("stored");
    }else{
        print("failed");
    }
    mysqli_close($conn);

   
   echo "<script>location.href='../index.html'</script>";
?>