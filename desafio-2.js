let totalVit = rankedCalc (109,13)

console.log("O Herói tem saldo de " + totalVit + " vitórias e está no rank "+ rankedTier(totalVit))

function rankedCalc(vit,perd){
    let calc = vit - perd
    return calc
}

function rankedTier(totalVit){
    let tier 
    if (totalVit <= 10){
        tier = "Ferro"
    }else if (totalVit > 10 && totalVit <= 20){
        tier = "Bronze"
    }else if (totalVit > 20 && totalVit <= 50){
        tier = "Prata"
    }else if (totalVit > 50 && totalVit <= 80){
        tier = "Ouro"
    }else if (totalVit > 80 && totalVit <= 90){
        tier = "Diamante"
    }else if (totalVit > 90 && totalVit <= 100){
        tier = "Lendário"
    }else if (totalVit > 100){
        tier = "Imortal"
    }
return tier
}
