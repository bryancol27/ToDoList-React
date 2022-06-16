import '../../styles/header.css';
import '../../styles/ToDoList.css';
import React from 'react';
import { TodoProvider } from '../toDoContext';
import { AppUi } from './AppUi';


function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;