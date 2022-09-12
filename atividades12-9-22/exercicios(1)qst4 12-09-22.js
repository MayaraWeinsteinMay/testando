/*4) Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
número é par ou ímpar, e se é positivo ou negativo.*/

let n , m;
n = prompt ("escreva um número")
m= (n%2)
if(m ==0){
    alert("seu número é par e positivo. " + n);
} if(m>0){
    alert("seu número é positivo " + n)
} else {
    alert("Seu número é negativo " + n)     
}