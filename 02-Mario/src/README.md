# 🏎️ Mario Kart Mini Game (Corrida Aleatória)

Este é um mini jogo de corrida inspirado no universo de Mario Kart, desenvolvido em **JavaScript** com uso de **Programação Orientada a Objetos (POO)**.

## 📌 Descrição

Dois personagens disputam uma corrida em uma pista aleatória composta por 5 rodadas. A cada rodada, o tipo de trecho da pista (reta, curva ou confronto) influencia qual atributo do personagem será usado para calcular a pontuação da rodada.

### ⚙️ Regras do Jogo

- A corrida é composta por **5 rodadas**.
- A cada rodada, é sorteado um dos três tipos de pista:
  - `RETA`: cada jogador rola um dado (1-6) e soma com seu atributo **velocidade**.
  - `CURVA`: cada jogador rola um dado e soma com sua **manobrabilidade**.
  - `CONFRONTO`: cada jogador rola um dado e soma com seu **poder**. O perdedor perde 1 ponto (mínimo 0).
- Ao final da corrida, quem tiver mais pontos vence.
- Empates são possíveis.

## 🧠 Conceitos de POO Aplicados

O jogo é estruturado com as seguintes classes:

### `Jogador`
- Atributos: `nome`, `velocidade`, `manobrabilidade`, `poder`, `pontos`
- Métodos:
  - `addPontos()`: adiciona 1 ponto
  - `removerPontos()`: remove 1 ponto (sem deixar negativo)
  - `pegarStatus()`: retorna a pontuação atual

### `Dado`
- Método estático:
  - `rolar()`: retorna um número aleatório entre 1 e 6

### `Pista`
- Método estático:
  - `sortear()`: retorna um dos três tipos de pista aleatoriamente

### `Corrida`
- Organiza a lógica do jogo e executa as rodadas entre dois jogadores
- Métodos:
  - `start()`: inicia a corrida e processa as rodadas
  - `ganhador()`: declara o vencedor com base nos pontos acumulados

## 👾 Personagens disponíveis

- **Mario**: Vel 4, Man 3, Pod 3
- **Bowser**: Vel 5, Man 2, Pod 5
- **Peach**: Vel 3, Man 4, Pod 2
- **Luigi**: Vel 3, Man 4, Pod 4
- **Yoshi**: Vel 2, Man 4, Pod 3
- **Donkey Kong**: Vel 2, Man 2, Pod 5

