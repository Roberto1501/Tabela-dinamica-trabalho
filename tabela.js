
function apagar(){
    localStorage.clear();
    location.reload();
}


let titulo2 = document.getElementById("container-titulo")
let mes2 = ""
let ano2 = ""

function buttonClick(){
    
    
     titulo2 = document.getElementById("container-titulo")
     mes2 = prompt("digite o mês")
     ano2 = prompt("digite o ano")
    
    titulo2.innerHTML = "MOVIMENTO DE CAIXA  " + mes2 + "/" + ano2 + " FOOD ITALIA"
    localStorage.setItem("divContent", JSON.stringify(titulo2.innerHTML));
    
    
    switch(mes2){
        case "JAN":
            
            const inputs = document.querySelectorAll(".data");
            inputs.forEach(input => {
                const currentPlaceholder = input.placeholder;
                input.placeholder = currentPlaceholder + "/01";
                
              });
             
              

            break;

            case "FEV":
            const inputs1 = document.querySelectorAll(".data");
            inputs1.forEach(inputs1 => {
                const currentPlaceholder = inputs1.placeholder;
                inputs1.placeholder = currentPlaceholder + "/02";
              });
              

              

            break;

            case "MAR":
                const inputs2 = document.querySelectorAll(".data");
                inputs2.forEach(inputs2 => {
                    const currentPlaceholder = inputs2.placeholder;
                    inputs2.placeholder = currentPlaceholder + "/03";
                  });
                  
    
                  
    
                break;

                case "ABR":
                const inputs3 = document.querySelectorAll(".data");
                inputs3.forEach(inputs3 => {
                    const currentPlaceholder = inputs3.placeholder;
                    inputs3.placeholder = currentPlaceholder + "/04";
                  });
                  
    
                  
    
                break;


                case "MAI":
                const inputs4 = document.querySelectorAll(".data");
                inputs4.forEach(inputs4 => {
                    const currentPlaceholder = inputs4.placeholder;
                    inputs4.placeholder = currentPlaceholder + "/05";
                  });
                  
    
                  
    
                break;

                case "JUN":
                    const inputs5 = document.querySelectorAll(".data");
                    inputs5.forEach(inputs5 => {
                        const currentPlaceholder = inputs5.placeholder;
                        inputs5.placeholder = currentPlaceholder + "/06";
                      });
                      
        
                      
        
                    break;

                    case "JUL":
                        const inputs6 = document.querySelectorAll(".data");
                        inputs6.forEach(inputs6 => {
                            const currentPlaceholder = inputs6.placeholder;
                            inputs6.placeholder = currentPlaceholder + "/07";
                          });
                          
            
                          
            
                        break;

                        case "AGO":
                        const inputs7 = document.querySelectorAll(".data");
                        inputs7.forEach(inputs7 => {
                            const currentPlaceholder = inputs7.placeholder;
                            inputs7.placeholder = currentPlaceholder + "/08";
                          });
                          
            
                          
            
                        break;

                        case "SET":
                        const inputs8 = document.querySelectorAll(".data");
                        inputs8.forEach(inputs8 => {
                            const currentPlaceholder = inputs8.placeholder;
                            inputs8.placeholder = currentPlaceholder + "/09";
                          });
                          
            
                          
            
                        break;

                        case "OUT":
                        const inputs9 = document.querySelectorAll(".data");
                        inputs9.forEach(inputs9 => {
                            const currentPlaceholder = inputs9.placeholder;
                            inputs9.placeholder = currentPlaceholder + "/10";
                          });
                          
            
                          
            
                        break;


                        case "NOV":
                        const inputs10 = document.querySelectorAll(".data");
                        inputs10.forEach(inputs10 => {
                            const currentPlaceholder = inputs10.placeholder;
                            inputs10.placeholder = currentPlaceholder + "/11";
                          });
                          
            
                          
            
                        break;


                    

                            case "DEZ":
                                const inputs12 = document.querySelectorAll(".data");
                                inputs12.forEach(inputs12 => {
                                    const currentPlaceholder = inputs12.placeholder;
                                    inputs12.placeholder = currentPlaceholder + "/12";
                                  });
                                  
                    
                                  
                    
                                break;   

                                default:
                                    alert("Digite um mês correto")

                                    break;



                        
  
    }
    
}
let titulo = document.getElementById("container-titulo")
let mes = ""
let ano = ""

