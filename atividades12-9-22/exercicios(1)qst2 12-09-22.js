/*2) Elabore um sistema que leia as variáveis C e N, respectivamente código e número de
horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00
por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento
armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
excedente.*/

let codigo, horat, salario, horaex, exc, salarioT
  
codigo = prompt("Qual o seu código? ")
horat = prompt(" Quantidade de hora trabalhada? ") 

salario = 500
horaex = horat-50 
exc= horaex * 20
salarioT = salario + exc 

if(horat >50 ) {
    alert(" Você receberá de horas excedentes :" +"R$"+ exc + "\n Valor total a ser recebido: " +"R$"+ 
    salarioT );
}     else { 
    alert("Não houve horas excedetes de trabalho.");
    
    
}
