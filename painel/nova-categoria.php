<?php 
    require('./modulos/top-menu.php'); 
    $error = $_GET['error'] ?? null;
?>

<div  id="content-container">
    <form action="cadastrar-categoria.php" method="post">
        <div class="row">
            <div class="input-container quarter">
                <label for="category">Categoria</label>
                <input onclick="removerElementoPorID('mensagem-erro')" name="category" id="category" class="row-input" type="text" onkeyup="transformar_texto_em_maiusculo(this)">
            </div>
        </div>

        <?php if($error != null) { ?>
            <div id="mensagem-erro" class="row error-message"><?=$error?></div>
        <?php } ?>

        <div class="row row-button">
            <button class="button-default" type="submit">Salvar</button>
        </div>
    </form>
</div>

<?php require('./modulos/footer.php') ?>