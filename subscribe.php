<?php
const KEY = 'pk_383375a5bfcacd6f51e0c9b2636067517c';
const ID = 'Rha8Rh';
const URL = "https://a.klaviyo.com/api/v2/list/" . ID . "/subscribe?api_key=" . KEY;

require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$email = (!empty($_POST['email'])) ? trim($_POST['email']) : 'test@test.com';

try {
    $response = $client->request('POST', URL, [
            'body' => '{"profiles":[{"email":"'.$email.'"}]}',
            'headers' => [
                'accept' => 'application/json',
                'content-type' => 'application/json',
            ]
        ]);


    if ($response->getBody()) {
        echo json_encode([
            'text' => 'success',
            'code' => $response->getStatusCode(),
            'email' => $email
        ]);
    }
} catch (\GuzzleHttp\Exception\RequestException $e) {
    echo json_encode([
        'text' => 'error',
        'code' => $e->getMessage(),
        'email' => $email
    ]);
}