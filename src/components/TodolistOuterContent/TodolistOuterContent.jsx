// import check from "../../img/Todolist/check.png";
// import checkBox from "../../img/Todolist/CheckBox.png";
// import line from '../../img/Todolist/line.png';
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
				<img src={"https://s2.loli.net/2023/03/17/dtMEvfJCDWpU5ko.png"} alt="" className={`check ${todo.Done ? "a" : "b"}`}/>
				<label className="checkLabel" htmlFor={todo.SchId}>
					<img src={"https://s2.loli.net/2023/03/17/qpjQRSanE5Cr2OD.png"} alt=""/>
				</label>
				<input id={todo.SchId} type="checkbox" className="checker" defaultChecked={todo.Done}
				       onChange={changeChecked}/>
			</div>
			<div className="InputBox">
				<input type="text" className={`todo descriptionInput ${todo.Done ? "done" : ""}`} defaultValue={todo.Content}
				       onKeyUp={changeContent}/>
				<div className="line">
					<img src={"https://s2.loli.net/2023/03/17/ga6Ucx75WEjIkfb.png"} alt=""/>
				</div>
			</div>
		</div>
	)
}


const TodolistOuterContent = () => {
	const [todos, setTodos] = useState([])
	useEffect(() => {
		getJSON("calendar", 1)
			.then((res) => {
				setTodos(res.schedule);
				if(res.schedule.length === 0){
					postData("calendar/write", {schedule: "todo...", SchId: `${res.schedule.length}`}, 1);
				}
			});
	}, []);

	function updateTodo(id, Content){
		const newTodos = todos.map((todo) => {
			if (todo.SchId === id) return {...todo, Content};
			else return todo;
		});
		console.log(id)
		console.log(Content)
		postData("calendar/write", {schedule: Content, SchId: id}, 1);
		setTodos(newTodos);
		let len = (todos.length-1).toString();
		if(len === id){
			let newId = (parseInt(id, 10)+1).toString();
			postData("calendar/write", {schedule: "todo...", SchId: newId}, 1);
			let date = new Date();
			setTodos([...newTodos,{
				"Year": date.getFullYear(),
				"Month": date.getMonth(),
				"Day": date.getDate(),
				"UserId": todos[0].UserId,
				"Content": "todo...",
				"Done": false,
				"SchId": `${todos.length}`
			}]);
		}
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