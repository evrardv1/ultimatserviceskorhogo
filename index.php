<?php
require_once 'db.php';
$view = $_GET['view'] ?? 'home';
$vehicles = getVehicles();
$logoUrl = "https://image2url.com/r2/default/images/1770053607358-53047e46-d8f3-40e1-98ee-29170bae4130.jpg";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ULTIMAT SERVICES S.A.R.L - Korhogo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .bg-ultimat-blue { background-color: #1e40af; }
        .text-ultimat-red { color: #ef4444; }
    </style>
</head>
<body class="bg-slate-50 text-slate-900">

    <!-- Navigation -->
    <nav class="bg-ultimat-blue text-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.php" class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white rounded-xl p-1 shadow-sm">
                    <img src="<?= $logoUrl ?>" alt="Logo" class="w-full h-full object-contain">
                </div>
                <div>
                    <h1 class="text-xl font-black leading-none">ULTIMAT SERVICES</h1>
                    <span class="text-[10px] font-bold text-red-300 uppercase tracking-widest">S.A.R.L.. Korhogo</span>
                </div>
            </a>
            <div class="hidden md:flex gap-8 font-bold uppercase text-xs tracking-widest">
                <a href="index.php" class="hover:text-red-300 transition">Accueil</a>
                <a href="?view=rent" class="hover:text-red-300 transition">Location</a>
                <a href="?view=buy" class="hover:text-red-300 transition">Vente</a>
            </div>
            <a href="https://wa.me/2250506074320" class="bg-white text-blue-800 px-6 py-2 rounded-lg font-black text-xs uppercase hover:bg-red-500 hover:text-white transition shadow-lg">Contact</a>
        </div>
    </nav>

    <?php if ($view === 'home'): ?>
        <!-- Hero Section -->
        <header class="relative bg-slate-900 text-white py-32 overflow-hidden">
            <div class="absolute inset-0 z-0 opacity-40">
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover">
            </div>
            <div class="container mx-auto px-6 relative z-10 text-center">
                <h1 class="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-none">
                    L'EXCELLENCE <span class="text-red-500">AUTOMOBILE</span><br>À KORHOGO
                </h1>
                <p class="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                    Location de 4x4 et vente de véhicules certifiés pour toutes vos missions dans le Grand Nord.
                </p>
                <div class="flex flex-wrap justify-center gap-6">
                    <a href="?view=rent" class="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest transition shadow-2xl">Louer un 4x4</a>
                    <a href="?view=buy" class="bg-white text-blue-900 px-10 py-4 rounded-xl font-black uppercase tracking-widest transition shadow-2xl border-b-4 border-slate-200">Acheter un véhicule</a>
                </div>
            </div>
        </header>

        <!-- Featured Section -->
        <section class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="flex justify-between items-end mb-16">
                    <div>
                        <h2 class="text-blue-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4">Dernières Arrivées</h2>
                        <h3 class="text-4xl font-black uppercase italic tracking-tighter">Notre <span class="text-red-500">Sélection</span></h3>
                    </div>
                    <a href="?view=rent" class="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600">Voir tout →</a>
                </div>
                <div class="grid md:grid-cols-3 gap-10">
                    <?php 
                    $count = 0;
                    foreach ($vehicles as $v): 
                        if ($v['status'] === 'available' && $count < 3):
                            $count++;
                    ?>
                        <div class="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
                            <div class="h-64 relative overflow-hidden">
                                <img src="<?= $v['image'] ?>" alt="<?= $v['name'] ?>" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                <div class="absolute top-5 right-5">
                                    <span class="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">Disponible</span>
                                </div>
                            </div>
                            <div class="p-8">
                                <h4 class="text-2xl font-black italic uppercase mb-6 truncate"><?= $v['name'] ?></h4>
                                <div class="grid grid-cols-3 gap-2 mb-8">
                                    <div class="bg-white p-3 rounded-2xl text-center border border-slate-100"><span class="block text-[8px] font-black text-slate-400 uppercase">Boîte</span><span class="text-[10px] font-bold"><?= $v['specs']['transmission'] ?></span></div>
                                    <div class="bg-white p-3 rounded-2xl text-center border border-slate-100"><span class="block text-[8px] font-black text-slate-400 uppercase">Places</span><span class="text-[10px] font-bold"><?= $v['specs']['seats'] ?></span></div>
                                    <div class="bg-white p-3 rounded-2xl text-center border border-slate-100"><span class="block text-[8px] font-black text-slate-400 uppercase">Moteur</span><span class="text-[10px] font-bold italic"><?= explode(' ', $v['specs']['engine'])[0] ?></span></div>
                                </div>
                                <div class="flex justify-between items-center pt-6 border-t border-slate-200">
                                    <p class="text-xl font-black text-blue-900 italic"><?= number_format($v['price'], 0, ',', ' ') ?> <small class="text-[10px] not-italic">FCFA</small></p>
                                    <a href="https://wa.me/2250506074320?text=Je suis intéressé par <?= $v['name'] ?>" class="bg-blue-800 text-white px-5 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-red-600 transition">Réserver</a>
                                </div>
                            </div>
                        </div>
                    <?php 
                        endif;
                    endforeach; 
                    ?>
                </div>
            </div>
        </section>

    <?php else: ?>
        <!-- Market View (Rent/Buy) -->
        <div class="container mx-auto px-6 py-24">
            <h2 class="text-5xl font-black uppercase italic tracking-tighter mb-16">
                <?= $view === 'rent' ? 'Flotte de <span class="text-blue-600">Location</span>' : 'Catalogue <span class="text-red-500">Vente</span>' ?>
            </h2>
            <div class="grid md:grid-cols-3 gap-10">
                <?php foreach ($vehicles as $v): if ($v['category'] === $view): ?>
                    <div class="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm">
                        <div class="h-64 relative">
                            <img src="<?= $v['image'] ?>" class="w-full h-full object-cover">
                            <div class="absolute top-5 right-5">
                                <span class="px-3 py-1.5 rounded-full text-[9px] font-black uppercase <?= $v['status'] === 'available' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700' ?>">
                                    <?= $v['status'] === 'available' ? 'Disponible' : 'Indisponible' ?>
                                </span>
                            </div>
                        </div>
                        <div class="p-8">
                            <h4 class="text-2xl font-black italic uppercase mb-4"><?= $v['name'] ?></h4>
                            <p class="text-2xl font-black text-blue-900 mb-8"><?= number_format($v['price'], 0, ',', ' ') ?> FCFA</p>
                            <a href="https://wa.me/2250506074320" class="w-full block bg-slate-900 text-white text-center py-4 rounded-xl font-black text-xs uppercase hover:bg-red-600 transition">Contacter pour ce modèle</a>
                        </div>
                    </div>
                <?php endif; endforeach; ?>
            </div>
        </div>
    <?php endif; ?>

    <!-- Footer -->
    <footer class="bg-slate-950 text-white py-20 mt-20">
        <div class="container mx-auto px-6 grid md:grid-cols-3 gap-20">
            <div>
                <h3 class="text-2xl font-black italic mb-6">ULTIMAT SERVICES</h3>
                <p class="text-slate-400 font-medium">Votre partenaire mobilité de confiance à Korhogo. Fiabilité, Sécurité et Excellence.</p>
            </div>
            <div>
                <h4 class="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-6">Contact</h4>
                <ul class="text-slate-400 space-y-4 font-bold text-sm">
                    <li>📞 +225 05 06 07 43 20</li>
                    <li>✉️ ultimatservice@gmail.com</li>
                    <li>📍 Korhogo, Quartier Petit-Paris</li>
                </ul>
            </div>
            <div class="flex flex-col items-center">
                <a href="admin.php" class="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700 hover:text-white transition">Administration</a>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Bubble -->
    <a href="https://wa.me/2250506074320" class="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-50">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.408 2.438 1.103 3.394l-.721 2.632 2.693-.707c.81.493 1.761.779 2.781.779 3.181 0 5.767-2.586 5.767-5.767s-2.586-5.767-5.767-5.767zm0-1.402c3.96 0 7.169 3.21 7.169 7.169s-3.21 7.169-7.169 7.169c-1.258 0-2.435-.325-3.461-.89l-4.57 1.2 1.23-4.48c-.689-1.054-1.094-2.316-1.094-3.668 0-3.96 3.21-7.169 7.169-7.169z"/></svg>
    </a>

</body>
</html>