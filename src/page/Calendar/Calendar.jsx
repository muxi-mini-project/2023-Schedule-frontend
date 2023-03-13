import React, { useEffect, useState } from 'react'
import './Calendar.css'
import Item from '../../components/item';
import{nanoid} from 'nanoid'
import { postData,postDataa, getJSON, putData } from "../../api/fetch";

export default  function Calendar(){


  const [todos,setTodos] = useState([])

  useEffect( () =>{
    getJSON('calendar')
    .then(data => console.log(data))
    .catch(error => console.error('Error',error))
  },[]);

  

  const addToDo=(todoObj)=>{
    const newTodos =[todoObj,...todos]
    setTodos(newTodos)
    console.log(todoObj)
  }
  const handleKeyUp = (event)=>{
    const {keyCode,target}=event
    if(keyCode !== 13) return
    if(target.value.trim()==='')return
    const todoObj = {id:nanoid(),schedule:target.value};
    addToDo(todoObj)
    target.value=''
    postDataa('calendar/write',todoObj)
    .then(data => console.log(data))
    .catch(error => console.error('Error',error))
  }

  const updateTodo=(userId,done)=>{
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.userId===userId)return {...todoObj,done}
      else return todoObj
    })
    setTodos(newTodos)
  }

const [isClicked,setClick]=useState(false)
const [isAlldone,setAllDone]=useState(true)

  const handleClick =(target)=>{
    if (todos.length!=0 && isAlldone==true){
    setTodos([]);
    setClick(true);
    updateCalendar(target);
    }
    else return ;
  }

  useEffect(()=>{
    setAllDone(true)
    todos.map((todo)=>{ if(todo.done!=true){setAllDone(false)}  })
  },[todos])

 const updateCalendar= (target)=>{
  if (target) {
    setTimeout(function () {
      setClick(false)
    }, 800)
  } else {
    return;
  }

 }
    const time = new Date();
    const month = time.getMonth() + 1 ;
    const day = time.getDate();
    const days = day.toString();

      if(window.innerWidth > window.innerHeight){
          return(
              <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
          );
      }
      else{
          let bodyStyle = document.body.style;
          bodyStyle.zoom = '';}

  return (
    <div className='body'>
    <div className='book'>
      <div  className={isClicked?'tear':'page'} onClick={handleClick}>
      <div className='time'>
      <font>{time.getMonth()<10?'0':''}</font><font>{month}</font>月<font>{time.getDay()<10?'0':days[0]}</font><font>{time.getDay()<10?days[0]:days[1]}</font>日
      </div>
      <input id="inputbox" placeholder="今天要做什么呢？" onKeyUp={handleKeyUp}/>
                <ul>
                {
				todos.map((todo)=>{
					return <Item key={todo.userId} {...todo} updateTodo={updateTodo} />
				})
			}
                </ul>
    </div>
    </div>
    </div>
  )
}