function buttonClickDarco(){
    
     
     mes = prompt("digite o mês")
     ano = prompt("digite o ano")
    
     titulo.innerHTML = "MOVIMENTO DE CAIXA "  + mes + "/" + ano + " DARCO INVESTIMENTOS"
     localStorage.setItem("divContent", JSON.stringify(titulo.innerHTML));


     switch(mes){
        case "JAN":
            
            const inputs = document.querySelectorAll(".data");
            inputs.forEach(input => {
                const currentPlaceholder = input.placeholder;
                input.placeholder = currentPlaceholder + "/01";
                
              });
             
              

            break;

            case "FEV":
            const inputs1 = document.querySelectorAll(".data");
            inputs1.forEach(inputs1 => {
                const currentPlaceholder = inputs1.placeholder;
                inputs1.placeholder = currentPlaceholder + "/02";
              });
              

              

            break;

            case "MAR":
                const inputs2 = document.querySelectorAll(".data");
                inputs2.forEach(inputs2 => {
                    const currentPlaceholder = inputs2.placeholder;
                    inputs2.placeholder = currentPlaceholder + "/03";
                  });
                  
    
                  
    
                break;

                case "ABR":
                const inputs3 = document.querySelectorAll(".data");
                inputs3.forEach(inputs3 => {
                    const currentPlaceholder = inputs3.placeholder;
                    inputs3.placeholder = currentPlaceholder + "/04";
                  });
                  
    
                  
    
                break;


                case "MAI":
                const inputs4 = document.querySelectorAll(".data");
                inputs4.forEach(inputs4 => {
                    const currentPlaceholder = inputs4.placeholder;
                    inputs4.placeholder = currentPlaceholder + "/05";
                  });
                  
    
                  
    
                break;

                case "JUN":
                    const inputs5 = document.querySelectorAll(".data");
                    inputs5.forEach(inputs5 => {
                        const currentPlaceholder = inputs5.placeholder;
                        inputs5.placeholder = currentPlaceholder + "/06";
                      });
                      
        
                      
        
                    break;

                    case "JUL":
                        const inputs6 = document.querySelectorAll(".data");
                        inputs6.forEach(inputs6 => {
                            const currentPlaceholder = inputs6.placeholder;
                            inputs6.placeholder = currentPlaceholder + "/07";
                          });
                          
            
                          
            
                        break;

                        case "AGO":
                        const inputs7 = document.querySelectorAll(".data");
                        inputs7.forEach(inputs7 => {
                            const currentPlaceholder = inputs7.placeholder;
                            inputs7.placeholder = currentPlaceholder + "/08";
                          });
                          
            
                          
            
                        break;

                        case "SET":
                        const inputs8 = document.querySelectorAll(".data");
                        inputs8.forEach(inputs8 => {
                            const currentPlaceholder = inputs8.placeholder;
                            inputs8.placeholder = currentPlaceholder + "/09";
                          });
                          
            
                          
            
                        break;

                        case "OUT":
                        const inputs9 = document.querySelectorAll(".data");
                        inputs9.forEach(inputs9 => {
                            const currentPlaceholder = inputs9.placeholder;
                            inputs9.placeholder = currentPlaceholder + "/10";
                          });
                          
            
                          
            
                        break;


                        case "NOV":
                        const inputs10 = document.querySelectorAll(".data");
                        inputs10.forEach(inputs10 => {
                            const currentPlaceholder = inputs10.placeholder;
                            inputs10.placeholder = currentPlaceholder + "/11";
                          });
                          
            
                          
            
                        break;


                    

                            case "DEZ":
                                const inputs12 = document.querySelectorAll(".data");
                                inputs12.forEach(inputs12 => {
                                    const currentPlaceholder = inputs12.placeholder;
                                    inputs12.placeholder = currentPlaceholder + "/12";
                                  });
                                  
                    
                                  
                    
                                break;   

                                default:
                                    alert("Digite um mês correto")

                                    break;



                        
  
    }
   
}





