// variables
const refresh = document.getElementById(`refresh`);
const box = document.getElementById(`box`);
const info = document.getElementById(`info`);

// class permainan
class Game {
  constructor() {
    this.playerName = "Player 1";
    this.computerName = "COM";
    this.playerOption;
    this.computerOption;
    this.winner;
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

  comRandom() {
    const options = ["batu", "kertas", "gunting"];
    const i = Math.floor(Math.random() * options.length);
    this.setComputerOption = options[i];
    return options[i];
  }

  winCalculation() {
    let player = this.playerOption;
    let com = this.computerOption;
    if (player == com) {
      return "Draw!";
    }
    if (player == "batu") {
      return com == "gunting" ? "Player 1 Win!" : "COM Win!";
    }
    if (player == "kertas") {
      return com == "batu" ? "Player 1 Win!" : "COM Win!";
    }
    if (player == "gunting") {
      return com == "kertas" ? "Player 1 Win!" : "COM Win!";
    }
  }

  winnerIs() {
    if (this.winCalculation() == "Player 1 Win!") {
      return "Player 1";
    }
  }
}

function pickOption(params) {
  const game = new Game();
  let result = "";

  // get data
  game.setPlayerOption = params;
  game.setComputerOption = game.comRandom();

  // process data
  result = game.winCalculation();

  // check
  console.log(`Kamu memilih ` + game.getPlayerOption);
  console.log(`Computer memilih ` + game.getComputerOption);
  console.log(result);

  // show winner
  if (result == "Player 1 Win!") {
    box.classList.add("box");
    info.classList.add("info");
    info.innerHTML = result;
  } else if (result == "COM Win!") {
    box.classList.add("box");
    info.classList.add("info");
    info.innerHTML = result;
  } else {
    box.classList.add("draw-box");
    info.classList.add("info");
    info.innerHTML = result;
  }
}

// refresh
refresh.addEventListener("click", function () {
  window.location.reload();
});
