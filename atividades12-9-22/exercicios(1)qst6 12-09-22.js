/*6) Elabore um sistema que dada a idade de um nadador classifique-o em uma das seguintes
categorias:
Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos*/ 

let idade

idade= prompt("Qual a sua idade? ")

if (idade>=5 &&  idade<=7) {
    alert("Infantil A");
}  else if (idade>=8 && idade<=11){
    alert(" infantil B");
} else if (idade>=12 && idade<=13){
    alert(" Juvenil A") 
} else if (idade>=14 && idade<=17) {
    alert(" Juvenil B")
}  else {
    alert("Adultos");
}
