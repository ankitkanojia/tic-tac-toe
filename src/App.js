import React from 'react';
import puzzle from "./logo.svg";
import './App.css';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="row">
            <div className="col-md-12 d-flex  justify-content-center align-items-center">
              <table>
                <tbody>
                  {[...Array(5)].map((data, index) => {
                    return <tr>
                      {[...Array(8)].map((sdata, sindex) => {
                        return <td>&nbsp;</td>
                      })}
                    </tr>
                  })}
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
