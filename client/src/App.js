import axios from 'axios';
import React, { Component } from 'react'

class App extends Component {


  componentDidMount() {
    axios.get('/api/users')
      .then(response => {
        console.log(response.data)
      })
  }
  render() {

    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
