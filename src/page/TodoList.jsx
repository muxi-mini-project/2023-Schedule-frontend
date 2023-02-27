import baseMap from "../img/Todolist/basemap.png";
import check from "../img/Todolist/check.png";
import checkBox from "../img/Todolist/CheckBox.png";
import paper from "../img/Todolist/paper.png";
import {CheckGet, CompletePut, WritePost} from "../api/fetch";
import {useState} from "react";
import "./TodoList.css";


const TodoList = () => {
    let todos = getTodos();
    function getTodos(){
        const value = localStorage.getItem("todo") || "[]";
        return JSON.parse(value);
    }
    function setTodos(todos){
        const todosJson = JSON.stringify(todos);
        localStorage.setItem("todo", todosJson);
    }
    if(todos.length === 0){
        for(let i = 0; i < 5; i++){
            todos.unshift({
                description: "",
                completed: false
            });
            setTodos(todos);
        }
    }


    function updateTodo(todo, key, value){
        todo[key] = value;
        setTodos(todos);
    }
    function todoChange1(e){
        updateTodo(todos[0], "description", e.target.value);
    }
    function todoChange2(e){
        updateTodo(todos[1], "description", e.target.value);
    }
    function todoChange3(e){
        updateTodo(todos[2], "description", e.target.value);
    }
    function todoChange4(e){
        updateTodo(todos[3], "description", e.target.value);
    }
    function todoChange5(e){
        updateTodo(todos[4], "description", e.target.value);
    }


    const [opacity1, setOpacity1] = useState(0);
    const [opacity2, setOpacity2] = useState(0);
    const [opacity3, setOpacity3] = useState(0);
    const [opacity4, setOpacity4] = useState(0);
    const [opacity5, setOpacity5] = useState(0);
    function checked1(e){
        updateTodo(todos[0], "completed", e.target.checked);
        opacity1 === 0 ? setOpacity1(1) : setOpacity1(0);
    }
    function checked2(e){
        updateTodo(todos[1], "completed", e.target.checked);
        opacity2 === 0 ? setOpacity2(1) : setOpacity2(0);
    }
    function checked3(e){
        updateTodo(todos[2], "completed", e.target.checked);
        opacity3 === 0 ? setOpacity3(1) : setOpacity3(0);
    }
    function checked4(e){
        updateTodo(todos[3], "completed", e.target.checked);
        opacity4 === 0 ? setOpacity4(1) : setOpacity4(0);
    }
    function checked5(e){
        updateTodo(todos[4], "completed", e.target.checked);
        opacity5 === 0 ? setOpacity5(1) : setOpacity5(0);
    }

    return(
        <div className="base">
            <div className="view">
                <img alt='' src={baseMap} className="baseMap"/>
                <img alt='' src={paper} className="paper"/>
                <img alt='' src={checkBox} className="checkBox"/>
                <img alt='' src={check} className={`check1 check ${opacity1?"a":"b"}`}/>
                <img alt='' src={check} className={`check2 check ${opacity2?"a":"b"}`}/>
                <img alt='' src={check} className={`check3 check ${opacity3?"a":"b"}`}/>
                <img alt='' src={check} className={`check4 check ${opacity4?"a":"b"}`}/>
                <img alt='' src={check} className={`check5 check ${opacity5?"a":"b"}`}/>
                <input type="checkbox" className="checker1 checker" onChange={checked1}></input>
                <input className="todo1 todo descriptionInput" onChange={todoChange1}></input>
                <input type="checkbox" className="checker2 checker" onChange={checked2}></input>
                <input className="todo2 todo descriptionInput" onChange={todoChange2}></input>
                <input type="checkbox" className="checker3 checker" onChange={checked3}></input>
                <input className="todo3 todo descriptionInput" onChange={todoChange3}></input>
                <input type="checkbox" className="checker4 checker" onChange={checked4}></input>
                <input className="todo4 todo descriptionInput" onChange={todoChange4}></input>
                <input type="checkbox" className="checker5 checker" onChange={checked5}></input>
                <input className="todo5 todo descriptionInput" onChange={todoChange5}></input>    
            </div>
        </div>
    );
}

export default TodoList;