import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

componentDidMount() {
    axios.get("JsonPrueba.json")
      .then(response => {
        this.setState({
          items: response.data
        });
        console.log(response.data);
      })
  }

  render() {
    const { items = [] } = this.state;
    console.debug(items);
    return (
      <div className="App">
        <header className="App-header">
          <Table responsive>
            <thead>
              <tr>
                <th>Test</th>
                <th>Test 2</th>
                {/* <th>Title</th>
                <th>Completed</th> */}
              </tr>
            </thead>
            <tbody>
              
            {items.length ? 
              items.data.map(item => (
                <tr>
                  <td>{item.grupo}</td>
                  <td>{item.cuenta}</td>
                </tr>
              ))
              :
              (<tr>
                <td>-</td>
                <td>-</td>
                {/* <td>-</td>
                <td>-</td> */}
              </tr>)  
            }
            </tbody>
          </Table>
        </header>
      </div>
    );
  }
}

export default App;