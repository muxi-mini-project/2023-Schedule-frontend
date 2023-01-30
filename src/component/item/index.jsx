import React, { Component } from 'react'

export default function Item (props) {

    const handleCheck=(id)=>{
        return(event)=>{
          props.updateTodo(id,event.target.checked)
        }
    }
    return (
        <li>
                        <input type="checkbox" name="checkbox" id={props.id} onChange={handleCheck(props.id)} />
                        <label htmlFor={props.id} ></label>
                        <span className={props.done?'done':''}> {props.name} </span>
        </li>
    )
    }
