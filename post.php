<?php

$nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$password = $_POST['password'];

if($nombre === "" || $mail === "" || $password === ""){
    echo json_encode("Llena todos los datos")
}
else{
    echo json_encode("Datos correctos")
}