<?php
$db_file = __DIR__ . '/data/vehicles.json';

if (!file_exists(__DIR__ . '/data')) {
    mkdir(__DIR__ . '/data', 0777, true);
}

if (!file_exists($db_file)) {
    $initial_data = [
        [
            "id" => "tucson-2007-1",
            "name" => "Hyundai Tucson 2007",
            "type" => "suv",
            "category" => "rent",
            "price" => 35000,
            "image" => "https://image2url.com/r2/default/images/1770215615305-449207ce-bce4-4ca3-9786-877a6845894a.jpeg",
            "specs" => ["engine" => "V6 3.5L", "seats" => 5, "transmission" => "Auto"],
            "status" => "available"
        ],
        [
            "id" => "hilux-1",
            "name" => "Toyota Hilux Ultimat Edition",
            "type" => "pickup",
            "category" => "rent",
            "price" => 75000,
            "image" => "https://images.unsplash.com/photo-1590333746434-582875f54c30?auto=format&fit=crop&q=80&w=2000",
            "specs" => ["engine" => "D-4D Turbo", "seats" => 5, "transmission" => "Manuelle"],
            "status" => "available"
        ]
    ];
    file_put_contents($db_file, json_encode($initial_data, JSON_PRETTY_PRINT));
}

function getVehicles() {
    global $db_file;
    return json_decode(file_get_contents($db_file), true);
}

function saveVehicles($data) {
    global $db_file;
    file_put_contents($db_file, json_encode(array_values($data), JSON_PRETTY_PRINT));
}
?>