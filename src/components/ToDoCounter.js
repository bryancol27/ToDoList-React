import React from "react";
import { TodoContext } from './toDoContext'

function ToDoCounter(){
    const { completedTodos, totalToDos, } = React.useContext(TodoContext)

    return (
        <h2 className="ToDoCounter">
            Has completador {completedTodos} de {totalToDos} tareas
        </h2>
    )
}

export { ToDoCounter };