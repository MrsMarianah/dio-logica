let nomeHeroi = "Mari";

// if, else if
let xpHeroi = 2000;
let nivelHeroi 

if (xpHeroi < 1000){
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1000 && xpHeroi < 3000){ 
     nivelHeroi = "Bronze";
} else if (xpHeroi >= 3000 && xpHeroi < 6000){ 
     nivelHeroi = "Prata";
} else if (xpHeroi >= 6000 && xpHeroi < 9000){ 
     nivelHeroi = "Ouro";
} else if (xpHeroi >= 9000 && xpHeroi < 12000){
     nivelHeroi = "Platina";
} else if (xpHeroi >= 12000 && xpHeroi < 15000){
     nivelHeroi = "Diamante";
} else if (xpHeroi >= 15000 && xpHeroi < 18000){
     nivelHeroi = "Ascendente";
} else if (xpHeroi >= 18000 && xpHeroi < 21000){
     nivelHeroi = "Imortal";
}else if (xpHeroi >= 21000){
    nivelHeroi = "Radiante";
}
 
let mensagem = "O herói de nome "+ nomeHeroi +" está no nível de " + nivelHeroi + "!"
console.log(mensagem)
