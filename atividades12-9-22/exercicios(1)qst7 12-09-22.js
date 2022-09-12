/*7) Receber valores de base e altura de um triângulo e verificar se são valores válidos
(positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.*/

let altura, base, area;

altura = prompt ("Informe a altura do triângulo");
base = prompt ("Informe a base do triangulo");
area = base * altura /2 

if(altura>0 && base>0 ){
    alert(area)
    } else {
        ("Seu número não é")    
    }