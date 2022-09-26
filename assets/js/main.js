// ---- Selecionando elementos do HTML ----
const valor = document.getElementById("valor");
const unidades = document.getElementById("unidade");
const converter = document.getElementById("converter");
const conversoes = document.querySelectorAll('[data-conversores]');
// console.log(conversoes);



// ---- Atribuindo Arrays usados na conversão ----
const valoresFixos = new Array  (
    `1`,
    `10`,
    `100`,
    `1000`,
    `10000`,
    `100000`,
    `1000000`
);

const unidadesFixas = new Array (
    `mm`,
    `cm`,
    `dm`,
    `m`,
    `dam`,
    `hm`,
    `km`
)

// console.log(valoresFixos);


// ---- Executando função de click a qual efetuará os calculos ---- 
converter.addEventListener('click', () => {
    // console.log(valor.value);
    // console.log(unidades.value);
    // console.log(retorno);
    
    converteParcial();
});


// ---- Função que realiza a conversão parcial para nivelar as unidades ----
function converteParcial()  {
    const numero = valor.value;
    const unidade = unidades.value;
    let retorno = 0;

    for(let i = 0; i < 7; i++)  {
        if(unidade === unidadesFixas[i])    {
            retorno = numero * valoresFixos[i];
        }
    }

    converteTotal(retorno);
}


// ---- Função que realiza a conversão final após o nivelamento das unidades
function converteTotal (x)    {
    for(let i = 0; i < 7; i++)  {
        conversoes[i].value = x / valoresFixos[i];
        
    }
}





















// -------------------- Código antigo --------------------------------


// const valor = document.getElementById("valor");
// const unidades = document.getElementById("unidade");
// const converter = document.getElementById("converter");
// const conversoes = document.querySelectorAll('[data-unidades]');
// console.log(conversoes);

// const valoresFixos = new Array  (
//     `1`,
//     `10`,
//     `100`,
//     `1000`,
//     `10000`,
//     `100000`,
//     `1000000`
// );

// console.log(valoresFixos);


// converter.addEventListener('click', () => {
//     // console.log(valor.value);
//     // console.log(unidades.value);
//     const numero = valor.value;
//     const unidade = unidades.value;
//     let retorno = 0;
//     if(unidade === 'mm')    {
//         retorno = numero;
//     }
//     if(unidade === 'cm')    {
//         retorno = numero * 10;
//     }
//     if(unidade === 'dm')    {
//         retorno = numero * 100;
//     }
//     if(unidade === 'm')    {
//         retorno = numero * 1000;
//     }
//     if(unidade === 'dam')    {
//         retorno = numero * 10000;
//     }
//     if(unidade === 'hm')    {
//         retorno = numero * 100000;
//     }
//     if(unidade === 'km')    {
//         retorno = numero * 1000000;
//     }
//     // console.log(retorno);
//     converteTotal(retorno);
// });

// function converteTotal (x)    {
//     for(let i = 0; i < 7; i++)  {
//         conversoes[i].value = x / valoresFixos[i];
        
//     }
// }




