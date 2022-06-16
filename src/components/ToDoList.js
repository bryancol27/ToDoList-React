import React from "react";

function ToDoList(props){
    return(
        <section className="section-list">
            <ul>
                {props.children}
            </ul>
        </section>
    )
};

export {ToDoList}