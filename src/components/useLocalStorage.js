import React from 'react';

function UseLocalStorage(itemName, initialValue){
    const [loading, setloading] = React.useState(true);
    const [error, seterror] = React.useState(false);
  
  
    //Controlador de estado de todos para saber cuantos hay y actualizarlos
    const [toDos, setTodos] = React.useState(initialValue);
    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          //config local storage
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;
  
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          }else{
            parsedItem = JSON.parse(localStorageItem)
          }
  
          setTodos(parsedItem);
          setloading(false);
        } catch (error) {
          seterror(true)
        }
      }, 1000);
    })
  
    const saveTodos = (newToDos) => {
      try {
        const stringifiedTodos = JSON.stringify(newToDos);
        localStorage.setItem(itemName, stringifiedTodos);
        setTodos(newToDos) 
      } catch (error) {
        seterror(true);
      }
    };
  
    return {
      toDos,
      saveTodos,
      loading,
      error,
    }
    ;
  }

export { UseLocalStorage };