function corrigir(){
    document.querySelector(".hide").style.display = "block";

    let acertos = 0;
    let percent = 0;
    let erros = 5;

    let name = document.getElementById("texto").value;
    document.getElementById("nome").innerHTML = ("Aluno: " + name);

    // primeira questão
    let Q1 = document.getElementById("Q01").value;
    if (Q1 == "informática") {
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // segunda questão
    let Q2 = document.getElementById("Q02").value;
    let sla1 = Q2.includes("informática");
    let sla2 = Q2.includes("administração");
    let sla3 = Q2.includes("enfermagem");
    if (sla1 && sla2 && sla3){
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // terceira questão
    if (document.getElementById('check2').checked && document.getElementById('check4').checked) {
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // quarta questão
    if (document.getElementById("con").checked){
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // quinta questão
    if (document.getElementById("ver").checked){
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // resultado
    document.getElementById("corretas").innerHTML = ("Acertou: " + acertos + " de 5");
    document.getElementById("percentual").innerHTML = ("Percentual: " + percent + "%");
    document.getElementById("erros").innerHTML = ("Errou: " + erros + " de 5");

}


     function corrigir() {
     let acertos = 0;

     let nom = document.getElementById('texto').value;
     let resum = document.getElementById('resumo');
     resum.classList.remove('hide');
     document.getElementById('nome').innerHTML = 'Nome: '+nom;

     let q01 = document.getElementById('Q01').value;
     if (q01 == 'informatica') {
         acertos += 1;
     }

     let q02 = document.getElementById('Q02').value;
     let regex01 = q02.includes('Informática');
     let regex02 = q02.includes('Administração');
     let regex03 = q02.includes('Enfermagem');
     if (regex01 && regex02 && regex03) {
         acertos += 1;
   }

     if (document.getElementById('check2').checked && document.getElementById('check4').checked) {
         acertos += 1;
     }

     if (document.getElementById('con').checked) {
         acertos += 1;
     }

     if (document.getElementById('ver').checked) {
         acertos += 1;
     }

     document.getElementById('corretas').innerHTML ='Acertos: '+acertos+' de 5';
     let max = 5;
     let percent = (acertos / max) * 100;
     document.getElementById('percentual').innerHTML ='Sua porcentagem de acertos: '+percent+'%';
 }





     let name = document.getElementById("texto").value;
     document.getElementById("nome").innerHTML = ("Aluno: " + name);
    
     let acertos = 0;
     let percent = 0;
     let segQuest = 0;

     // primeira questão
    
     // segunda questão
     let camTextAre = document.getElementById("Q02").value;
     if (camTextAre.includes("informática","enfermagem","administração")){
         acertos += 1;
         percent += 20;
     } else {
         acertos += 0;
         percent += 0;
     }
     // terceira questão
     let sisOc = document.getElementById("check1");
     let sisBin = document.getElementById("check2");
     let sisDec = document.getElementById("check3");
     let sisHex = document.getElementById("check4");

     if (sisOc.checked){
         segQuest += 0;
     } if (sisBin.checked){
         segQuest += 1;
     } if (sisDec.checked){
         segQuest += 0;
     } if (sisHex.checked){
         segQuest += 1;
     } 

     if (segQuest = 2){
         acertos += 1;
         percent += 20;
     } else {
    
     }
     // quarta questão
     if(document.getElementById("iso").checked){
      acertos += 0;
         percent += 0;
     } if(document.getElementById("con").checked){
         acertos += 1;
         percent += 20;
     } if(document.getElementById("alc").checked){
         acertos += 0;
         percent += 0;
     } if (document.getElementById("agu").checked){
         acertos += 0;
         percent += 0;
     }
     // quinta questão
     if (document.getElementById("ver").checked){
         acertos += 1;
         percent += 20;
     } if (document.getElementById("fal").checked){
         acertos += 0;
         percent += 0;
     }
     {

 document.getElementById("corretas").innerHTML = ("Acertou: " + acertos + " de 5");
 document.getElementById("percentual").innerHTML = ("Percentual: " + percent + "%");
 }