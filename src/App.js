import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

componentDidMount() {
    axios.get("JsonPrueba.json")
      .then(response => {
        this.setState({
          todos: response.data
        });
      })
  }

  
  // componentDidMount() {
  //   axios.post("")
  //     .then(response => {
  //       this.setState({
  //         todos: response.data,
  //         data: {
  //           ef: 'files/900327563EEFFIFRS.tif',
  //           nc: 'Prueba #54',
  //           tipoArchivo : '1',
  //           columna: '1'
  //         }
  //       });
  //     })
  // }

  render() {
    const { todos = [] } = this.state;
    console.debug(todos);
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
              
            {todos.length ? 
              todos.map(todo => (
                console.debug(todo),
                <tr>
                  <td>{todo.grupo}</td>
                  <td>{todo.name}</td>
                </tr>
              ))
              : 
              
              (<tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
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