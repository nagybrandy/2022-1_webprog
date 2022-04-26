<?php
   $errors = [];
   $data = [];
   if(validate($_POST)){
        $json_string = file_get_contents("musics.json");
        $musics = json_decode($json_string, true);

        $ujadat = [
            "eloado" => $data["eloado"],
            "cim" => $data["cim"],
            "ev" => $data["ev"],
            "link" => $data["link"]
        ];
        array_push($musics, $ujadat);
        $ujtomb = json_encode($musics, JSON_PRETTY_PRINT);
        file_put_contents("musics.json", $ujtomb);
   }
   function validate($post){
       // van-e hossza az értékeknek
       // év szám-e
       // link az tényleg link
       global $errors;
       global $data;
       if($post["eloado"] === ""){
            $errors []= "Adja meg az előadót!";
       } else {
           $data["eloado"] = $post["eloado"];
       }
       
       if($post["ev"] === ""){
            $errors []= "Adja meg az évet!";
       } else if(!is_numeric($post["ev"])){
            $errors []= "Az évhez számot adjon meg!";
       } else {
            $data["ev"] = intval($post["ev"]);
       }

       if(!filter_var($post["link"], FILTER_VALIDATE_URL)){
            $errors []= "Adja meg a linket!";
       } else {
            $data["link"] = $post["link"];
       }
       $data["cim"] = $post["cim"];

       return count($errors) === 0;
   }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentés</title>
</head>
<body>
    <?php if(count($errors) === 0): ?>
        <h1>Sikeres hozzáadás! 😊</h1>
        <a href="index.php">Vissza a főoldalra</a>
    <?php else: ?>
        <h1>Sikertelen hozzáadás! 😡</h1>
        <ul style="color:red">
            <?php foreach($errors as $error) : ?>
                <li><?= $error ?></li>
            <?php endforeach; ?>
        </ul>
        <a href="addmusic.php">Még egy próbát teszek...</a>
    <?php endif; ?>
</body>
</html>