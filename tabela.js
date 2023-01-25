function test(){
    let credito = Number(document.getElementById("row2-col3").value)
    let debito = Number(document.getElementById("row2-col4").value)
    let creditoOutros = Number(document.getElementById("row2-col5").value)
    let debitoOutros = Number(document.getElementById("row2-col6").value)
    let FeirasDeb = Number(document.getElementById("row2-col7").value)
    let estiloFinal = document.getElementById("row2-col8")
    let resultadoFinal = document.getElementById("row2-col8")
    let resultado = (credito+creditoOutros)-(debito+debitoOutros+FeirasDeb)
    if(resultado<0){
        estiloFinal.style.color = "red"
    }
    else{
        estiloFinal.style.color = "black"
    }
    resultadoFinal.value = resultado
     console.log(resultado)
}