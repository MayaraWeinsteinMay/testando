/*5) A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
medido e emita a notificação adequada aos diferentes grupos de empresas.*/

let x 

x= prompt("Qual o seu indice de poluição? ");

if(x>=0.05 && x<=0.25){
    alert("Seu índice está aceitável");
} else if (x>= 0.25 && x<= 0.3){
    alert(" Seu índice não está aceitavél, suspendam suas atividades ");
} else if ( x>= 0.27 && x<= 0.4){
    alert ("Se você faz parte do 1º grupo,suspendam suas atividades, seu índice não está aceitavél ")
} else{
    alert("Se você faz parte do 1º e 2º grupo, vocês estão, nesse momento sendo notificados a suspenderem as suas atividades, seu índice não está aceitavél")
}