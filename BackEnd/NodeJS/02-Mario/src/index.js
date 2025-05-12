class Jogador {
    constructor(nome, velocidade, manobrabilidade, poder) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.manobrabilidade = manobrabilidade;
        this.poder = poder;
        this.pontos = 0;
    }

    addPontos() {
        this.pontos += 1;
    }

    removerPontos() {
        this.pontos = Math.max(0, this.pontos - 1);
    }

    pegarStatus() {
        return `${this.nome} tem ${this.pontos} pontos.`;
    }
}

class Dado {
    static rolar() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

class Pista {
    static sortear() {
        const tipos = ["RETA", "CURVA", "CONFRONTO"];
        return tipos[Math.floor(Math.random() * tipos.length)];
    }
}

class Corrida {
    constructor(jogador1, jogador2, rodadas = 5) {
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.rodadas = rodadas;
    }

    async start() {
        console.log(`🏁 Corrida entre ${this.jogador1.nome} e ${this.jogador2.nome} iniciada!`);

        for (let i = 1; i <= this.rodadas; i++) {
            console.log(`\n🔁 Rodada ${i}`);

            const tipo = Pista.sortear();
            const dado1 = Dado.rolar();
            const dado2 = Dado.rolar();
            let total1 = 0;
            let total2 = 0;

            console.log(`Pista: ${tipo}`);

            switch (tipo) {
                case "RETA":
                    total1 = dado1 + this.jogador1.velocidade;
                    total2 = dado2 + this.jogador2.velocidade;
                    break;
                case "CURVA":
                    total1 = dado1 + this.jogador1.manobrabilidade;
                    total2 = dado2 + this.jogador2.manobrabilidade;
                    break;
                case "CONFRONTO":
                    total1 = dado1 + this.jogador1.poder;
                    total2 = dado2 + this.jogador2.poder;
                    break;
            }

            console.log(`${this.jogador1.nome} rolou ${dado1} (total: ${total1})`);
            console.log(`${this.jogador2.nome} rolou ${dado2} (total: ${total2})`);

            if (tipo === "CONFRONTO") {
                if (total1 > total2) {
                    this.jogador2.removerPontos();
                    console.log(`${this.jogador1.nome} venceu o confronto!`);
                } else if (total2 > total1) {
                    this.jogador1.removerPontos();
                    console.log(`${this.jogador2.nome} venceu o confronto!`);
                } else {
                    console.log("Empate no confronto!");
                }
            } else {
                if (total1 > total2) {
                    this.jogador1.addPontos();
                    console.log(`${this.jogador1.nome} ganhou a rodada!`);
                } else if (total2 > total1) {
                    this.jogador2.addPontos();
                    console.log(`${this.jogador2.nome} ganhou a rodada!`);
                } else {
                    console.log("Empate na rodada!");
                }
            }

            console.log(this.jogador1.pegarStatus());
            console.log(this.jogador2.pegarStatus());
        }

        this.ganhador();
    }

    ganhador() {
        console.log("\n🏁 Corrida encerrada!");
        if (this.jogador1.pontos > this.jogador2.pontos) {
            console.log(`${this.jogador1.nome} venceu com ${this.jogador1.pontos} pontos!`);
        } else if (this.jogador2.pontos > this.jogador1.pontos) {
            console.log(`${this.jogador2.nome} venceu com ${this.jogador2.pontos} pontos!`);
        } else {
            console.log("A corrida terminou empatada!");
        }
    }
}

// Lista de personagens
const Personagens = [
    new Jogador("Mario", 4, 3, 3),
    new Jogador("Bowser", 5, 2, 5),
    new Jogador("Peach", 3, 4, 2),
    new Jogador("Luigi", 3, 4, 4),
    new Jogador("Yoshi", 2, 4, 3),
    new Jogador("Donkey Kong", 2, 2, 5)
];

// Executar corrida
(async () => {
    const player1 = Personagens[0];
    const player2 = Personagens[1];
    const corrida = new Corrida(player1, player2);
    await corrida.start();
})();
