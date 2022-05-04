<?php
  $json_string = file_get_contents("musics.json");
  $musics = json_decode($json_string, true);
  $evek = [];
  foreach ($musics as $value) {
    $evek []= $value["ev"];
  }
  var_dump($evek);
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
  <form action="index.php" method="get">
      <select name="ev">
        <?php foreach ($evek as $ev): ?>
          <option value="<?= $ev ?>"><?= $ev ?></option>
        <?php endforeach; ?>
        </select>
        <input type="submit" value="Szűrés">
  </form>
  <table>
    <tr>
      <th>Előadó</th>
      <th>Cím</th>
      <th>Év</th>
      <th>Link</th>
    </tr>
    <?php foreach ($musics as $music): ?>
      <?php if( !isset($_GET["ev"]) || $_GET["ev"] === "" || $music["ev"] === intval($_GET["ev"])): ?>
      <tr style="background-color:<?= $music["ev"] <= 2000 ? "lightblue" : "lightgreen" ?>">
        <td><?= $music["eloado"] ?></td>
        <td><?= $music["cim"] ?></td>
        <td><?= $music["ev"] ?></td>
        <td><a href="<?= $music["link"] ?>">Link</a></td>
      </tr>
      <?php endif; ?>
    <?php endforeach; ?>
  </table>
  <a href="addmusic.php">Új zene hozzáadása</a>
</body>
</html>