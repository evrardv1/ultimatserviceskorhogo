<?php
header('Content-Type: application/json');
$apiKey = getenv('API_KEY') ?: 'YOUR_API_KEY_HERE';

$input = json_decode(file_get_contents('php://input'), true);
$action = $input['action'] ?? '';

if ($action === 'generate_services') {
    $prompt = "Agis comme un expert en marketing automobile de luxe. Génère un contenu marketing ultra-professionnel pour les 3 services d'ULTIMAT SERVICES (Location, Vente, Logistique). Réponds en JSON pur (Array d'objets avec id, title, description, btn).";
    
    $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=" . $apiKey;
    
    $data = [
        "contents" => [["parts" => [["text" => $prompt]]]]
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    
    $response = curl_exec($ch);
    $result = json_decode($response, true);
    $text = $result['candidates'][0]['content']['parts'][0]['text'] ?? '[]';
    
    // Nettoyage du JSON si Gemini ajoute des backticks
    $text = preg_replace('/```json|```/', '', $text);
    echo $text;
    exit;
}
?>