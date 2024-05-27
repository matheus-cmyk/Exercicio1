function calcLitros(precoLtr, valorAbast) {
    const quantLitros = valorAbast / precoLtr 

    return quantLitros
}




const precoLtr = parseFloat(prompt("Digite o preço do combustível: "))

const valorAbast = parseFloat(prompt("Digite o valor em reais que deseja abastecer: "))

const quantLitros = calcLitros(precoLtr,valorAbast) 



alert(`Você abasteceu ${quantLitros.toFixed(2)} litros de gasolina `)    