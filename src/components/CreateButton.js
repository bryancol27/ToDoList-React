import React from "react";

function CreateButton({setOpenModal}){

    return (
        <button 
        className="moreToDo"
        onClick={() => setOpenModal(prevState => !prevState)}> + </button>
    )
};

export {CreateButton};