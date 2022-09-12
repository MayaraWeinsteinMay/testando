/*1) João, homem de bem, comprou um microcomputador para controlar o rendimento diário
de seu trabalho. Toda vez que ele traz um peso de tomate maior que o estabelecido pelo
regulamento do estado de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo
excedente. João precisa que você faça um sistema que leia a variável P (peso de tomates) e
verifique se há excesso. Se houver, gravar na variável E (Excesso) e na variável M o valor
da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo
ZERO. */

let peso, excesso, multa

peso = prompt ("Quantos kg de tomate você comprou? ");

excesso = peso - 50 
multa = excesso* 4

if (peso >50 ){ 
    alert("excesso: " + excesso + "kg" +  "\nvalor a ser pago pelo excesso " + "R$" + multa );
} else{
    alert("Não houve excesso")
}
