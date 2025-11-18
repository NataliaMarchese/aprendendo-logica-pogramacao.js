let nota1 = Number(prompt("Digite a primeira nota"))
let nota2 = Number(prompt("Digite a primeira nota"))
let nota3 = Number(prompt("Digite a primeira nota"))
let nota4 = Number(prompt("Digite a primeira nota"))

let soma = nota1 + nota2 + nota3 + nota4
let media = soma / 4

alert(`A média do aluno é ${media}`)



if (media >= 8) {
    alert("Você foi aprovado!")

}
else {
    alert("Você foi reprovado!")

}