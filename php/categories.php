<?php

require_once "connect.php";

$found = mysqli_query($conn, "SELECT * FROM found");

$data= array();
while($row= mysqli_fetch_assoc($found)){
    $data[] = $row;
}

echo json_encode($data);
?>
