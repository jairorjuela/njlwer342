import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

constructor() {
    super();
    this.state = {
      tasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      tarea: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({tarea: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      tasks: this.state.tasks.concat(this.state.tarea),
      tarea: ""
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map(task => <li key={task}>{task}</li>)}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.tarea} onChange={this.handleChange}/>
           </form>
        </div>
      </div>
    )
  }

}




export default App
