document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value)/100;
    const time = document.getElementById('time').value;

    //Fórmula para calcular os juros compostos
    const total = value * (1+fee)**time;

    //Exibe o resultado
    document.getElementById('total').innerHTML = ("R$ "+total.toFixed(2).replace('.',','));
});

document.getElementById('clear').addEventListener('click', function(){
    //Limpar o campo de valor
    document.getElementById('value').value = '';

    //Limpar o campo de juros
    document.getElementById('fee').value = '';

    //Limpar o campo de tempo
    document.getElementById('time').value = '';

    //Limpar o campo de resultado
    document.getElementById('total').innerHTML = 'R$ 0,00';
});