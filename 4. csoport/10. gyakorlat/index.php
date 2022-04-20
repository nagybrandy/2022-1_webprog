<?php
  echo $_SERVER["REMOTE_ADDR"];
  if(startsWith($_SERVER["REMOTE_ADDR"], "157.181")){
    exit();
  }

  function startsWith ($string, $startString)
  {
      $len = strlen($startString);
      return (substr($string, 0, $len) === $startString);
  }

  function exists($var){
    return isset($var) && $var != "";
  }

  $errors = [];
  $data = [];
  function validate(){
    global $data;
    global $errors;

    if(!exists($_GET["name"])) {
      $errors []= "A név nem létezik!";
    } else if(strlen($_GET["name"]) < 3){
      $errors []= "A név rövidebb 3 karakternél";
    } else {
      $data["name"] = $_GET["name"];
    }
    if(!exists($_GET["age"])){
      $errors []= "Add meg a kort!";
    } else if(!is_numeric($_GET["age"])){
      $errors []= "Számot adj meg kornak!";
    } else {
      $data["age"] = $_GET["age"];
    }
  }

  validate();
  var_dump($data);
  var_dump($errors);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body style="background-color:<?= $_GET["bgcolor"] ?? "lightgreen";?>">
  <h1>Hello <?= $data["name"] ?? "Nincs név megadva!" ?>! </h1>
  <?= $data["age"] ?? "Nincs megadva a kor!" ?>
  <form action="index.php" method="get"><br><br>
    Név: <input type="text" name="name" id="" value="<?= $data["name"] ?? "" ?>"><br><br>
    Háttérszín: <input type="color" name="bgcolor" id="" value="#bdfbff"><br><br>
    Kor: <input type="text" name="age" value="<?= $data["age"] ?? "" ?>"><br><br>
    <input type="submit" value="Küldés">
  </form>
  <ul style="color:red">
    <?php foreach($errors as $e): ?>
      <li><?= $e?></li>
    <?php endforeach; ?>
  </ul>
  <a href="index.php?bgcolor=blue">Kék</a>
</body>
</html>