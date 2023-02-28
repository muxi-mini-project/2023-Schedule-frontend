import baseMap from "../img/Todolist/basemap.png";
import check from "../img/Todolist/check.png";
import checkBox from "../img/Todolist/CheckBox.png";
import paper from "../img/Todolist/paper.png";
import {CheckGet, CompletePut, WritePost} from "../api/fetch";
import {useState} from "react";
import "./TodoList.css";


const TodoList = () => {
    let todos = getTodos();
    const [temp, setTemp] = useState(todos);
    function getTodos(){
        const value = localStorage.getItem("todo") || "[]";
        return JSON.parse(value);
    }
    function setTodos(todos){
        const todosJson = JSON.stringify(todos);
        localStorage.setItem("todo", todosJson);
        setTemp(todos);
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
        setTodos(todos);
    }
    function todoChange2(e){
        updateTodo(todos[1], "description", e.target.value);
        setTodos(todos);
    }
    function todoChange3(e){
        updateTodo(todos[2], "description", e.target.value);
        setTodos(todos);
    }
    function todoChange4(e){
        updateTodo(todos[3], "description", e.target.value);
        setTodos(todos);
    }
    function todoChange5(e){
        updateTodo(todos[4], "description", e.target.value);
        setTodos(todos);
    }


    const [opacity1, setOpacity1] = useState(0);
    const [opacity2, setOpacity2] = useState(0);
    const [opacity3, setOpacity3] = useState(0);
    const [opacity4, setOpacity4] = useState(0);
    const [opacity5, setOpacity5] = useState(0);
    function checked1(e){
        updateTodo(todos[0], "completed", e.target.checked);
        opacity1 === 0 ? setOpacity1(1) : setOpacity1(0);
        setTodos(todos);
    }
    function checked2(e){
        updateTodo(todos[1], "completed", e.target.checked);
        opacity2 === 0 ? setOpacity2(1) : setOpacity2(0);
        setTodos(todos);
    }
    function checked3(e){
        updateTodo(todos[2], "completed", e.target.checked);
        opacity3 === 0 ? setOpacity3(1) : setOpacity3(0);
        setTodos(todos);
    }
    function checked4(e){
        updateTodo(todos[3], "completed", e.target.checked);
        opacity4 === 0 ? setOpacity4(1) : setOpacity4(0);
        setTodos(todos);
    }
    function checked5(e){
        updateTodo(todos[4], "completed", e.target.checked);
        opacity5 === 0 ? setOpacity5(1) : setOpacity5(0);
        setTodos(todos);
    }

    console.log(temp[0].description);

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
                <input type="checkbox" className="checker1 checker" defaultValue={temp[0].completed} value={temp[0].completed} onChange={checked1}></input>
                <input type="text" className="todo1 todo descriptionInput" defaultValue={temp[0].description} value={temp[0].description} onChange={todoChange1}></input>
                <input type="checkbox" className="checker2 checker" defaultValue={temp[1].completed} value={temp[1].completed} onChange={checked2}></input>
                <input type="text" className="todo2 todo descriptionInput" defaultValue={temp[1].description} value={temp[1].description} onChange={todoChange2}></input>
                <input type="checkbox" className="checker3 checker" defaultValue={temp[2].completed} value={temp[2].completed} onChange={checked3}></input>
                <input type="text" className="todo3 todo descriptionInput" defaultValue={temp[2].description} value={temp[2].description} onChange={todoChange3}></input>
                <input type="checkbox" className="checker4 checker" defaultValue={temp[3].completed} value={temp[3].completed} onChange={checked4}></input>
                <input type="text" className="todo4 todo descriptionInput" defaultValue={temp[3].description} value={temp[3].description} onChange={todoChange4}></input>
                <input type="checkbox" className="checker5 checker" defaultValue={temp[4].completed} value={temp[4].completed} onChange={checked5}></input>
                <input type="text" className="todo5 todo descriptionInput" defaultValue={temp[4].description} value={temp[4].description} onChange={todoChange5}></input>    
            </div>
        </div>
    );
}

export default TodoList;