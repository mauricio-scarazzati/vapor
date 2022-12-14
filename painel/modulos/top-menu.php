<?php

require('autenticacao.php');
require('conexao.php');
$_SESSION['administrador'] = $administrador;
$query_adm = "SELECT * FROM administrador WHERE id = '{$administrador['id']}'";
$nome_adm = mysqli_fetch_assoc(mysqli_query($conn, $query_adm));
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/global.css">
    <link rel="stylesheet" href="assets/normalize.css">
    <link rel="stylesheet" href="assets/style.css">
    <link rel="shortcut icon" href="public/icons/favicon.ico" type="image/x-icon">
    <script src="assets/scripts.js"></script>
    <title>Vapor - Dashboard</title>
</head>

<body>

    <div id="container">

        <?php require('side-menu.php') ?>

        <div id="sub-container">


            <div id="header">
                <div id="name">Dashboard</div>
                <div id="hello">Ola, <b><?=$nome_adm['nome']?></b> <span id="clock"></span>
                </div>
            </div>

<script>
    updateClock()
    iniciar_mudanca_cor()
</script>
