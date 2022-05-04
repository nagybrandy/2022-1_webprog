<?php
  $errors = [];
  $data = [];
  if(validate($_POST)){
    $json_string = file_get_contents("musics.json");
    $musics = json_decode($json_string, true);
    $new_data = [
      "eloado" => $data["eloado"],
      "cim" => $data["cim"],
      "ev" => intval($data["ev"]),
      "link" => $data["link"]
    ];
    array_push($musics, $new_data);
    $new_array = json_encode($musics, JSON_PRETTY_PRINT);
    file_put_contents("musics.json",$new_array);

  }
  function validate($fv){
    // név létezik-e és hogy legalább 3 karakter hosszú
    
    global $data,$errors;
    if($fv["eloado"] === "") $errors []= "Add meg az előadót!";
    elseif (strlen($fv["eloado"]) <= 3) $errors []= "Legalább 3 karakter hosszú legyen az előadó neve!";
    else $data["eloado"] = $fv["eloado"];

    // címnél ugyanez
    if($fv["cim"] === "") $errors []= "Add meg a címet!";
    elseif (strlen($fv["cim"]) <= 3) $errors []= "Legalább 3 karakter hosszú legyen a cím neve!";
    else $data["cim"] = $fv["cim"];

    // van-e év és szám-e
    if($fv["ev"] === "") $errors []= "Add meg az évet!";
    elseif (!is_numeric($fv["ev"])) $errors []= "Az évnek számot adj meg!";
    else $data["ev"] = $fv["ev"];

    // van-e link és link-e
    if($fv["link"] === "") $errors []= "Add meg a linket!";
    elseif (!filter_var($fv["link"], FILTER_VALIDATE_URL)) $errors []= "Kérjük a linknek linket ajdon meg!";
    else $data["link"] = $fv["link"];

    //var_dump($errors, $data);
    return count($errors) === 0;
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validálás</title>
</head>
<body>
  <?php if(count($errors) === 0): ?>
    <h1>Sikeres hozzáadás! 🤩</h1>
    <a href="index.php">Vissza a főoldalra</a>
  <?php else: ?>
    <h1>Sikertelen hozzáadás! 😡</h1>
    <ul style="color:red">
    <?php foreach ($errors as $error): ?>
      <li><?= $error ?></li>
    <?php endforeach; ?>
    </ul>
    <a href="addmusic.php">Még egyszer megpróbálom...</a>
  <?php endif; ?> 
</body>
</html>