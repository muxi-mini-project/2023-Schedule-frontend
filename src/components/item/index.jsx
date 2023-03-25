import React from 'react';
import { postCheck } from '../../api/fetch';
import './item.css';


export default function Item(props) {
    const handleCheck = (id) => {
        return (event) => {
            props.updateTodo(id, event.target.checked);
            postCheck('calendar/check', { SchId: id })
                .then(data => console.log(data))
                .catch(error => console.error('Error', error));
        }
    }
    const handleDelete = (id) => {
        return () => {
            postCheck('calendar/deleteOne', { SchId: id })
                .then(data => console.log(data))
                .catch(error => alert('error', error));
            props.deleteOne(id);
        }
    }


    return (
        <li>
            <input type="checkbox" className="Ccheckbox" id={`${props.SchId}`} checked={props.Done} onChange={handleCheck(props.SchId)} />
            <label htmlFor={props.SchId}></label>
            <span className={`spann ${props.Done ? 'done' : ''}`}> {props.Content} </span>
            <span className='delete' onClick={handleDelete(props.SchId)}>x</span>
        </li>
    );
}
