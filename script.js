let numero = document.querySelector('input#numero')
let lista = document.querySelector('select#flista') 
let resultado = document.getElementById('resultado')
let valores = []

function isNumero (num) {
    if (Number(num) >= 1 && Number(num) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(num, lista) {
    if (lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}


function inserirNumero() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)

    } else {
        window.alert("Valor inválido ou já inserido anteriormente. Por favor, insira outro número.")
    }

    numero.value = ''
    numero.focus()


}



function analisar() {
    if (valores.length == 0) {
        window.alert('Adicione valore antes de finalizar.')
    } else {
        let total = valores.length

        resultado.innerHTML += `<p>Foram inseridos ${total} números.</p>`
    }

}