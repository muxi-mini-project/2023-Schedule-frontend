import React, { useState } from 'react'
import './Calendar.css'
import Item from '../component/item';
import{nanoid} from 'nanoid'



export default function Calendar(){

  const [todos,setTodos] = useState([])

  const addToDo=(todoObj)=>{
    const newTodos =[todoObj,...todos]
    setTodos(newTodos)
  }
  const handleKeyUp = (event)=>{
    const {keyCode,target}=event
    if(keyCode !== 13) return
    if(target.value.trim()==='')return
    const todoObj = {id:nanoid(),name:target.value,done:false}
    addToDo(todoObj)
    target.value=''
  }

  const updateTodo=(id,done)=>{
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id===id)return {...todoObj,done}
      else return todoObj
    })
    setTodos(newTodos)
  }
  

  
    const time = new Date();
    const month = time.getMonth() + 1 ;
    const day = time.getDate();
    const days = day.toString()
  return (
    <div className='body'>
    <div className='book'>
      <div className='time'>
      <font>{time.getMonth()<10?'0':''}</font><font>{month}</font>月<font>{days[0]}</font><font>{days[1]}</font>日
      </div>
      <input id="inputbox" placeholder="今天要做什么呢？" onKeyUp={handleKeyUp}/>
                <ul>
                {
				todos.map((todo)=>{
					return <Item key={todo.id} {...todo} updateTodo={updateTodo} />
				})
			}
                </ul>
    </div>
    </div>
  )
}
