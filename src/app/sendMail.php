<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        
    case("POST"):
        header("Access-Control-Allow-Origin: *");
        
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'info@alex-reitz.de';
        $subject = "Contact From " . $name;
        
        // HTML Message
        $htmlMessage = "
        <html>
        <head>
            <title>Neue Kontaktanfrage</title>
        </head>
        <body>
            <h2>Neue Nachricht von: " . htmlspecialchars($name) . "</h2>
            <p><strong>E-Mail:</strong> " . htmlspecialchars($email) . "</p>
            <p><strong>Nachricht:</strong></p>
            <p>" . nl2br(htmlspecialchars($message)) . "</p>
        </body>
        </html>
        ";

        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: Kontaktformular <noreply@alex-reitz.de>"; 
        $headers[] = "Reply-To: " . $email;

        mail($recipient, $subject, $htmlMessage, implode("\r\n", $headers));
        break;
        
    default:
        header("Allow: POST", true, 405);
        exit;
}
