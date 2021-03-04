<?php
require_once './Classes/DB.php';

function search($table) : array {
    $db = DB::getInstance();

    $search = $db->prepare("SELECT * FROM $table");
    $state = $search->execute();

    $table = [];
    if($state) {
        foreach ($search->fetchAll() as $actor) {
            $table[] = $actor;
        }
    }
    return $table;
}

$actors = search('actors');
$films = search('films');
$all = ["actors" => $actors, "films" => $films];
$json = json_encode($all);

echo $json;
