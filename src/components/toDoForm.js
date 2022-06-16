import React from 'react';
import { TodoContext } from './toDoContext'

function ToDoForm({setOpenModal}){
    const [newTodoValue, setNewTodoValue] = React.useState();

    const {
        addTodos
    } = React.useContext(TodoContext)

    const onAdd = (event) => {
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(prevState => !prevState)
    }

    const onWrite = event => setNewTodoValue(event.target.value) 

    return (
        <form>  
            <label>Escribe Tu nueva tarea</label>
            <textarea 
            value={newTodoValue}
            onChange={onWrite}
            placeholder='Cortar la cebolla para el almuerzo'/>
            <div>
                <button
                type='button'
                onClick={() => setOpenModal(prevState => !prevState)}>
                    Cancelar
                </button>

                <button
                type='submit'
                onClick={onAdd}>
                    Añadir
                </button>
            </div>
        </form>
    )
};

export { ToDoForm }