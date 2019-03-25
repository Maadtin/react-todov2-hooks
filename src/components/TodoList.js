import React from 'react';
import TodoItem from "./TodoItem";
import {NavLink} from "react-router-dom";

function TodoList({todos, onTodoDelete, onTodoUpdate, toggleIsEditing}) {

    const todoList = todos.length
        ?   <React.Fragment>
                <p>Número de tareas ({todos.length})</p>
                <ul className="list-group">
                    {todos.map((todo, index) => <TodoItem key={index} onTodoDelete={onTodoDelete} onTodoUpdate={onTodoUpdate} toggleIsEditing={toggleIsEditing} index={index} todo={todo} />)}
                </ul>
            </React.Fragment>
        :   <p>No hay tareas añadidas</p>;

    return (
        <div className="col-12 col-md-8 mx-auto">
            <NavLink to="/create-todo">
                <button className="btn btn-primary mb-2">Crear tarea</button>
            </NavLink>
           {todoList}
        </div>
    );
}

export default TodoList;