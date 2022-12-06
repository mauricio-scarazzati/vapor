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



// FUNÇÃO PARA MOSTRAR O RELOGIO

function obterDataHoraAtual() {
  const data = new Date()
  let horas = data.getHours()
  let minutos = data.getMinutes()
  let segundos = data.getSeconds()
  let dia = data.getDate() 
  let mes = data.getMonth()+1
  let ano = data.getFullYear()
  
  if(horas <= 9) {
    horas = "0" + hora
  }

  if(minutos <= 9) {
    minutos = "0" + minutos
  }

  if(segundos <= 9) {
    segundos = "0" + segundos
  }
  
  if(dia <= 9) {
    dia = "0" + dia
  }

  if(mes <= 9) {
    mes = "0" + mes
  }


  let dataAtual = " - " + dia + "/" + mes + "/" + ano + " - " + horas + ":" + minutos + ":" + segundos; 


  return dataAtual
}

function updateClock() {

  const clock = document.getElementById('clock')
  clock.innerHTML = obterDataHoraAtual()

  setInterval(function () {
    clock.innerHTML = obterDataHoraAtual()
    1000
  })

}

function cor_aleatoria(){
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const cor = "rgb(" + r + "," + g + "," + b + ")"

  document.getElementById("header").style.color = cor
}

function iniciar_mudanca_cor(){
  setInterval(cor_aleatoria, 1000)
}
