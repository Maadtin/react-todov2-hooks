import React from 'react';

function TodoItem({todo, index, onTodoDelete, onTodoUpdate, toggleIsEditing}) {

    let inputRef = React.createRef();

    const handleUpdate = () => {
        onTodoUpdate(index, inputRef.current.value);
    };

    let todoItem = todo.isEditing
        ? <li className="list-group-item todo-container">
            <input onKeyUp={e => e.key === 'Enter' ? handleUpdate() : undefined} autoFocus ref={inputRef} className="form-control" type="text" defaultValue={todo.name}/>
            <div style={{marginLeft: '10px'}} className="actions-container">
                <span style={{marginRight: '5px'}} className="btn btn-warning btn-sm text-white fa fa-close action action-cancel-editing"
                      onClick={() => toggleIsEditing(index)}/>
                <span className="btn btn-success btn-sm text-white fa fa-check action action-cancel-editing"
                      onClick={handleUpdate}/>
            </div>
        </li>
        : <li className="list-group-item todo-container">
            <span className={todo.done ? 'todo-done' : ''}>{todo.name}</span>
            <div className="actions-container">
                <span style={{marginRight: '5px'}} onClick={() => toggleIsEditing(index)}
                      className="btn btn-primary btn-sm action action-edit fa fa-pencil"/>
                <span onClick={() => onTodoDelete(index)}
                      className="btn btn-danger btn-sm action action-delete fa fa-trash"/>
            </div>
        </li>;

    return todoItem;
}

export default TodoItem;