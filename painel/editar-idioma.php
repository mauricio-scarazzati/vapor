<?php 
    require('./modulos/top-menu.php'); 
    $error = $_GET['error'] ?? null;
    $id_idioma = $_GET['id'] ?? null;

    $consultar_idioma = "SELECT nome FROM idioma WHERE id = '{$id_idioma}'";
    $idioma = mysqli_fetch_assoc(mysqli_query($conn, $consultar_idioma));
?>

<div id="content-container">
    <form action="atualizar-idioma.php" method="post">
        <div class="row">
            <div class="input-container quarter">
                <label for="idiom">Idioma</label>
                <input onclick="removerElementoPorID('mensagem-erro')" value="<?=$idioma['nome']?>" name="idiom" id="idiom" class="row-input" type="text" onkeyup="transformar_primeira_letra_em_maiusculo(this)">
                <input value="<?=$id_idioma?>" name="id" type="hidden" >
            </div>
        </div>

        <?php if($error != null) { ?>
            <div id="mensagem-erro" class="row error-message"><?=$error?></div>
        <?php } ?>

        <div class="row row-button">
            <button class="button-default" type="submit">Atualizar</button>
        </div>
    </form>
</div>

<?php require('./modulos/footer.php') ?>