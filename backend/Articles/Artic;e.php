<?php 

require("../Database/Database.php");

$DB = new Database();

function get4LastArticles()
{
    $query = "SELECT * FROM articles ORDER BY created LIMIT 4";
    $results = $DB->pull($query);
}


?>