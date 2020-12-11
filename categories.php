<!DOCTYPE html>
<html>
<head>
<title>Table with database</title>
<style>
table {
border-collapse: collapse;
width: 100%;
color: #588c7e;
font-family: monospace;
font-size: 25px;
text-align: left;
}
th {
background-color: #588c7e;
color: white;
}
tr:nth-child(even) {background-color: #f2f2f2}
</style>
</head>
<body>


<table>
<tr>
<th>ItemId</th>
<th>Category</th>
<th>Item Description</th>
<th>Name</th>
<th>Phone</th>
<th>Email</th>
<th>Location</th>

</tr>
<?php

require_once "connect.php";


$sql = "SELECT itemid, category, itemDec, usserName, phone, email,  location FROM lost";
$result = mysqli_query($conn,$sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
echo "<tr><td>" . $row["itemid"]. "</td><td>" . $row["category"] . "</td><td>"
. $row["itemDec"]. "</td></tr>". $row["usserName"]. "</td></tr>". $row["phone"]. "</td></tr>". $row["email"]. "</td></tr>".
$row["location"]. "</td></tr>";
}
echo "</table>";
} else { echo "0 results"; }
$conn->close();
?>
</table>
</body>
</html>