import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"]
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map(task => <li>{task}</li>)}
          </ul>
           <form onSubmit={this.addItem.bind(this)}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" ref={(a) => this._inputElement = a} />
           </form>
        </div>
      </div>
    )
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = this._inputElement.value
    };

    this.setState({
      tasks: this.state.tasks.concat(newItem)
    });

    this._inputElement.value = "";

    e.preventDefault();
  }


}

export default App;
