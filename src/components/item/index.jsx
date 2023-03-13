import React, { components, useEffect } from 'react'

export default function Item (props) {

    const handleCheck=(id)=>{
        return(event)=>{
          props.updateTodo(id,event.target.checked)
        }
    }
    return (
        <li>
                        <input type="checkbox" name="checkbox" key={props.id} id={props.id} checked={props.Done} onChange={handleCheck(props.id)} />
                        <label htmlFor={props.id} ></label>
                        <span className={props.Done?'done':''}> {props.schedule} </span>
        </li>
    )
    }
