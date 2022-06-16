import React from "react";
import ReactDOM from "react-dom";
import './modal.css'

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className="backgroundModal">
            {children}
        </div>,
        document.getElementById('modal-root')
    )
};

export { Modal }
