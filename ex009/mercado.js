document.getElementById("resultado").style.visibility = "hidden"
function reajuste(){
 let nome = document. getElementById("produto").value
 let pre = Number(document.getElementById("preco").value)
 let dezporc = (pre * 10)/100
 let novopre = pre - dezporc
 let saida = document.getElementById("saida")
 saida.innerHTML = `O <strong>${nome}</strong> vai custar R$${novopre} na promoção de aniversário ` 
 document.getElementById("resultado").style.visibility = "visible"
    return false 
}