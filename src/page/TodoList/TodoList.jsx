import baseMap from "../../img/Todolist/basemap.png";
import check from "../../img/Todolist/check.png";
import checkBox from "../../img/Todolist/CheckBox.png";
import paper from "../../img/Todolist/paper.png";

import { postData, getJSON, putData } from "../../api/fetch";
import { useState } from "react";
import "./TodoList.css";


const TodoList = () => {
    let todos = getTodos();
    const [temp, setTemp] = useState(todos);
    function getTodos() {
        const value = localStorage.getItem("todo") || "[]";
        return JSON.parse(value);
    }
    function setTodos(todos) {
        const todosJson = JSON.stringify(todos);
        localStorage.setItem("todo", todosJson);
        setTemp(todos);
    }
    if (todos.length === 0) {
        for (let i = 0; i < 5; i++) {
            todos.unshift({
                description: "",
                completed: false
            });
            setTodos(todos);
        }
    }

    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        let bodyStyle = document.body.style;
        bodyStyle.zoom = window.innerWidth/750;

        function updateTodo(todo, key, value) {
            todo[key] = value;
            setTodos(todos);
        }
        function todoChange1(e) {
            updateTodo(todos[0], "description", e.target.value);
            setTodos(todos);
        }
        function todoChange2(e) {
            updateTodo(todos[1], "description", e.target.value);
            setTodos(todos);
        }
        function todoChange3(e) {
            updateTodo(todos[2], "description", e.target.value);
            setTodos(todos);
        }
        function todoChange4(e) {
            updateTodo(todos[3], "description", e.target.value);
            setTodos(todos);
        }
        function todoChange5(e) {
            updateTodo(todos[4], "description", e.target.value);
            setTodos(todos);
        }


        function checked1(e) {
            updateTodo(todos[0], "completed", e.target.checked);
            setTodos(todos);
            window.location.reload();
        }
        function checked2(e) {
            updateTodo(todos[1], "completed", e.target.checked);
            setTodos(todos);
            window.location.reload();
        }
        function checked3(e) {
            updateTodo(todos[2], "completed", e.target.checked);
            setTodos(todos);
            window.location.reload();
        }
        function checked4(e) {
            updateTodo(todos[3], "completed", e.target.checked);
            setTodos(todos);
            window.location.reload();
        }
        function checked5(e) {
            updateTodo(todos[4], "completed", e.target.checked);
            setTodos(todos);
            window.location.reload();
        }

        return (
            <div className="base">
                <div className="view">
                    <img alt='' src={baseMap} className="baseMap" />
                    <img alt='' src={paper} className="paper" />
                    <img alt='' src={checkBox} className="checkBox" />
                    <img alt='' src={check} className={`check1 check ${temp[0].completed ? "a" : "b"}`} />
                    <img alt='' src={check} className={`check2 check ${temp[1].completed ? "a" : "b"}`} />
                    <img alt='' src={check} className={`check3 check ${temp[2].completed ? "a" : "b"}`} />
                    <img alt='' src={check} className={`check4 check ${temp[3].completed ? "a" : "b"}`} />
                    <img alt='' src={check} className={`check5 check ${temp[4].completed ? "a" : "b"}`} />
                    <input type="checkbox" className="checker1 checker" defaultChecked={temp[0].completed} onChange={checked1}></input>
                    <input type="checkbox" className="checker2 checker" defaultChecked={temp[1].completed} onChange={checked2}></input>
                    <input type="checkbox" className="checker3 checker" defaultChecked={temp[2].completed} onChange={checked3}></input>
                    <input type="checkbox" className="checker4 checker" defaultChecked={temp[3].completed} onChange={checked4}></input>
                    <input type="checkbox" className="checker5 checker" defaultChecked={temp[4].completed} onChange={checked5}></input>
                    <input type="text" className="todo1 todo descriptionInput" defaultValue={temp[0].description} onChange={todoChange1}></input>
                    <input type="text" className="todo2 todo descriptionInput" defaultValue={temp[1].description} onChange={todoChange2}></input>
                    <input type="text" className="todo3 todo descriptionInput" defaultValue={temp[2].description} onChange={todoChange3}></input>
                    <input type="text" className="todo4 todo descriptionInput" defaultValue={temp[3].description} onChange={todoChange4}></input>
                    <input type="text" className="todo5 todo descriptionInput" defaultValue={temp[4].description} onChange={todoChange5}></input>
                </div>
            </div>
        );
    }
}

export default TodoList;