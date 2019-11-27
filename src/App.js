import React from 'react';
import './App.css';
import * as ReactDOM from 'react-dom';
import playerA from  "./A.png";
import playerB from  "./B.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle : "CLICK START GAME",
      isGameStart : false,
      currentPlayer : ""
    };
  }

  onBoardClick = () => {
    this.setState({
      isGameStart : true,
      boardTitle : "Player A turn!",
      currentPlayer : "A"
    });
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
                    <td className="white">&nbsp;</td>
                    <td className="white">&nbsp;</td>
                    <td className="white">&nbsp;</td>
                    <td rowspan="4">&nbsp;</td>
                    <td rowspan="4" className={"playe_b"}><img className={this.state.currentPlayer === "B" && "active"} width="100%" src={playerB} alt="Player B" /></td>
                  </tr>
                  <tr>
                    <td className="white">&nbsp;</td>
                    <td className="white">&nbsp;</td>
                    <td className="white">&nbsp;</td>
                  </tr>
                  <tr className="white">
                    <td className="white">&nbsp;</td>
                    <td className="white">&nbsp;</td>
                    <td className="white">&nbsp;</td>
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
