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
        $name = "Rózsa"; 
        echo "<h1>Hello " . $name . "!</h1>";
        date_default_timezone_set('Europe/Budapest');
    ?>
    <h1>Hello <?php echo $name; ?>!</h1>
    <h1>Hello <?= $name ?>!</h1>
    <h2><?= date("F j, Y, g:i a")?></h2>
    <h2><?= phpversion()?></h2>
    <?php
        $num = 8;
        function fact($num)
        {
            if ($num <= 1) return 1;
            return $num * fact($num - 1);
        }
        echo fact($num);
        for($i = 1; $i <= 5; $i++){
            echo "<h1 style='font-size:" . $i*10 . "px'>Hello Világ!</h1>";
        }
    ?>
    <?php for($i = 0; $i < 5; $i++): ?>
        <h1 style="font-size: <?= $i ?>em">Hello World!</h1>
    <?php endfor; ?>
    <?php
        $hibalista = ["Nincs név!", "Nincs bepipálva, hogy kér hírlevelet!", "Nem szavaztam még a Neptunban a küldöttjelöltekre!"];
    ?>
    <ul style='color:red;'>
        <?php foreach ($hibalista as $error): ?>
            <li><?= $error ?></li>
        <?php endforeach ?>
    </ul>

    <?php 
    $kategoriak = [ 5 => "Akció", 4 => "Dráma", 8 => "Vígjáték" ]
    ?>
    <select>
        <?php foreach ($kategoriak as $key => $category): ?>
            <option value="<?= $key ?>"><?= $category ?> </option>
        <?php endforeach ?>
    </select>

    <?php
    $quiz = [
        "Hány alma van itt? 🍎🍎🍎" => [2,3,4, 1],
        "Milyen színű ez az emoji? 🍆" => ["lila", "piros", "sárga", 0],
        "Milyen jármű ez? 🚲" => ["bicikli", "autó", "motorkerékpár", 0]
    ];
    
    var_dump($quiz)
    ?>
</body>
</html>