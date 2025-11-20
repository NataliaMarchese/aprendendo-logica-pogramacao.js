const botao = document.querySelector('#btn')

function chamaFuncao(){
    alert ('Olá')
    segundaFuncao()
    terceiraFuncao()
    quartaFuncao()
    quintaFuncao()
}

function segundaFuncao(){
    alert("Segunda Função Chamada")
}

function terceiraFuncao(){
    alert ("Terceira Função Chamada")
}

function quartaFuncao(){
    alert ("Quarta Função Chamada")
}

function quintaFuncao(){
    alert ("Quinta Função Chamada")
}

botao.addEventListener('click' , chamaFuncao)

