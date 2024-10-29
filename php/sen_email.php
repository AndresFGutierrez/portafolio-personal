<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreCompleto = $_POST['nombreCompleto'];
    $email = $_POST['email'];
    $numeroTelefono = $_POST['numeroTelefono'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $to = "pipeolo45@gmail.com";
    $subject = "Nuevo mensaje de contacto: $asunto";
    $body = "Nombre: $nombreCompleto\nEmail: $email\nNúmero de Teléfono: $numeroTelefono\n\nMensaje:\n$mensaje";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Método no permitido.";
}
?>