titulo.innerHTML = "MOVIMENTO DE CAIXA " + mes + "/" + ano + " DARCO INVESTIMENTOS"
// Wait for the page to finish loading
window.addEventListener("load", function() {
    

    // Get the inputs
    const inputs = document.querySelectorAll("input");
  
    // Get the div with id "container-titulo"
    const containerTitulo = document.getElementById("container-titulo");
  
    // Load the saved input data from local storage
    const savedInputData = JSON.parse(localStorage.getItem("inputData")) || [];
  
    // Load the saved div content from local storage
    const savedDivContent = localStorage.getItem("divContent") || "";
  
    // Update the inputs with the saved data
    inputs.forEach((input, index) => {
      input.value = savedInputData[index] || "";
    });
  
    // Update the div with the saved content
    containerTitulo.innerHTML = savedDivContent;
  
    // Listen for changes to the inputs
    inputs.forEach(input => {
      input.addEventListener("change", function() {
        // Update the other inputs with the new value
        inputs.forEach((otherInput, index) => {
          if (input !== otherInput) {
            otherInput.value = savedInputData[index] || "";
          } else {
            savedInputData[index] = input.value;
          }
        });
  
        // Save the updated input data in local storage
        localStorage.setItem("inputData", JSON.stringify(savedInputData));
        
      });
    });
  
     });
  
  
  






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


    function row20(){
        let credito1 = Number(document.getElementById("row21-col3").value);
        let debito1 = Number(document.getElementById("row21-col4").value);
        let creditoOutros1 = Number(document.getElementById("row21-col5").value);
        let debitoOutros1 = Number(document.getElementById("row21-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row21-col7").value);
        let estiloFinal = document.getElementById("row21-col8");
        let resultadoPrecedente = Number(document.getElementById("row20-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row21-col8").value = resultadoFinal;
    
    }

    function row21(){
        let credito1 = Number(document.getElementById("row22-col3").value);
        let debito1 = Number(document.getElementById("row22-col4").value);
        let creditoOutros1 = Number(document.getElementById("row22-col5").value);
        let debitoOutros1 = Number(document.getElementById("row22-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row22-col7").value);
        let estiloFinal = document.getElementById("row22-col8");
        let resultadoPrecedente = Number(document.getElementById("row21-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row22-col8").value = resultadoFinal;
    
    }


    function row22(){
        let credito1 = Number(document.getElementById("row23-col3").value);
        let debito1 = Number(document.getElementById("row23-col4").value);
        let creditoOutros1 = Number(document.getElementById("row23-col5").value);
        let debitoOutros1 = Number(document.getElementById("row23-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row23-col7").value);
        let estiloFinal = document.getElementById("row23-col8");
        let resultadoPrecedente = Number(document.getElementById("row22-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row23-col8").value = resultadoFinal;
    
    }


    function row23(){
        let credito1 = Number(document.getElementById("row24-col3").value);
        let debito1 = Number(document.getElementById("row24-col4").value);
        let creditoOutros1 = Number(document.getElementById("row24-col5").value);
        let debitoOutros1 = Number(document.getElementById("row24-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row24-col7").value);
        let estiloFinal = document.getElementById("row24-col8");
        let resultadoPrecedente = Number(document.getElementById("row23-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row24-col8").value = resultadoFinal;
    
    }

    function row24(){
        let credito1 = Number(document.getElementById("row25-col3").value);
        let debito1 = Number(document.getElementById("row25-col4").value);
        let creditoOutros1 = Number(document.getElementById("row25-col5").value);
        let debitoOutros1 = Number(document.getElementById("row25-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row25-col7").value);
        let estiloFinal = document.getElementById("row25-col8");
        let resultadoPrecedente = Number(document.getElementById("row24-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row25-col8").value = resultadoFinal;
    
    }

    function row25(){
        let credito1 = Number(document.getElementById("row26-col3").value);
        let debito1 = Number(document.getElementById("row26-col4").value);
        let creditoOutros1 = Number(document.getElementById("row26-col5").value);
        let debitoOutros1 = Number(document.getElementById("row26-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row26-col7").value);
        let estiloFinal = document.getElementById("row26-col8");
        let resultadoPrecedente = Number(document.getElementById("row25-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row26-col8").value = resultadoFinal;
    
    }

    function row26(){
        let credito1 = Number(document.getElementById("row27-col3").value);
        let debito1 = Number(document.getElementById("row27-col4").value);
        let creditoOutros1 = Number(document.getElementById("row27-col5").value);
        let debitoOutros1 = Number(document.getElementById("row27-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row27-col7").value);
        let estiloFinal = document.getElementById("row27-col8");
        let resultadoPrecedente = Number(document.getElementById("row26-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row27-col8").value = resultadoFinal;
    
    }

    function row27(){
        let credito1 = Number(document.getElementById("row28-col3").value);
        let debito1 = Number(document.getElementById("row28-col4").value);
        let creditoOutros1 = Number(document.getElementById("row28-col5").value);
        let debitoOutros1 = Number(document.getElementById("row28-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row28-col7").value);
        let estiloFinal = document.getElementById("row28-col8");
        let resultadoPrecedente = Number(document.getElementById("row27-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row28-col8").value = resultadoFinal;
    
    }


    function row28(){
        let credito1 = Number(document.getElementById("row29-col3").value);
        let debito1 = Number(document.getElementById("row29-col4").value);
        let creditoOutros1 = Number(document.getElementById("row29-col5").value);
        let debitoOutros1 = Number(document.getElementById("row29-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row29-col7").value);
        let estiloFinal = document.getElementById("row29-col8");
        let resultadoPrecedente = Number(document.getElementById("row28-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row29-col8").value = resultadoFinal;
    
    }

    function row29(){
        let credito1 = Number(document.getElementById("row30-col3").value);
        let debito1 = Number(document.getElementById("row30-col4").value);
        let creditoOutros1 = Number(document.getElementById("row30-col5").value);
        let debitoOutros1 = Number(document.getElementById("row30-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row30-col7").value);
        let estiloFinal = document.getElementById("row30-col8");
        let resultadoPrecedente = Number(document.getElementById("row29-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row30-col8").value = resultadoFinal;
    
    }


    function row30(){
        let credito1 = Number(document.getElementById("row31-col3").value);
        let debito1 = Number(document.getElementById("row31-col4").value);
        let creditoOutros1 = Number(document.getElementById("row31-col5").value);
        let debitoOutros1 = Number(document.getElementById("row31-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row31-col7").value);
        let estiloFinal = document.getElementById("row31-col8");
        let resultadoPrecedente = Number(document.getElementById("row30-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row31-col8").value = resultadoFinal;
    
    }

    function row31(){
        let credito1 = Number(document.getElementById("row32-col3").value);
        let debito1 = Number(document.getElementById("row32-col4").value);
        let creditoOutros1 = Number(document.getElementById("row32-col5").value);
        let debitoOutros1 = Number(document.getElementById("row32-col6").value);
        let FeirasDeb1 = Number(document.getElementById("row32-col7").value);
        let estiloFinal = document.getElementById("row32-col8");
        let resultadoPrecedente = Number(document.getElementById("row31-col8").value);
        let resultadoParcial = (credito1+creditoOutros1)-(debito1+debitoOutros1+FeirasDeb1);
        let resultadoFinal = Number(resultadoPrecedente + resultadoParcial);
        if(resultadoFinal<0){
            estiloFinal.style.color = "red";
        }
        else{
            estiloFinal.style.color = "black";
        }
        document.getElementById("row32-col8").value = resultadoFinal;
    
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
    row20();
    row21();
    row22();
    row23();
    row24();
    row25();
    row26();
    row27();
    row28();
    row29();
    row30();
    row31();
    

}






document.body.addEventListener("mousemove",calculo)






