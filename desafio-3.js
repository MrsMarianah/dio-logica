class heroiDaAventura{
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDeHeroi){
        this.nomeDoHeroi = nomeDoHeroi;
        this.idadeDoHeroi = idadeDoHeroi;
        this.tipoDeHeroi = tipoDeHeroi;
    }

    escolherTipo(){  
        let ataque;
    switch (this.tipoDeHeroi) {
        case "guerreiro":
            ataque = "espada";
            break
        case "mago":
            ataque = "magia";
            break
        case "monge":
            ataque = "artes marciais";
            break
        case "ninja":
            ataque = "shuriken";
            break
        default:
            ataque = "arma desconhecida"
            break
        }
    return ataque;
    }
    ler(){
        const ataque = this.escolherTipo();
        console.log(`O herói chamado ${this.nomeDoHeroi} que tem ${this.idadeDoHeroi} anos \n É um ${this.tipoDeHeroi} que ataca usando ${ataque}`);
    }
}
    
    let novoHeroi = new heroiDaAventura("Heitis", 19, "ninja");
    novoHeroi.ler()
