import React from 'react';
import TodoItem from "./TodoItem";
import {NavLink} from "react-router-dom";

function TodoList({match, todos, onTodoDelete, onTodoUpdate, toggleIsEditing}) {

    const filteredTodos = () => {
        switch (match.params.filter) {
            case 'all':
                return todos.map(getTodos);
            case 'undone':
                return todos.filter(getUndoneTodos).map(getTodos);
            case 'done':
                return todos.filter(getDoneTodos).map(getTodos);
            default:
                return todos;
        }
    };

    const getTodos = (todo, index) => {
        return <TodoItem key={index} onTodoDelete={onTodoDelete} onTodoUpdate={onTodoUpdate}
                         toggleIsEditing={toggleIsEditing} index={index} todo={todo}/>;
    };
    const getUndoneTodos = todo => {
        return !todo.done
    };
    const getDoneTodos = todo => {
        return todo.done;
    };

    const todoList = todos.length
        ? <React.Fragment>
            <div className="todo-links">

                <div className="btn-group mb-2">
                    <NavLink to="/todos/all">
                        <button className="btn btn-primary btn-sm">
                            Todas las tareas ({todos.length})
                        </button>
                    </NavLink>
                    <NavLink to="/todos/undone">
                        <button className="btn btn-primary btn-sm">
                            Tareas sin terminar ({todos.filter(todo => !todo.done).length})
                        </button>
                    </NavLink>
                    <NavLink to="/todos/done">
                        <button className="btn btn-primary btn-sm">
                            Tareas terminadas ({todos.filter(todo => todo.done).length})
                        </button>
                    </NavLink>
                </div>
            </div>
            <p>Número de tareas ({todos.length})</p>
            <ul className="list-group">
                {filteredTodos()}
            </ul>
        </React.Fragment>
        : <p>No hay tareas añadidas</p>;

    return (
        <div className="col-12 col-md-8 mx-auto">
            <NavLink to="/todos/create">
                <button className="btn btn-primary mb-2">Crear tarea</button>
            </NavLink>
            {todoList}
        </div>
    );
}

export default TodoList;