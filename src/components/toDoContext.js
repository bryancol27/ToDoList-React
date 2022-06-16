import React from "react";
import { UseLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function  TodoProvider(props){

    const {toDos, 
        saveTodos, 
        loading,
        error} = UseLocalStorage('TODOS_V1', [])
    
      //analizador de estado del modal
      const [openModal, setOpenModal] = React.useState(false);

      //state of check button
      const [UseCompleted, SetStateCompleted] = React.useState(false);
    
      //estado de nuestro componente de filtrados de todos
      const [SearchValue, SetSearchValue] = React.useState('');
    
      //analizador para saber cuantos todos estan completos o no (apartado de "toDoCounter")
      const completedTodos = toDos.filter(todo => !!todo.completed).length;
      const totalToDos = toDos.length;
    
      let searchedToDos = [];
    
      //Verificador para saber si existe algo en la zona de busqueda
      if(!SearchValue.length >= 1){
        searchedToDos = toDos;
      } else{
        searchedToDos = toDos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = SearchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const completeToDos = (text, kind) =>{
        const todoIndex = toDos.findIndex(todo => todo.text == text);
        const newToDos = [...toDos];
    
        if(kind == toDos[todoIndex].completed){
          (kind) ? kind = false : kind = true; 
        };
        
        newToDos[todoIndex].completed = kind;
    
        saveTodos(newToDos);
        SetStateCompleted(kind);
      };
      
      const addTodos = (text) =>{
        const newToDos = [...toDos];
        newToDos.push({
          completed: false,
          text
        })

        saveTodos(newToDos)
      }

      //herramienta para saber cuando se quiere decir que se completo una tarea o no
      function switchComplete(text){
        if(!UseCompleted) completeToDos(text, true);
        if(UseCompleted) completeToDos(text, false);
      }
    
      const deleteToDos = (text) =>{
        const newToDos = [];
    
        toDos.forEach(todo => {
          if(todo.text != text) newToDos.push(todo);
        });
    
        saveTodos(newToDos);
      };
    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalToDos,
            SearchValue,
            SetSearchValue,
            error,
            searchedToDos,
            switchComplete, 
            deleteToDos,
            loading,
            openModal,
            setOpenModal,
            addTodos
        }}>
          
            {props.children}
        
        </TodoContext.Provider>
    );
};

export { TodoContext,  TodoProvider }