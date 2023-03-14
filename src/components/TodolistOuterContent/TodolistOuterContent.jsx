import check from "../../img/Todolist/check.png";
import checkBox from "../../img/Todolist/CheckBox.png";
import paperContent from "../../img/Todolist/PaperContent.png";

import {postData, getJSON, putData} from "../../api/fetch";
import {useState, useLayoutEffect} from "react";
import "./TodolistOuterContent.css";


const TodolistOuterContent = () => {
    // 本地
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


    // 后端
    let checkGs = getCheckGs();
    const [checkGet, setCheckGet] = useState(checkGs);
    function getCheckGs(){
        const value = localStorage.getItem("checkG") || "[]";
        return JSON.parse(value);
    }
    function setCheckGs(checkGs){
        const checkGsJson = JSON.stringify(checkGs);
        localStorage.setItem("checkG", checkGsJson);
    }
    if (checkGs.length === 0){
        for (let i = 0; i < 10; i++) {
            checkGs.unshift({
                Content: "",
                Day: 0,
                Done: false,
                Month: 0,
                SchId: "",
                UserId: "",
                Year: 0
            });
            setCheckGs(checkGs);
        }
    }
    useLayoutEffect(() => {
        getJSON("calendar", 1)
            .then((res) => {
                setCheckGet(res.schedule);
            });
    }, []);
    console.log(checkGet)
    setCheckGs(checkGet);
     


    function updateTodo(todo, key, value){
        todo[key] = value;
        setTodos(todos);
        setCheckGs(checkGs); 
    }
    function todoChange(id, e){
        updateTodo(todos[id], "description", e.target.value);
        setTodos(todos);

        postData("calendar/write", { "Content": e.target.value, "Schid": id }, 1);
        updateTodo(checkGs[id], "Content", e.target.value);
        setCheckGs(checkGs);       
    }
    function checked(id, e){
        updateTodo(todos[id], "completed", e.target.checked);
        setTodos(todos);
        window.location.reload();
        // putData("calendar/check/", { "Schid": id }, 1);
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
                <input type="checkbox" className="check1 checker" defaultChecked={checkGet[0].Done} onChange={checked.bind(this, 0)}></input>                            
                <input type="text" className="todo1 todo descriptionInput" defaultValue={checkGet[0].Content} onChange={todoChange.bind(this, 0)}></input>
                <input type="checkbox" className="check2 checker" defaultChecked={checkGet[1].Done} onChange={checked.bind(this, 1)}></input>
                <input type="text" className="todo2 todo descriptionInput" defaultValue={checkGet[1].Content} onChange={todoChange.bind(this, 1)}></input>
                <input type="checkbox" className="check3 checker" defaultChecked={checkGet[2].Done} onChange={checked.bind(this, 2)}></input>
                <input type="text" className="todo3 todo descriptionInput" defaultValue={checkGet[2].Content} onChange={todoChange.bind(this, 2)}></input>
                <input type="checkbox" className="check4 checker" defaultChecked={checkGet[3].Done} onChange={checked.bind(this, 3)}></input>
                <input type="text" className="todo4 todo descriptionInput" defaultValue={checkGet[3].Content} onChange={todoChange.bind(this, 3)}></input>
                <input type="checkbox" className="check5 checker" defaultChecked={checkGet[4].Done} onChange={checked.bind(this, 4)}></input>
                <input type="text" className="todo5 todo descriptionInput" defaultValue={checkGet[4].Content} onChange={todoChange.bind(this, 4)}></input>
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
                <input type="text" className="todo1 todo descriptionInput" Value={temp[5].description} onChange={todoChange.bind(this, 5)}></input>
                <input type="checkbox" className="check2 checker" defaultChecked={temp[6].completed} onChange={checked.bind(this, 6)}></input>
                <input type="text" className="todo2 todo descriptionInput" Value={temp[6].description} onChange={todoChange.bind(this, 6)}></input>
                <input type="checkbox" className="check3 checker" defaultChecked={temp[7].completed} onChange={checked.bind(this, 7)}></input>
                <input type="text" className="todo3 todo descriptionInput" Value={temp[7].description} onChange={todoChange.bind(this, 7)}></input>
                <input type="checkbox" className="check4 checker" defaultChecked={temp[8].completed} onChange={checked.bind(this, 8)}></input>
                <input type="text" className="todo4 todo descriptionInput" Value={temp[8].description} onChange={todoChange.bind(this, 8)}></input>
                <input type="checkbox" className="check5 checker" defaultChecked={temp[9].completed} onChange={checked.bind(this, 9)}></input>
                <input type="text" className="todo5 todo descriptionInput" Value={temp[9].description} onChange={todoChange.bind(this, 9)}></input>
            </div>           
        </div>
    );
}

export default TodolistOuterContent;