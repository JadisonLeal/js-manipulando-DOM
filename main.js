// const subtrair = document.querySelector("#subtrair");    // id="subtrair" 
// const somar = document.querySelector("#somar");          // id="somar"
// const braco = document.querySelector("#braco");          // id="braco"

// somar.addEventListener("click", (evento) => {
//     braco.value = parseInt(braco.value) + 1;
// })

// subtrair.addEventListener("click", (evento) => {
//     braco.value = parseInt(braco.value) -1;
// })












// const controle = document.querySelectorAll(".controle-ajuste");

// controle.forEach( (elemento) => {
//     elemento.addEventListener("click", (evento) => {
//         manipulaDados(evento.target.textContent, evento.target.parentNode);
//     })
// })

// function manipulaDados(operacao, controle) {
//     const peca = controle.querySelector(".controle-contador");

//     if(operacao === "-") {
//         peca.value = parseInt(peca.value) - 1;
//     } else {
//         peca.value = parseInt(peca.value) + 1;
//     }
// }








//////// USANDO DATA ATRIBUTES NO LUGAR DAS CLASSES

// const controle = document.querySelectorAll("[data-controle]");

// controle.forEach((elemento) => {
//     elemento.addEventListener((evento) => {
//         manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
//     })
// })

// function manipulaDados(operacao, controle) {
//     const peca = controle.querySelector("[data-contador]")

//     if(operacao === "-") {
//         peca.value = parseInt(peca.value) -1;
//     } else {
//         peca.value = parseInt(peca.value) +1;
//     }
// }









const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    // console.log(pecas[peca]) 
   
    estatisticas.forEach( (elemento) => {
        // console.log(elemento.textContent)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        console.log(parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica])
        // console.log(pecas[peca][elemento.dataset.estatistica])
               
    })
}
