import React, { components, useEffect } from 'react'
import { postCheck } from '../../api/fetch'

export default function Item (props) {

    const handleCheck=(id)=>{
        return(event)=>{
          props.updateTodo(id,event.target.checked)
          postCheck('calendar/check',{SchId:id})
        .then(data => console.log(data))
    .catch(error => console.error('Error',error))
        }
    }
    return (
        <li>
                        <input type="checkbox" name="checkbox"  id={props.SchId} checked={props.Done} onChange={handleCheck(props.SchId)} />
                        <label htmlFor={props.SchId} ></label>
                        <span className={props.Done?'done':''}> {props.Content} </span>
        </li>
    )
    }
