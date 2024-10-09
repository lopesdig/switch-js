let vitorias = 100;
let derrotas = 5;
let nivel;

function calcularVitoria(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldoVitorias = calcularVitoria(vitorias, derrotas); 

saldoFinal = true;

switch (saldoFinal) {
 case (saldoVitorias < 10):
 nivel = "Ferro";
 break;
 
 case (saldoVitorias >= 11 && saldoVitorias <= 20):
 nivel = "Bronze";
 break;
 
 case (saldoVitorias >= 21 && saldoVitorias <= 50):
 nivel = "Prata";
 break;
 
 case (saldoVitorias >= 51 && saldoVitorias <= 80):
 nivel = "Ouro";
 break;
 
 case (saldoVitorias >= 81 && saldoVitorias <= 90):
 nivel = "Diamante";
 break;
 
 case (saldoVitorias >= 91 && saldoVitorias <= 101):
 nivel = "Lendário";
 break;
 
  
 default: 
 nivel = "Imortal";
 }
 
 console.log("O Herói tem de saldo " + saldoVitorias + " está no nível " + nivel )
 
 
 
 
 