import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWinner: false,
      userClick: 0,
      computerClick: 0,
      isPlayerTurn: true,
      tieGames: 0,
      computerWin: 0,
      playerWin: 0,
      isClickable: true
    };
  }

  handleClick = (index) => {
    if (!this.state.isClickable) {
      return;
    }

    if (this.refs["block" + index].className.length > 0) {
      return;
    }

    if (this.state.isWinner) {
      return;
    }

    this.refs["block" + index].className = "x";
    this.refs["block" + index].classList.add('x');
    this.checkForWinner();
    this.setState({
      userClick: parseInt(this.state.userClick) + 1,
      isClickable: false
    }, () => {
      this.computerTurn(index);
    });
  }

  resetGame = () => {
    for (let i = 1; i <= 9; i++) {
      this.refs["block" + i].classList = "";
    }

    this.setState({
      userClick: 0,
      computerClick: 0,
      isWinner: false,
      isClickable: true
    });
  }

  computerTurn = () => {
    if (this.state.isWinner) {
      return;
    }

    let notBlueOrRed = [];
    let isAvailable = false;
    for (let i = 1; i <= 9; i++) {
      if (this.refs["block" + i].className.length === 0) {
        notBlueOrRed.push(i);
        isAvailable = true;
      }
    }

    if (isAvailable) {
      setTimeout(() => {
        var randomItem = notBlueOrRed[Math.floor(Math.random() * notBlueOrRed.length)];
        this.refs["block" + randomItem].className = "o";
        this.refs["block" + randomItem].classList.add('o');
        this.checkForWinner();
        this.setState({
          computerClick: parseInt(this.state.computerClick) + 1,
          isClickable: true
        });
      }, 1000);
    } else {
      if (!this.state.isWinner) {
        this.setState({
          tieGames: parseInt(this.state.tieGames) + 1
        }, () => {
          setTimeout(() => {
            this.resetGame();
          }, 2000);
        });
      }
    }
  }

  checkForWinner = () => {
    const combinationCollection = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    combinationCollection.map((data) => {
      if ((this.refs["block" + data[0]].className && this.refs["block" + data[1]].className && this.refs["block" + data[2]].className)
        && (this.refs["block" + data[0]].className.toLowerCase() === this.refs["block" + data[1]].className.toLowerCase() && this.refs["block" + data[1]].className.toLowerCase() === this.refs["block" + data[2]].className.toLowerCase() && this.refs["block" + data[2]].className.toLowerCase() === this.refs["block" + data[0]].className.toLowerCase())) {
        {
          this.setState({
            isWinner: true,
            isUserWinnder: (this.refs["block" + data[0]].className === "x"),
            playerWin: (this.refs["block" + data[0]].className === "x") ? (parseInt(this.state.playerWin) + 1) : this.state.playerWin,
            computerWin: (this.refs["block" + data[0]].className === "o") ? (parseInt(this.state.computerWin) + 1) : this.state.computerWin
          }, () => {
            this.refs["block" + data[0]].classList.add('blink');
            this.refs["block" + data[1]].classList.add('blink');
            this.refs["block" + data[2]].classList.add('blink');
            setTimeout(() => {
              this.resetGame();
            }, 2000);
          });
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="game">
          <div className="board">
            <div onClick={() => this.handleClick(1)} className="square top left" ><div ref="block1"></div></div>
            <div onClick={() => this.handleClick(2)} className="square top" ><div ref="block2"></div></div>
            <div onClick={() => this.handleClick(3)} className="square top right" ><div ref="block3"></div></div>
            <div onClick={() => this.handleClick(4)} className="square left" ><div ref="block4"></div></div>
            <div onClick={() => this.handleClick(5)} className="square" ><div ref="block5"></div></div>
            <div onClick={() => this.handleClick(6)} className="square right" ><div ref="block6"></div></div>
            <div onClick={() => this.handleClick(7)} className="square bottom left" ><div ref="block7"></div></div>
            <div onClick={() => this.handleClick(8)} className="square bottom" ><div ref="block8"></div></div>
            <div onClick={() => this.handleClick(9)} className="square bottom right" ><div ref="block9"></div></div>
          </div>
        </div>
        <div class="scores p1">
          <p class="player1"><span class="p1">Player</span><span class="p2">Player 1</span> (<span class="x"></span>)<span class="score">{this.state.playerWin}</span></p>
          <p class="ties">Tie<span class="score">{this.state.tieGames}</span></p>
          <p class="player2"><span class="p1">Computer</span><span class="p2">Player 2</span> (<span class="o"></span>)<span class="score">{this.state.computerWin}</span></p>
        </div>
      </div>
    );
  }
}

export default App;
