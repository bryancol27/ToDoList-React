import React from "react";
import { TodoContext } from './toDoContext'

function ToDoSearch(){
    const {
        SearchValue,
        SetSearchValue,
    } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => SetSearchValue(event.target.value);
    

    return (
        <React.Fragment>
            <input placeholder="Buscador"
            onChange={onSearchValueChange}/
            >
            <p>{SearchValue}</p>
        </React.Fragment>
    )
    
    
};

export { ToDoSearch}