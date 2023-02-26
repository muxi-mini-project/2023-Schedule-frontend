import React, { Component, useEffect } from 'react'

export default function Item (props) {

    const handleCheck=(userId)=>{
        return(event)=>{
          props.updateTodo(userId,event.target.checked)
        }
    }
    return (
        <li>
                        <input type="checkbox" name="checkbox" id={props.userId} checked={props.done} onChange={handleCheck(props.userId)} />
                        <label htmlFor={props.userId} ></label>
                        <span className={props.done?'done':''}> {props.content} </span>
        </li>
    )
    }
