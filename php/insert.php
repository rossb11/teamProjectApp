<?php
<<<<<<< HEAD
    
    

=======
>>>>>>> cde6b4f511db0bdaf2bd29fe8c4b476a08ac74c4
    require_once 'connect.php';

    $name=mysqli_real_escape_string($conn,$_REQUEST['name']);
    $mail=mysqli_real_escape_string($conn,$_REQUEST['email']);
    $pnum=mysqli_real_escape_string($conn,$_REQUEST['phone']);
    $category=mysqli_real_escape_string($conn,$_REQUEST['category']);
    $location=mysqli_real_escape_string($conn,$_REQUEST['location']);
    $itemDescription=mysqli_real_escape_string($conn,$_REQUEST['itemDescription']);
    $longitude=mysqli_real_escape_string($conn,$_REQUEST['longitude']);
    $latitude=mysqli_real_escape_string($conn,$_REQUEST['latitude']);
    $dbname=mysqli_real_escape_string($conn,$_REQUEST['dbname']);
    
    $sql="INSERT INTO `$dbname` (`itemid`, `category`, `itemDec`, `usserName`, `phone`, `email`, `location`, `longitude`, `latitude`)
     VALUES  (NULL, '$category', '$itemDescription', '$name', '$pnum', '$mail', '$location', '$longitude', '$latitude');";

    if(mysqli_query($conn, $sql)){
        print("stored");
    }else{
        print("failed");
    }
    mysqli_close($conn);

   
   echo "<script>location.href='../index.html'</script>";
?>