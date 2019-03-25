import React, {useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";

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

    const onTodoUpdate = (index, todoName, todoDone) => {
        let clonedTodos = [...todos];
        setTodos(clonedTodos.map((todo, i) => {
            if (index === i) {
                todo.name = todoName;
                todo.done = todoDone;
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
                    <Switch>
                        <Route path="/todos/create" render={({history}) => <TodoForm history={history} onTodoSubmit={onTodoSubmit} />} />
                        <Route path="/todos/:filter(all|undone|done)" render={({match}) => <TodoList
                            match={match}
                            toggleIsEditing={toggleIsEditing}
                            onTodoUpdate={onTodoUpdate}
                            onTodoDelete={onTodoDelete}
                            todos={todos}
                        />} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
