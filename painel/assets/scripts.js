function excluirelementoporid(idElemento, textoalerta, paginadestino){
    let excluirelementoporid = confirm(textoalerta)

    if(excluirelementoporid == true){
        window.open(paginadestino + idElemento, "_SELF")
    }
    
}


function removerElementoPorID(idElemento) {
    let elemento = document.getElementById(idElemento)

    if(elemento != null){
        elemento.remove()
    }
}



function obterdataehoraatual() {
    const data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()
    let dia = data.getDate()
    let mes = data.getMonth() 
    const ano = data.getFullYear()
  
    mes = mes + 1
    if (segundo < 10){
       segundo = "0" + segundo
    }
  
    if (minuto < 10){
         minuto = "0" + minuto
      }
  
    if (hora < 10){
       hora = "0" + hora
    }
  
    if (dia < 10){
      dia = "0" + dia
    }
  
    if (mes < 10){
      mes = "0" + mes 
    }
  
    let dataatual = dia + "/" + mes  + "/" + ano + "-" + hora + ":" + minuto + ":" + segundo 
    return dataatual
  }
  
  let dataehora = obterdataehoraatual()
  console.log(dataehora)