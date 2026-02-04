<?php
session_start();
require_once 'db.php';

// Login simple
if (isset($_POST['login'])) {
    if ($_POST['user'] === 'Sorho' && $_POST['pass'] === 'Sorho2025') {
        $_SESSION['admin'] = true;
    } else {
        $error = "Accès refusé";
    }
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
}

if (!isset($_SESSION['admin'])) {
    echo '
    <div style="height:100vh; display:flex; align-items:center; justify-content:center; background:#f1f5f9; font-family:sans-serif;">
        <form method="POST" style="background:white; padding:40px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.1); width:320px;">
            <h2 style="margin-bottom:20px; color:#1e40af; font-weight:900;">ADMINISTRATION</h2>
            <input type="text" name="user" placeholder="Utilisateur" required style="width:100%; padding:12px; margin-bottom:10px; border:1px solid #ddd; border-radius:10px;">
            <input type="password" name="pass" placeholder="Mot de passe" required style="width:100%; padding:12px; margin-bottom:20px; border:1px solid #ddd; border-radius:10px;">
            <button name="login" style="width:100%; padding:12px; background:#1e40af; color:white; border:none; border-radius:10px; cursor:pointer; font-weight:bold;">Connexion</button>
            <a href="index.php" style="display:block; text-align:center; margin-top:15px; font-size:12px; color:#64748b; text-decoration:none;">Retour au site</a>
        </form>
    </div>';
    exit;
}

$vehicles = getVehicles();

// Actions CRUD
if (isset($_POST['add'])) {
    $new = [
        "id" => uniqid(),
        "name" => $_POST['name'],
        "type" => $_POST['type'],
        "category" => $_POST['category'],
        "price" => (int)$_POST['price'],
        "image" => $_POST['image'],
        "specs" => [
            "engine" => $_POST['engine'],
            "seats" => (int)$_POST['seats'],
            "transmission" => $_POST['transmission']
        ],
        "status" => "available"
    ];
    $vehicles[] = $new;
    saveVehicles($vehicles);
    header('Location: admin.php');
}

if (isset($_GET['delete'])) {
    $vehicles = array_filter($vehicles, fn($v) => $v['id'] !== $_GET['delete']);
    saveVehicles($vehicles);
    header('Location: admin.php');
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Admin - ULTIMAT SERVICES</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 p-8">
    <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-black text-blue-900 italic">GESTION DU PARC</h1>
            <div class="flex gap-4">
                <a href="index.php" class="bg-slate-200 px-4 py-2 rounded-lg font-bold">Voir site</a>
                <a href="?logout=1" class="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">Déconnexion</a>
            </div>
        </div>

        <!-- Formulaire Ajout -->
        <form method="POST" class="bg-white p-8 rounded-3xl shadow-lg mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-3 mb-4"><h2 class="text-xl font-black">AJOUTER UN VÉHICULE</h2></div>
            <input type="text" name="name" placeholder="Nom du modèle" required class="border p-3 rounded-xl">
            <select name="category" class="border p-3 rounded-xl">
                <option value="rent">Location</option>
                <option value="buy">Vente</option>
            </select>
            <select name="type" class="border p-3 rounded-xl">
                <option value="pickup">Pickup</option>
                <option value="suv">SUV / 4x4</option>
                <option value="berline">Berline</option>
            </select>
            <input type="number" name="price" placeholder="Prix (FCFA)" required class="border p-3 rounded-xl">
            <input type="text" name="image" placeholder="URL Image" required class="border p-3 rounded-xl">
            <input type="text" name="engine" placeholder="Moteur (ex: V6 3.0L)" class="border p-3 rounded-xl">
            <input type="number" name="seats" placeholder="Places" value="5" class="border p-3 rounded-xl">
            <select name="transmission" class="border p-3 rounded-xl">
                <option value="Auto">Automatique</option>
                <option value="Manuelle">Manuelle</option>
            </select>
            <button name="add" class="bg-blue-800 text-white font-black rounded-xl hover:bg-red-600 transition">Enregistrer</button>
        </form>

        <!-- Liste -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <table class="w-full text-left">
                <thead class="bg-slate-50 border-b">
                    <tr>
                        <th class="p-6 font-black uppercase text-xs text-slate-400">Véhicule</th>
                        <th class="p-6 font-black uppercase text-xs text-slate-400">Catégorie</th>
                        <th class="p-6 font-black uppercase text-xs text-slate-400">Prix</th>
                        <th class="p-6 text-right font-black uppercase text-xs text-slate-400">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y">
                    <?php foreach ($vehicles as $v): ?>
                        <tr class="hover:bg-blue-50">
                            <td class="p-6">
                                <span class="font-black text-slate-900 block"><?= $v['name'] ?></span>
                                <span class="text-[10px] text-slate-400 font-bold uppercase"><?= $v['type'] ?></span>
                            </td>
                            <td class="p-6 uppercase font-bold text-xs text-blue-600"><?= $v['category'] ?></td>
                            <td class="p-6 font-black"><?= number_format($v['price'], 0, ',', ' ') ?> FCFA</td>
                            <td class="p-6 text-right">
                                <a href="?delete=<?= $v['id'] ?>" onclick="return confirm('Supprimer ?')" class="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-bold text-xs">Supprimer</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>