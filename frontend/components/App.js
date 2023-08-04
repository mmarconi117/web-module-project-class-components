import React from 'react'
import TodoList from './TodoList';
import Form from './Form';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "Walk the Dog",
          id: 1,
          completed: false
        },
        {
          name: "Garbage",
          id: 2,
          completed: false
        },
        {
          name: "Laundry",
          id: 3,
          completed: false
        }
      ]
    };
  }

  // Other methods and render function can be added here
  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  handleAdd = (name) => {
    const newTodo = {
      name: name, // Use the value passed from the input field
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  };


handleToggle = (clickedId) => {
  this.setState({
    ...this.state,
    todos: this.state.todos.map(todo => {
      if (todo.id === clickedId){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
  })
}


  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>Todo App</h1>

        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd} />
          <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
