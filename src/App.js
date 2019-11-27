import React from 'react';
import './App.css';
import * as ReactDOM from 'react-dom';
import smily from  "./smily.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle : "CLICK START GAME"
    };
  }

  componentDidMount() {

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
                    <td colspan="3" className="scoreboard text-center">{this.state.boardTitle}</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr height="10px">
                    <td colspan="7">&nbsp;</td>
                  </tr>
                  <tr className="white">
                    <td rowspan="4" className="playe_a"><img width="100%" src={smily} alt="Player A" /></td>
                    <td rowspan="4">&nbsp;</td>
                    <td className="white">&nbsp;</td>
                    <td className="white">&nbsp;</td>
                    <td className="white">&nbsp;</td>
                    <td rowspan="4">&nbsp;</td>
                    <td rowspan="4" className="playe_b"><img width="100%" src={smily} alt="Player B" /></td>
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
