import check from "../../img/Todolist/check.png";
import checkBox from "../../img/Todolist/CheckBox.png";
import paperContent from "../../img/Todolist/PaperContent.png";

import {postData, getJSON, putData} from "../../api/fetch";
import {useState} from "react";
import "./TodolistOuterContent.css";


const TodolistOuterContent = () => {
    let CheckGet = getJSON("calendar");
    console.log(CheckGet);
    let CompletePut = putData("calendar/check/", "<content>");
    let WritePost = postData("calendar/write", { "content": "" });


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
    if (todos.length === 0){
        for (let i = 0; i < 10; i++) {
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
    function todoChange(id, e){
        updateTodo(todos[id], "description", e.target.value);
        setTodos(todos);
    }
    function checked(id, e){
        updateTodo(todos[id], "completed", e.target.checked);
        setTodos(todos);
        window.location.reload();
    }
    
    return(
        <div className="TodolistOuterContent">
            <div className="TodolistContent">
                <img alt='' src={paperContent} className="paperContent" />
                <img alt='' src={checkBox} className="checkBox" />
                <img alt='' src={check} className={`check1 check ${temp[0].completed ? "a" : "b"}`} />
                <img alt='' src={check} className={`check2 check ${temp[1].completed ? "a" : "b"}`} />
                <img alt='' src={check} className={`check3 check ${temp[2].completed ? "a" : "b"}`} />
                <img alt='' src={check} className={`check4 check ${temp[3].completed ? "a" : "b"}`} />
                <img alt='' src={check} className={`check5 check ${temp[4].completed ? "a" : "b"}`} />
                <input type="checkbox" className="check1 checker" defaultChecked={temp[0].completed} onChange={checked.bind(this, 0)}></input>                            
                <input type="text" className="todo1 todo descriptionInput" defaultValue={temp[0].description} onChange={todoChange.bind(this, 0)}></input>
                <input type="checkbox" className="check2 checker" defaultChecked={temp[1].completed} onChange={checked.bind(this, 1)}></input>
                <input type="text" className="todo2 todo descriptionInput" defaultValue={temp[1].description} onChange={todoChange.bind(this, 1)}></input>
                <input type="checkbox" className="check3 checker" defaultChecked={temp[2].completed} onChange={checked.bind(this, 2)}></input>
                <input type="text" className="todo3 todo descriptionInput" defaultValue={temp[2].description} onChange={todoChange.bind(this, 2)}></input>
                <input type="checkbox" className="check4 checker" defaultChecked={temp[3].completed} onChange={checked.bind(this, 3)}></input>
                <input type="text" className="todo4 todo descriptionInput" defaultValue={temp[3].description} onChange={todoChange.bind(this, 3)}></input>
                <input type="checkbox" className="check5 checker" defaultChecked={temp[4].completed} onChange={checked.bind(this, 4)}></input>
                <input type="text" className="todo5 todo descriptionInput" defaultValue={temp[4].description} onChange={todoChange.bind(this, 4)}></input>
            </div>
            <div className="TodolistContent">
                <img alt='' src={paperContent} className="paperContent" />
                <img alt='' src={checkBox} className="checkBox" />
                <img alt='' src={check} className={`check1 check ${temp[5].completed ? "a" : "b"}`} />
                <img alt='' src={check} className={`check2 check ${temp[6].completed ? "a" : "b"}`} />
                <img alt='' src={check} className={`check3 check ${temp[7].completed ? "a" : "b"}`} />
                <img alt='' src={check} className={`check4 check ${temp[8].completed ? "a" : "b"}`} />
                <img alt='' src={check} className={`check5 check ${temp[9].completed ? "a" : "b"}`} />
                <input type="checkbox" className="check1 checker" defaultChecked={temp[5].completed} onChange={checked.bind(this, 5)}></input>                            
                <input type="text" className="todo1 todo descriptionInput" defaultValue={temp[5].description} onChange={todoChange.bind(this, 5)}></input>
                <input type="checkbox" className="check2 checker" defaultChecked={temp[6].completed} onChange={checked.bind(this, 6)}></input>
                <input type="text" className="todo2 todo descriptionInput" defaultValue={temp[6].description} onChange={todoChange.bind(this, 6)}></input>
                <input type="checkbox" className="check3 checker" defaultChecked={temp[7].completed} onChange={checked.bind(this, 7)}></input>
                <input type="text" className="todo3 todo descriptionInput" defaultValue={temp[7].description} onChange={todoChange.bind(this, 7)}></input>
                <input type="checkbox" className="check4 checker" defaultChecked={temp[8].completed} onChange={checked.bind(this, 8)}></input>
                <input type="text" className="todo4 todo descriptionInput" defaultValue={temp[8].description} onChange={todoChange.bind(this, 8)}></input>
                <input type="checkbox" className="check5 checker" defaultChecked={temp[9].completed} onChange={checked.bind(this, 9)}></input>
                <input type="text" className="todo5 todo descriptionInput" defaultValue={temp[9].description} onChange={todoChange.bind(this, 9)}></input>
            </div>           
        </div>
    );
}

export default TodolistOuterContent;