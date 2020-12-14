<?php
require_once 'connect.php';

$sql="SELECT * FROM lost WHERE category='$table'";
$sql2="SELECT * FROM found WHERE category='$table'";

$results=mysqli_query($conn,$sql) or die (mysqli_error($conn));
$results2=mysqli_query($conn,$sql2) or die (mysqli_error($conn));
 echo "<style>
 .lost {
         background-color: #FC604E;
          color: black;
  }
  .found {
         background-color: #CBF3F0;
         color: black;
  }
  </style>";

  while($row= mysqli_fetch_array($results)){
    echo "<div class='lost'> LOST<br>";
    echo "<strong>" . $row['category'] . "</strong><p>" . $row['itemDec'] . "</p> <p> Location: " . $row['location'] . "<br> Name: " . $row['usserName'] . "<br> Phone: " . $row['phone'] . "<br> Email: " . $row['email'];
    echo "</div>";
};
while($row2= mysqli_fetch_array($results2)){
  echo "<div class='found'> FOUND<br>";
  echo "<strong>" . $row2['category'] . "</strong><p>" . $row2['itemDec'] . "</p> <p> Location: " . $row2['location'] . "<br> Name: " . $row2['usserName'] . "<br> Phone: " . $row2['phone'] . "<br> Email: " . $row2['email'];
  echo "</div>";
};



