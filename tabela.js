

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



function calculo(){
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
    
    }
    
    
    function row6(){
        let credito1 = Number(document.getElementById("row7-col3").value);
        let debito1 = Number(document.getElementById("row7-col4").value);
        let creditoOutros1 = Number(document.getElementById("row7-col5").value);
        let debitoOutros1 = Number(document.getElementById("row7-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row7-col7").value);
        let estiloFinal = document.getElementById("row7-col8");
        let resultadoPrecedente = Number(document.getElementById("row6-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row7-col8").value = resultadoFinal;
    
    }
    
    
    
    function row7(){
        let credito1 = Number(document.getElementById("row8-col3").value);
        let debito1 = Number(document.getElementById("row8-col4").value);
        let creditoOutros1 = Number(document.getElementById("row8-col5").value);
        let debitoOutros1 = Number(document.getElementById("row8-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row8-col7").value);
        let estiloFinal = document.getElementById("row8-col8");
        let resultadoPrecedente = Number(document.getElementById("row7-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row8-col8").value = resultadoFinal;
    
    }
    
    
    function row8(){
        let credito1 = Number(document.getElementById("row9-col3").value);
        let debito1 = Number(document.getElementById("row9-col4").value);
        let creditoOutros1 = Number(document.getElementById("row9-col5").value);
        let debitoOutros1 = Number(document.getElementById("row9-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row9-col7").value);
        let estiloFinal = document.getElementById("row9-col8");
        let resultadoPrecedente = Number(document.getElementById("row8-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row9-col8").value = resultadoFinal;
    
    }
    
    function row9(){
        let credito1 = Number(document.getElementById("row10-col3").value);
        let debito1 = Number(document.getElementById("row10-col4").value);
        let creditoOutros1 = Number(document.getElementById("row10-col5").value);
        let debitoOutros1 = Number(document.getElementById("row10-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row10-col7").value);
        let estiloFinal = document.getElementById("row10-col8");
        let resultadoPrecedente = Number(document.getElementById("row9-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row10-col8").value = resultadoFinal;
    
    }
    
    function row10(){
        let credito1 = Number(document.getElementById("row11-col3").value);
        let debito1 = Number(document.getElementById("row11-col4").value);
        let creditoOutros1 = Number(document.getElementById("row11-col5").value);
        let debitoOutros1 = Number(document.getElementById("row11-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row11-col7").value);
        let estiloFinal = document.getElementById("row11-col8");
        let resultadoPrecedente = Number(document.getElementById("row10-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row11-col8").value = resultadoFinal;
    
    }
    
    
    function row11(){
        let credito1 = Number(document.getElementById("row12-col3").value);
        let debito1 = Number(document.getElementById("row12-col4").value);
        let creditoOutros1 = Number(document.getElementById("row12-col5").value);
        let debitoOutros1 = Number(document.getElementById("row12-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row12-col7").value);
        let estiloFinal = document.getElementById("row12-col8");
        let resultadoPrecedente = Number(document.getElementById("row11-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row12-col8").value = resultadoFinal;
    
    }
    
    function row12(){
        let credito1 = Number(document.getElementById("row13-col3").value);
        let debito1 = Number(document.getElementById("row13-col4").value);
        let creditoOutros1 = Number(document.getElementById("row13-col5").value);
        let debitoOutros1 = Number(document.getElementById("row13-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row13-col7").value);
        let estiloFinal = document.getElementById("row13-col8");
        let resultadoPrecedente = Number(document.getElementById("row12-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row13-col8").value = resultadoFinal;
    
    }
    
    function row13(){
        let credito1 = Number(document.getElementById("row15-col3").value);
        let debito1 = Number(document.getElementById("row14-col4").value);
        let creditoOutros1 = Number(document.getElementById("row14-col5").value);
        let debitoOutros1 = Number(document.getElementById("row14-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row14-col7").value);
        let estiloFinal = document.getElementById("row14-col8");
        let resultadoPrecedente = Number(document.getElementById("row13-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row14-col8").value = resultadoFinal;
    
    }
    
    
    function row14(){
        let credito1 = Number(document.getElementById("row15-col3").value);
        let debito1 = Number(document.getElementById("row15-col4").value);
        let creditoOutros1 = Number(document.getElementById("row15-col5").value);
        let debitoOutros1 = Number(document.getElementById("row15-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row15-col7").value);
        let estiloFinal = document.getElementById("row15-col8");
        let resultadoPrecedente = Number(document.getElementById("row14-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row15-col8").value = resultadoFinal;
    
    }
    
    
    function row15(){
        let credito1 = Number(document.getElementById("row16-col3").value);
        let debito1 = Number(document.getElementById("row16-col4").value);
        let creditoOutros1 = Number(document.getElementById("row16-col5").value);
        let debitoOutros1 = Number(document.getElementById("row16-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row16-col7").value);
        let estiloFinal = document.getElementById("row16-col8");
        let resultadoPrecedente = Number(document.getElementById("row15-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row16-col8").value = resultadoFinal;
    
    }
    
    
    function row16(){
        let credito1 = Number(document.getElementById("row17-col3").value);
        let debito1 = Number(document.getElementById("row17-col4").value);
        let creditoOutros1 = Number(document.getElementById("row17-col5").value);
        let debitoOutros1 = Number(document.getElementById("row17-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row17-col7").value);
        let estiloFinal = document.getElementById("row17-col8");
        let resultadoPrecedente = Number(document.getElementById("row16-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row17-col8").value = resultadoFinal;
    
    }

    function row17(){
        let credito1 = Number(document.getElementById("row18-col3").value);
        let debito1 = Number(document.getElementById("row18-col4").value);
        let creditoOutros1 = Number(document.getElementById("row18-col5").value);
        let debitoOutros1 = Number(document.getElementById("row18-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row18-col7").value);
        let estiloFinal = document.getElementById("row18-col8");
        let resultadoPrecedente = Number(document.getElementById("row17-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row18-col8").value = resultadoFinal;
    
    }


    function row18(){
        let credito1 = Number(document.getElementById("row19-col3").value);
        let debito1 = Number(document.getElementById("row19-col4").value);
        let creditoOutros1 = Number(document.getElementById("row19-col5").value);
        let debitoOutros1 = Number(document.getElementById("row19-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row19-col7").value);
        let estiloFinal = document.getElementById("row19-col8");
        let resultadoPrecedente = Number(document.getElementById("row18-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row19-col8").value = resultadoFinal;
    
    }

    function row19(){
        let credito1 = Number(document.getElementById("row20-col3").value);
        let debito1 = Number(document.getElementById("row20-col4").value);
        let creditoOutros1 = Number(document.getElementById("row20-col5").value);
        let debitoOutros1 = Number(document.getElementById("row20-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row20-col7").value);
        let estiloFinal = document.getElementById("row20-col8");
        let resultadoPrecedente = Number(document.getElementById("row19-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row20-col8").value = resultadoFinal;
    
    }







    row1();
    row2();
    row3();
    row4();
    row5();
    row6();
    row7();
    row8();
    row9();
    row10();
    row11();
    row12();
    row13();
    row14();
    row15();
    row16();
    row17();
    row18();
    row19();
    

}






document.body.addEventListener("mousemove",calculo)






