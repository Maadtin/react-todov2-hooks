import React, {useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {BrowserRouter, Route} from "react-router-dom";

function App() {

    const [todos, setTodos] = useState([]);

    const onTodoSubmit = todo => {
        setTodos([todo, ...todos]);
    };

    const onTodoDelete = index => {
        let todosLeft = [...todos];
        todosLeft.splice(index, 1);
        setTodos(todosLeft);
    };

    const onTodoUpdate = (index, todoName) => {
        let clonedTodos = [...todos];
        setTodos(clonedTodos.map((todo, i) => {
            if (index === i) {
                todo.name = todoName;
                todo.isEditing = false;
            }
            return todo;
        }));
    };

    const toggleIsEditing = index => {
        let todosCloned = todos.map((todo, i) => {
            if (index === i) {
                todo.isEditing = !todo.isEditing;
            }
            return todo;
        });
        setTodos(todosCloned);
    };

    return (
        <BrowserRouter>
            <div className="container app-container">
                <div className="row">
                    <Route exact path="/create-todo" render={({history}) => <TodoForm history={history} onTodoSubmit={onTodoSubmit} />} />
                    <Route exact path="/" render={() => <TodoList
                        toggleIsEditing={toggleIsEditing}
                        onTodoUpdate={onTodoUpdate}
                        onTodoDelete={onTodoDelete}
                        todos={todos}
                    />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
