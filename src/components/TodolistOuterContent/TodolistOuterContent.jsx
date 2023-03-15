import check from "../../img/Todolist/check.png";
import checkBox from "../../img/Todolist/CheckBox.png";
import line from '../../img/Todolist/line.png';
import {postData, getJSON} from "../../api/fetch";
import {useState} from "react";
import "./TodolistOuterContent.css";


function TodolistItem(props){
    const {todo,checked,updateTodo} = props
    const changeChecked = (e) => {
        checked(todo.SchId,e.target.checked);
    }
    const changeContent = (e) => {
        updateTodo(todo.SchId,e.target.value);
    }

    return(
        <div className="itemBox" >
            <div className="CheckBox">
                <img src={check} alt="" className={`check ${todo.Done? "a" : "b"}`}/>
                <label className="checkLabel" htmlFor={todo.SchId}>
                    <img src={checkBox} alt="" />
                </label>
                <input id={todo.SchId} type="checkbox" className="checker" defaultChecked={todo.Done} onChange={changeChecked}></input>
            </div>
            <div className="InputBox">
                <input type="text" className={`todo descriptionInput ${todo.Done? "done":""}`} defaultValue={todo.Content} onChange={changeContent}/>
                <div className="line">
                    <img src={line} alt="" />
                </div>
            </div>
        </div>
    )
}


const TodolistOuterContent = () => {
    const [todos,setTodos] = useState([])
    getJSON("calendar", 1)
        .then((res) => {setTodos(res.schedule);});


    function updateTodo(id,Content){
        const newTodos = todos.map((todo)=>{
            if(todo.SchId === id) return{...todo,Content};
            else return todo;
        })
        let d = new Date();
        postData("calendar/write", {"schedule": {
            "Year": d.getFullYear(),
            "Month": d.getMonth()+1,
            "Day": d.getDate(),
            "UserId": todos[id].UserId,
            "Content": Content,
            "Done": todos[id].Done,
            "SchId": id
        }, "SchId": id}, 1).then((res) => {console.log(res)});
        setTodos(newTodos);
    }
    function checked(id,Done){
        const newTodos = todos.map((todo)=>{
            if(todo.SchId === id) return{...todo,Done};
            else return todo;
        })
        postData("calendar/check", {"SchId": id}, 1)
            .then((res) => {console.log(res)});
        setTodos(newTodos);
    }
    

    return(
        <div className="TodolistOuterContent">
            <div className="TodolistContent">
                {todos.map(todo => {
                    return(
                        <TodolistItem todo={todo} checked={checked} updateTodo={updateTodo}/>
                    );
                })}
            </div>
        </div>
    );
}

export default TodolistOuterContent;