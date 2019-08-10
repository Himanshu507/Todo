import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{

  render(){
    return this.props.todos.map((todo) =>(
      <TodoItem key={todo.id} todo = {todo} markComplete = {this.props.markComplete}
      delTodo={this.props.delTodo}/>
      //<h3>{todo.title}</h3>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

// console.log(this.props.todos)
//     return(
//       <div className="App">
//         <h1>Todos</h1>
//       </div>
//     );

export default Todos;
