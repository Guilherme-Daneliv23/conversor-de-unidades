const valor = document.getElementById("valor");
const unidades = document.getElementById("unidade");
const converter = document.getElementById("converter");
const conversoes = document.querySelectorAll('[data-unidades]');
console.log(conversoes);

const valoresFixos = new Array  (
    `1`,
    `10`,
    `100`,
    `1000`,
    `10000`,
    `100000`,
    `1000000`
);

console.log(valoresFixos);


converter.addEventListener('click', () => {
    // console.log(valor.value);
    // console.log(unidades.value);
    const numero = valor.value;
    const unidade = unidades.value;
    let retorno = 0;
    if(unidade === 'mm')    {
        retorno = numero;
    }
    if(unidade === 'cm')    {
        retorno = numero * 10;
    }
    if(unidade === 'dm')    {
        retorno = numero * 100;
    }
    if(unidade === 'm')    {
        retorno = numero * 1000;
    }
    if(unidade === 'dam')    {
        retorno = numero * 10000;
    }
    if(unidade === 'hm')    {
        retorno = numero * 100000;
    }
    if(unidade === 'km')    {
        retorno = numero * 1000000;
    }
    // console.log(retorno);
    converteTotal(retorno);
});

function converteTotal (x)    {
    for(let i = 0; i < 7; i++)  {
        conversoes[i].value = x / valoresFixos[i];
        
    }
}



