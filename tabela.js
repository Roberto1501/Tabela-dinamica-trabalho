function test(){
    let credito = Number(document.getElementById("row2-col3").value)
    let debito = Number(document.getElementById("row2-col4").value)
    let resultadoFinal = document.getElementById("row2-col8")
    let resultado = credito-debito
    resultadoFinal.value = resultado
     console.log(resultado)
}