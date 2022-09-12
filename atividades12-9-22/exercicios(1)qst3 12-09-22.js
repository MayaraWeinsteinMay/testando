/*3) Desenvolva um sistema em que:
Leia 4 (quatro) números;
Calcule o quadrado de cada um;
Se o valor resultante do quadrado do terceiro for <= 1000, imprima-o e finalize;
Caso contrário, imprima os valores lidos e seus respectivos quadrados. */

let n1,n2, n3, n4, q1,q2,q3,q4 

n1= prompt("escreva um número: ")
n2= prompt("escreva um número: ")
n3= prompt("escreva um número: ")
n4= prompt("escreva um número: ")
q1= n1*n1
q2= n2*n2
q3= n3*n3
q4= n4*n4

if(q3>=1000){
  alert("muito beo quadrado so seu número é " + q3)
} else{
   alert(" O quadrado de" + n1 + "é " + q1 + "\nO quadrado de" + n2 + "é "+q2 +"\nO quadrado de" + n3 + "é "+ q3 +"\nO quadrado de" + n4+ "é "+ q4); 
}
