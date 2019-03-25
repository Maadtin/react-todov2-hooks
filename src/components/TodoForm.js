import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

function TodoForm({onTodoSubmit, history}) {

    const [name, setName] = useState('');
    const [done, setDone] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        onTodoSubmit({name, done, isEditing: false});
        setName('');
        setDone(false);
        history.push('/todos/all');
    };

    return (
        <form className="col-12 col-md-8 mx-auto" onSubmit={onSubmit}>
            <NavLink to="/todos/all">
                <button className="btn btn-primary mb-2">Ver tareas creadas</button>
            </NavLink>
            <div className="form-group">
                <input autoFocus value={name} onChange={e => setName(e.target.value)} placeholder="Nombre de la tarea" type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input checked={done} onChange={e => setDone(e.target.checked)} type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Tarea terminada
                    </label>
                </div>
            </div>
            <div className="form-group">
                <button disabled={!name} className="btn btn-primary">
                    Añadir tarea
                </button>
            </div>
        </form>
    );
}

export default TodoForm;