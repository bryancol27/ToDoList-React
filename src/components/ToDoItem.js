import React from "react";

function ToDoItem(props){
    
    return (
        <li>
            <span className={`${props.complete && 'ToDoItem-check--active'}`}
            onClick={props.onComplete}
            value={props.stateCompleted}
            >✅</span>

            <p className={`${props.complete && 'ToDoItem-p--active'}`}>{props.text}</p>
            
            <span className={`${!props.complete && 'ToDoItem-check--active'}`} onClick={props.onDelete}>❌</span>
        </li>
    )
};

export {ToDoItem};