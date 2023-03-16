import check from "../../img/Todolist/check.png";
import checkBox from "../../img/Todolist/CheckBox.png";
import line from '../../img/Todolist/line.png';
import {postData, getJSON} from "../../api/fetch";
import {useState, useEffect} from "react";
import "./TodolistOuterContent.css";


function TodolistItem(props) {
	const {todo, checked, updateTodo} = props
	const changeChecked = (e) => {
		checked(todo.SchId, e.target.checked);
	}
	const changeContent = (e) => {
		if(e.keyCode !== 13) return ;
    	if(e.target.value.trim()==='') return ;
		updateTodo(todo.SchId, e.target.value);
	}
	
	return (
		<div className="itemBox">
			<div className="CheckBox">
				<img src={check} alt="" className={`check ${todo.Done ? "a" : "b"}`}/>
				<label className="checkLabel" htmlFor={todo.SchId}>
					<img src={checkBox} alt=""/>
				</label>
				<input id={todo.SchId} type="checkbox" className="checker" defaultChecked={todo.Done}
				       onChange={changeChecked}></input>
			</div>
			<div className="InputBox">
				<input type="text" className={`todo descriptionInput ${todo.Done ? "done" : ""}`} defaultValue={todo.Content}
				       onKeyUp={changeContent}/>
				<div className="line">
					<img src={line} alt=""/>
				</div>
			</div>
		</div>
	)
}


const TodolistOuterContent = () => {
	const [todos, setTodos] = useState([])
	useEffect(() => {
		getJSON("calendar", 1)
			.then((res) => {setTodos(res.schedule);});
	}, []);
	
	
	function updateTodo(id, Content){
		const newTodos = todos.map((todo) => {
			if (todo.SchId === id) return {...todo, Content};
			else return todo;
		});
		postData("calendar/write", {schedule: Content, SchId: id}, 1);
		setTodos(newTodos);
		let space = "";
		const addTodo = todos.map((todo) => {
			if(todos.length-1 === id){
				postData("calendar/write", {schedule: "", SchId: id+1}, 1);
				return {...todo, space};
			} 
		});
		setTodos(addTodo);
	}	
	function checked(id, Done){
		const newTodos = todos.map((todo) => {
			if (todo.SchId === id) return {...todo, Done};
			else return todo;
		})
		postData("calendar/check", {SchId: id}, 1);
		setTodos(newTodos);
	}
	
	
	return (
		<div className="TodolistOuterContent">
			<div className="TodolistContent">
				{todos.map(todo => {
					return (
						<TodolistItem todo={todo} checked={checked} updateTodo={updateTodo}/>
					);
				})}
			</div>
		</div>
	);
}

export default TodolistOuterContent;