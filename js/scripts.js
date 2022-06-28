function calcular(operacion)
{
    var numero1=parseInt(document.getElementById('numero1').value);
    var numero3=parseFloat(document.getElementById('numero3').value);
    switch(operacion)
    {
        case 'calcular':
            document.getElementById('result').value=(numero1*200*numero3);
            break;        
    }
}







