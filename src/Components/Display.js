import React from "react";
import '../App.css';

const Display = ({todo,handlerCheckbox,handlerDelete}) =>{

    return(
        <div className="tasks">
        <div className={todo.checkbox? "task back" : "task"}>
            <input type="checkbox" className={todo.checkbox ? "checkboxDisable" : "checkbox"} onClick={() => handlerCheckbox(todo.id)}/> 
            <span className={todo.checkbox ? "checked" : ""}>
                {todo.task}
            </span>
            <button className="delete" onClick={() => handlerDelete(todo.id)}>
                <i className="fa fa-trash-o trash"></i>
            </button>
        </div>
        </div>
    );

}

export default Display;