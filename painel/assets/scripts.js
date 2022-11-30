function excluirjogo(idjogo){
    let excluirjogo = confirm("Realment deseja excluir esse jogo ?")

    if(excluirjogo == true){
        window.open("excluir-jogo.php?id=" + idjogo, "_SELF")
    }
    
}