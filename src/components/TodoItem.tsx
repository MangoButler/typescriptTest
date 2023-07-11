import React from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css';




const TodoItem: React.FC<{ todo: Todo; onDelete:()=> void }> = (props) => {

  

    return <li className={classes.item} onClick={props.onDelete}>
        {props.todo.text}
    </li>
};

export default TodoItem;
