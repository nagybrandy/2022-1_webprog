<?php 
    $name = "Géza";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "<h1>Hello world!</h1>";
    ?>
    <h2><?php echo "Hello " . $name . "!" ?></h2>
    <h2>Hello <?= $name ?>!</h2>
    <?php echo date("F j, Y, g:i a") . "<br>";
    
    $num = 4;
    function fact($n){
        $fact = $n;
        for($i=2;$i<$n;$i++){
            $fact = $fact * $i;
        }
        return $fact;
    }
    echo "A ". $num . " faktoriálisa: ".fact($num);
    ?>
    <h2>Hibalista</h2>
    <?php
    $hibalista = ["Nem piros az alma!", "Nem kék az ég.", "Béna a php.", "Nem tudok aludni."];
    var_dump($hibalista);
    ?>

    <?php
    echo "<ul style='color:red'>";
    foreach($hibalista as $hiba) {
        echo "<li>" . $hiba ."</li>";
    }     
    echo "</ul>";
    ?>

    <ul style='color:red'>
        <?php foreach($hibalista as $hiba): ?>
            <li><?= $hiba?></li>
        <?php endforeach ?>
        
    </ul>
    <?php for($i = 0; $i <= 3; $i++): ?>
        <h1 style="font-size: <?= $i*8 ?>pt;">Hello világ!</h1>
    <?php endfor ?>
    
    <h2>Legördülő menü</h2>
    <?php 
    $kategoriak = [
        5 => "Akció",
        4 => "Dráma",
        8 => "Vígjáték"
    ];
    var_dump($kategoriak);
    echo "<br>";
    ?>

    <select name="" id="">
        <?php foreach($kategoriak as $key => $value): ?>
            <option value="<?= $key?>"><?= $value ?></option>
        <?php endforeach ?>
    </select>
</body>
</html>