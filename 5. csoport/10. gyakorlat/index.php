<?php
    $json_string = file_get_contents("musics.json");
    $musics = json_decode($json_string, true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lejátszási lista</title>
</head>
<body>
    <h1>Lejátszási lista</h1>
    <table>
        <tr>
        <th>Előadó</th>
        <th>Cím</th>
        <th>Év</th>
        <th>Link</th>
        </tr>
        <form action="index.php" method="GET">
            Év: <input type="number" name="ev" id="">
            <input type="submit">
        </form>
        <?php foreach($musics as $music): ?>
            <?php if(!isset($_GET["ev"]) || $_GET["ev"] === ""|| $music["ev"] === intval($_GET["ev"])):?>
            <tr style="background-color:<?= $music["ev"] < 2018 ? "lightblue": "lightgreen"?>">
                <td><?= $music["eloado"] ?></td>
                <td><?= $music["cim"] ?></td>
                <td><?= $music["ev"] ?></td>
                <td><?= $music["link"] ?></td>
            </tr>
            <?php endif;?>
        <?php endforeach;?>
    </table>
    <a href="addmusic.php">Új zene hozzáadása</a>
</body>
</html>