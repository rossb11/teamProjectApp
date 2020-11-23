<?php
$usser='root';
$password='';
$db='finditem';


$di=new mysqli('localhost',$usser,$password,$db
)or die("unable to ");
 
echo"connect";

?>