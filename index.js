// 1 ==> Todos os produtos acima de R$30,00 terá desconto de 10%.
// 2 ==> Comparar valor com desconto e sem desconto.

// Passo a passo:
// verificar todos os numeros para ver qual é maior que 30 --->> CONCLUÍDA
// saber quanto que da 10% do numero --->> CONCLUÍDA
// fazer a conta de subtração com o numero original e os 10% do numero --->> CONCLUÍDA

const products = [50, 20, 140, 300, 53, 92, 30]

let finalValue = 0
let startValue = 0
let desconto = 10

const calDiscount = (price, discount) => {          // calcular o desconto
    const result = (price * discount) / 100
    return result
}

products.forEach(value => {          // mostra o quanto a compra daria sem o desconto
        startValue += value 
    });

    products.forEach(value => {          // faz a conta da compra com desconto e mostra quanto ficou
        if (value > 30) {
            const discount = calDiscount (value, desconto)
            finalValue += (value - discount)
    } else {
        finalValue += value
    }
});

let diference = startValue - finalValue          // calcular a diferença entre os dois valores

console.log(`O valor final de sua compra foi R$${startValue}, comprando agora você terá desconto de ${desconto}% e irá pagar apenas R$${finalValue}, economia de R$${diference}`)