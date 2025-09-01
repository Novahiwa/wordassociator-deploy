<?php
header("Access_Control_Allow_Origin:*");
header("Content-Type: application/json");

$config = require "/opt/lampp/config/config.php";

$conn = mysqli_connect($config['HOST'], $config['USERNAME'], $config['PASSWORD'], $config['DATABASE']);

if ($conn) {
    $stmt = "select * from users order by name";

    $stmt = mysqli_prepare($conn, $stmt);

    if (mysqli_execute($stmt)) {

        $users = [];

        $result = mysqli_stmt_get_result($stmt);


        while ($row = mysqli_fetch_assoc($result)) {

            $users[] = $row;
        }

        echo json_encode($users);
    } else {
        $error = "failed to fetch data";
        echo json_encode($error);
    }
} else {
    $error = "failed to connect to db";
    echo json_encode($error);
}
