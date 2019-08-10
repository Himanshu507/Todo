import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import uuid from 'uuid';
import {throwStatement} from '@babel/types';


class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'Take me out',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Come on darling',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Take me google',
                completed: false
            }
        ]
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    };

    //Delete Todo
    delTodo = (id) => {
        console.log(id)
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    };

    //AddTodo
    addTodo = (title) => {
        //console.log(title)
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        };
        this.setState({todos: [...this.state.todos, newTodo]});
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path="/" render = {props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete}
                                       delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;