

function buttonClick(){
    let titulo = document.getElementById("container-titulo")
    let mes = prompt("digite o mês")
    let ano = prompt("digite o ano")
    
    titulo.innerHTML = "MOVIMENTO DE CAIXA " + mes + "/" + ano + " FOOD ITALIA"
}


function buttonClickDarco(){
    let titulo = document.getElementById("container-titulo")
    let mes = prompt("digite o mês")
    let ano = prompt("digite o ano")
    
    titulo.innerHTML = "MOVIMENTO DE CAIXA " + mes + "/" + ano + " DARCO INVESTIMENTOS"
}


function row1(){
    let credito = Number(document.getElementById("row2-col3").value);
    let debito = Number(document.getElementById("row2-col4").value);
    let creditoOutros = Number(document.getElementById("row2-col5").value);
    let debitoOutros = Number(document.getElementById("row2-col6").value);
    let FeirasDeb = Number(document.getElementById("row2-col7").value);
    let estiloFinal = document.getElementById("row2-col8");
    let resultadoFinal = document.getElementById("row2-col8").value;
    let resultado = (credito+creditoOutros)-(debito+debitoOutros+FeirasDeb);
    if(resultado<0){
        estiloFinal.style.color = "red";
    }
    else{
        estiloFinal.style.color = "black";
    }
    document.getElementById("row2-col8").value = resultado
}

function row2(){
    let credito1 = Number(document.getElementById("row3-col3").value);
    let debito1 = Number(document.getElementById("row3-col4").value);
    let creditoOutros1 = Number(document.getElementById("row3-col5").value);
    let debitoOutros1 = Number(document.getElementById("row3-col6").value);
    let FeirasDeb1 = Number(document.getElementById("row3-col7").value);
    let estiloFinal = document.getElementById("row3-col8");
    let resultadoPrecedente = Number(document.getElementById("row2-col8").value);
    let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
    let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
    if(resultadoFinal<0){
        estiloFinal.style.color = "red";
    }
    else{
        estiloFinal.style.color = "black";
    }
    document.getElementById("row3-col8").value = resultadoFinal;
}


function row3(){
    let credito1 = Number(document.getElementById("row4-col3").value);
    let debito1 = Number(document.getElementById("row4-col4").value);
    let creditoOutros1 = Number(document.getElementById("row4-col5").value);
    let debitoOutros1 = Number(document.getElementById("row4-col6").value);
    let FeirasDeb1 = Number(document.getElementById("row4-col7").value);
    let estiloFinal = document.getElementById("row4-col8");
    let resultadoPrecedente = Number(document.getElementById("row3-col8").value);
    let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
    let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
    if(resultadoFinal<0){
        estiloFinal.style.color = "red";
    }
    else{
        estiloFinal.style.color = "black";
    }
    document.getElementById("row4-col8").value = resultadoFinal;

    console.log(resultadoFinal)
}


function row4(){
    let credito1 = Number(document.getElementById("row5-col3").value);
    let debito1 = Number(document.getElementById("row5-col4").value);
    let creditoOutros1 = Number(document.getElementById("row5-col5").value);
    let debitoOutros1 = Number(document.getElementById("row5-col6").value);
    let FeirasDeb1 = Number(document.getElementById("row5-col7").value);
    let estiloFinal = document.getElementById("row5-col8");
    let resultadoPrecedente = Number(document.getElementById("row4-col8").value);
    let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
    let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
    if(resultadoFinal<0){
        estiloFinal.style.color = "red";
    }
    else{
        estiloFinal.style.color = "black";
    }
    document.getElementById("row5-col8").value = resultadoFinal;

    console.log(resultadoFinal)
}

function row5(){
    let credito1 = Number(document.getElementById("row6-col3").value);
    let debito1 = Number(document.getElementById("row6-col4").value);
    let creditoOutros1 = Number(document.getElementById("row6-col5").value);
    let debitoOutros1 = Number(document.getElementById("row6-col6").value);
    let FeirasDeb1 = Number(document.getElementById("row6-col7").value);
    let estiloFinal = document.getElementById("row6-col8");
    let resultadoPrecedente = Number(document.getElementById("row5-col8").value);
    let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
    let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
    if(resultadoFinal<0){
        estiloFinal.style.color = "red";
    }
    else{
        estiloFinal.style.color = "black";
    }
    document.getElementById("row6-col8").value = resultadoFinal;

    console.log(resultadoFinal)
}

