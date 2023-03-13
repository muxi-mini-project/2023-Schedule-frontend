import check from "../../img/Todolist/check.png";
import checkBox from "../../img/Todolist/CheckBox.png";
import paperContent from "../../img/Todolist/PaperContent.png";

import {postData, getJSON, putData} from "../../api/fetch";
import {useState} from "react";
import "./TodolistOuterContent.css";


const TodolistOuterContent = () => {
    const [checkGet, setCheckGet] = useState([]);
    getJSON("calendar", 1).then((res) => {setCheckGet(res.schedule);});
    console.log(checkGet)


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
        postData("calendar/write", { "Content": e.target.value, "Schid": id }, 1);
    }
    function checked(id, e){
        updateTodo(todos[id], "completed", e.target.checked);
        setTodos(todos);
        window.location.reload();
        putData("calendar/check/", { "Schid": id }, 1);
    }
    
    return(
        <div className="TodolistOuterContent">
            <div className="TodolistContent">
                <img alt='' src={paperContent} className="paperContent" />
                <img alt='' src={checkBox} className="checkBox" />
                <img alt='' src={check} className={`check1 check ${checkGet[0].Done ? "a" : "b"}`} />
                <img alt='' src={check} className={`check2 check ${checkGet[1].Done ? "a" : "b"}`} />
                <img alt='' src={check} className={`check3 check ${checkGet[2].Done ? "a" : "b"}`} />
                <img alt='' src={check} className={`check4 check ${checkGet[3].Done ? "a" : "b"}`} />
                <img alt='' src={check} className={`check5 check ${checkGet[4].Done ? "a" : "b"}`} />
                <input type="checkbox" className="check1 checker" Checked={checkGet[0].Done} onChange={checked.bind(this, 0)}></input>                            
                <input type="text" className="todo1 todo descriptionInput" Value={checkGet[0].Content} onChange={todoChange.bind(this, 0)}></input>
                <input type="checkbox" className="check2 checker" Checked={checkGet[1].Done} onChange={checked.bind(this, 1)}></input>
                <input type="text" className="todo2 todo descriptionInput" Value={checkGet[1].Content} onChange={todoChange.bind(this, 1)}></input>
                <input type="checkbox" className="check3 checker" Checked={checkGet[2].Done} onChange={checked.bind(this, 2)}></input>
                <input type="text" className="todo3 todo descriptionInput" Value={checkGet[2].Content} onChange={todoChange.bind(this, 2)}></input>
                <input type="checkbox" className="check4 checker" Checked={checkGet[3].Done} onChange={checked.bind(this, 3)}></input>
                <input type="text" className="todo4 todo descriptionInput" Value={checkGet[3].Content} onChange={todoChange.bind(this, 3)}></input>
                <input type="checkbox" className="check5 checker" Checked={checkGet[4].Done} onChange={checked.bind(this, 4)}></input>
                <input type="text" className="todo5 todo descriptionInput" Value={checkGet[4].Content} onChange={todoChange.bind(this, 4)}></input>
            </div>
            <div className="TodolistContent">
                <img alt='' src={paperContent} className="paperContent" />
                <img alt='' src={checkBox} className="checkBox" />
                <img alt='' src={check} className={`check1 check ${checkGet[5].Done ? "a" : "b"}`} />
                <img alt='' src={check} className={`check2 check ${checkGet[6].Done ? "a" : "b"}`} />
                <img alt='' src={check} className={`check3 check ${checkGet[7].Done ? "a" : "b"}`} />
                <img alt='' src={check} className={`check4 check ${checkGet[8].Done ? "a" : "b"}`} />
                <img alt='' src={check} className={`check5 check ${checkGet[9].Done ? "a" : "b"}`} />
                <input type="checkbox" className="check1 checker" Checked={checkGet[5].Done} onChange={checked.bind(this, 5)}></input>                            
                <input type="text" className="todo1 todo descriptionInput" Value={checkGet[5].Content} onChange={todoChange.bind(this, 5)}></input>
                <input type="checkbox" className="check2 checker" Checked={checkGet[6].Done} onChange={checked.bind(this, 6)}></input>
                <input type="text" className="todo2 todo descriptionInput" Value={checkGet[6].Content} onChange={todoChange.bind(this, 6)}></input>
                <input type="checkbox" className="check3 checker" Checked={checkGet[7].Done} onChange={checked.bind(this, 7)}></input>
                <input type="text" className="todo3 todo descriptionInput" Value={checkGet[7].Content} onChange={todoChange.bind(this, 7)}></input>
                <input type="checkbox" className="check4 checker" Checked={checkGet[8].Done} onChange={checked.bind(this, 8)}></input>
                <input type="text" className="todo4 todo descriptionInput" Value={checkGet[8].Content} onChange={todoChange.bind(this, 8)}></input>
                <input type="checkbox" className="check5 checker" Checked={checkGet[9].Done} onChange={checked.bind(this, 9)}></input>
                <input type="text" className="todo5 todo descriptionInput" Value={checkGet[9].Content} onChange={todoChange.bind(this, 9)}></input>
            </div>           
        </div>
    );
}

export default TodolistOuterContent;