import React from 'react'

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


  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>Todo App</h1>

        <ul>
          {
            todos.map(todo => {
              return (<li>{todo.name} {todo.completed?<span>- completed</span> : <span></span>}</li>)
            })
          }
        </ul>
        <form>
          <input />
          <button>Add</button>
          </form>
          <button>Clear</button>
      </div>
    )
  }
}
