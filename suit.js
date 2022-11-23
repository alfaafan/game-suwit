// variables
const playerBatu = document.getElementById(`player-batu`);
const playerKertas = document.getElementById(`player-kertas`);
const playerGunting = document.getElementById(`player-gunting`);
const comBatu = document.getElementById(`com-batu`);
const comKertas = document.getElementById(`com-kertas`);
const comGunting = document.getElementById(`com-gunting`);
const refresh = document.getElementById(`refresh`);

// class permainan
class Game {
  constructor() {
    this.playerName = "Player 1";
    this.computerName = "COM";
    this.playerOption;
    this.computerOption;
    this.winner = "";
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  get getComputerOption() {
    return this.computerOption;
  }

  set setComputerOption(option) {
    this.computerOption = option;
  }

  // com random choice
  comRandom() {
    let choices = ["batu", "kertas", "gunting"];
    let i = Math.floor(Math.random() * choices.length);
    return choices[i];
  }
}

function pickOption(params) {
  const game = new Game();
  game.setPlayerOption = params;
  console.log(game.getPlayerOption);
  console.log(`Kamu memilih ` + params);
}
