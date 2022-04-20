<?php
echo $_SERVER["REMOTE_ADDR"];
if(startsWith($_SERVER["REMOTE_ADDR"], "157.181")) echo "Igen";
else exit();*/


function startsWith ($string, $startString)
{
    $len = strlen($startString);
    return (substr($string, 0, $len) === $startString);
}

function roots($a, $b, $c) {
  $D = $b*$b - 4*$a*$c;
  if ($D >= 0){
    $x1 = (-$b + sqrt($D))/(2*$a);
    $x2 = (-$b - sqrt($D))/(2*$a);
    return "A gyökök: $x1, $x2 \n";   
  } else {
    $x1 = -$b/(2*$a);
    $x2 = sqrt(-$D)/(2*$a);
  return "A gyökök: $x1 ± $x2 i \n"; 
  }
}
function is_empty($input, $key) {
  return !(isset($input[$key]) && trim($input[$key]) !== '');
}
$gyokok = 0;
function ellenorzes(){
  $errors = [];
  if(is_empty($_GET, "name")){
    $errors []= "Nincs név";
  } else {
    $name = $_GET["name"];
  }
  if(is_empty($_GET, "a")){
    $errors []= "Nincs az 'a' érték megadva! ";
  } else if(!is_numeric($_GET["a"])) {
    $errors []= "Az 'a' érték nem egy szám!";
  } else {
    $a = intval($_GET["a"]);
  }
  if(count($errors) === 0)  return roots($_GET["a"],$_GET["b"], $_GET["c"]);
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body style="background-color:<?= $_POST["bgcolor"] ?? "lightgreen"?> ">
  
  <h1>Hello <?=  $_GET["name"] ?? "Nincs név" ?>!</h1>
  A másodfokú egyenlet megoldása: <?= ellenorzes()?>
  <?= var_dump($_GET) ?>
  <?php if (isset($errors)): ?>
    <ul>
      <?php foreach($errors as $error) : ?>
        <li><?= $error ?></li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
  <form action="index.php" method="get">
    Név: <input type="text" name="name" value="<?= $_GET["name"] ?? ''?>">
    Háttérszín: <input type="color" name="bgcolor" id="">
     
    a: <input type="number" name="a" value="<?= $_GET["a"] ?? ''?>">
    b: <input type="number" name="b" value="<?= $_GET["b"] ?? ''?>">
    c: <input type="number" name="c" value="<?= $_GET["c"] ?? ''?>">

    <input type="submit" value="Küldés">  
  </form>
  
  
  <a href="index.php?bgcolor=yellow">Sárga</a> <a href="index.php?bgcolor=blue">Kék</a> <a href="index.php?bgcolor=green">Zöld</a>
</body>
</html>