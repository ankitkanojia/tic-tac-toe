import React from 'react';
import './App.css';
import * as ReactDOM from 'react-dom';
import playerA from  "./A.png";
import playerB from  "./B.png";
import { setTimeout } from 'timers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle : "CLICK START GAME",
      isGameStart : false,
      currentPlayer : "",
      totalBlock : 0,
      isWinner : false,
      isFinish : false
    };
  }

  onBoardClick = () => {
    this.setState({
      isGameStart : true,
      boardTitle : "Player A turn!",
      currentPlayer : "A"
    });
  }

  logicVerification = () => {

  }

  handleClick = (index) => {
    let TotalBlock = this.state.totalBlock;

    if(TotalBlock > 5){
      this.logicVerification();      
    }

    if(TotalBlock === 8)
    {
      this.refs["block" + index].textContent = "O";
      this.setState({
        boardTitle: "NO WINNER",
        currentPlayer: "",
        totalBlock : 0,
        isWinner : false,
        isFinish : true
      },() => {
        setTimeout(() => {
          [...Array(9)].map((data,sindex) => {
            this.refs["block" + (sindex + 1)].textContent = "";
          });
          this.setState({
            boardTitle: "RESTART GAME",
            isGameStart : false,
            isFinish : false
          });
        }, 5000);  
      });
    }else{
      TotalBlock = TotalBlock + 1;
      if (this.state.currentPlayer === "A") {
        this.refs["block" + index].textContent = "X";
        this.setState({
          boardTitle: "Player B turn!",
          currentPlayer: "B",
          totalBlock : TotalBlock
        });
      } else {
        this.refs["block" + index].textContent = "O";
        this.setState({
          boardTitle: "Player A turn!",
          currentPlayer: "A",
          totalBlock : TotalBlock
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div class="container h-100">
          <div class="row h-100">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <table style={{ width : "450px", height : "350px" }}>
                <tbody>
                  <tr height="60px">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td colspan="3" className="scoreboard text-center" onClick={(!this.state.isGameStart && this.onBoardClick)}>{this.state.boardTitle}</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr height="10px">
                    <td colspan="7">&nbsp;</td>
                  </tr>
                  <tr className="white">
                    <td rowspan="4" className={"playe_a"}><img className={this.state.currentPlayer === "A" && "active"} width="100%" src={playerA} alt="Player A" /></td>
                    <td rowspan="4">&nbsp;</td>
                    <td className={"white " + (this.state.isFinish && !this.state.isWinner ? "allwrong" : "")} onClick={() => this.handleClick(1)} ref="block1"></td>
                    <td className={"white " + (this.state.isFinish && !this.state.isWinner ? "allwrong" : "")} onClick={() => this.handleClick(2)} ref="block2"></td>
                    <td className={"white " + (this.state.isFinish && !this.state.isWinner ? "allwrong" : "")} onClick={() => this.handleClick(3)} ref="block3"></td>
                    <td rowspan="4">&nbsp;</td>
                    <td rowspan="4" className={"playe_b"}><img className={this.state.currentPlayer === "B" && "active"} width="100%" src={playerB} alt="Player B" /></td>
                  </tr>
                  <tr>
                    <td className={"white " + (this.state.isFinish && !this.state.isWinner ? "allwrong" : "")} onClick={() => this.handleClick(4)} ref="block4"></td>
                    <td className={"white " + (this.state.isFinish && !this.state.isWinner ? "allwrong" : "")} onClick={() => this.handleClick(5)} ref="block5"></td>
                    <td className={"white " + (this.state.isFinish && !this.state.isWinner ? "allwrong" : "")} onClick={() => this.handleClick(6)} ref="block6"></td>
                  </tr>
                  <tr className="white">
                    <td className={"white " + (this.state.isFinish && !this.state.isWinner ? "allwrong" : "")} onClick={() => this.handleClick(7)} ref="block7"></td>
                    <td className={"white " + (this.state.isFinish && !this.state.isWinner ? "allwrong" : "")} onClick={() => this.handleClick(8)} ref="block8"></td>
                    <td className={"white " + (this.state.isFinish && !this.state.isWinner ? "allwrong" : "")} onClick={() => this.handleClick(9)} ref="block9"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
