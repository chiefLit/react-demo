import React, { Component } from 'react';
import TodoList from './components/TodoList'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ padding: 15 }}>
        <TodoList/>
      </div>
    );
  }
}

export default App;
