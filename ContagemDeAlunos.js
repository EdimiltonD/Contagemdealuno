let listaAlunos = ["Vinicius" , "Gustavo" , "Aline" , " Felipe" , "Edson"]

for (let numero = 0; numero <listaAlunos.length; numero++) {
    console.log(numero)
    if(numero == 0){
        console.log("0 numero eh zero")
    } else if (numero % 2 == 0) {
        console.log(`O numero ${numero} eh Par`)

    } else if (numero % 2 == 1){
        console.log(`O numero ${numero} eh impar`)
    }
}