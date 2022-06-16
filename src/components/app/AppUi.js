import React from "react";

// Import Components
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoItem } from "../ToDoItem";
import { CreateButton } from "../CreateButton";
import { ToDoList } from "../ToDoList";
import {Image} from '../img';
import { TodoContext } from '../toDoContext';
import { Modal } from '../modal/index'
import { ToDoForm } from '../toDoForm'

const seaFile = 'https://s1.eestatic.com/2020/08/17/curiosidades/naturaleza-planeta-tierra/oceanos-curiosidades-ciencias_naturales_513709574_157873471_1706x960.jpg';

function AppUi(){
    const {
        error,
        searchedToDos,
        switchComplete, 
        deleteToDos,
        loading,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <header className="header-container">
            
                <Image src={seaFile} class='header-img'/>
        
                <ToDoCounter />
        
                <ToDoSearch />
            </header>
    
            <ToDoList>
                {loading && <p>Estamos cargando</p>}
                {error && <p>Estamos teniendo problemas</p>}
                {(!loading && !searchedToDos.length && !error) && <p>Crea tu primer toDo</p>}
            
                {searchedToDos.map(toDo => <ToDoItem  
                    key={toDo.text} 
                    text={toDo.text} 
                    complete={toDo.completed}
                    onComplete={() => switchComplete(toDo.text)}
                    onDelete={() => deleteToDos(toDo.text)}/>
                )}
            </ToDoList>
        
            {!!openModal && (            
                <Modal>
                    <ToDoForm 
                    setOpenModal={setOpenModal}/>
                </Modal>
            )}

            <CreateButton 
            setOpenModal={setOpenModal}/>
            
        </React.Fragment>
      );
}

export {AppUi}