import React, { useEffect, useState } from 'react'
import './Calendar.css'
import Item from '../component/item';
import{nanoid} from 'nanoid'

export default  function Calendar(){

  function postData(url, data) {
    return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {								
            'content-type': 'application/json'	,
          	//'Authorization':token
        },												
        method: 'POST',						//也可以是GET，PUT,DELETE等
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    })
        .then(response => response.json())
}


  const [todos,setTodos] = useState([])

  useEffect( () =>{
    fetch('http://127.0.0.1:4523/m1/2128895-0-default/board?id=')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
      window.firstData = myJson;
      setTodos(window.firstData)
    });
  },[]);

  

  const addToDo=(todoObj)=>{
    const newTodos =[todoObj,...todos]
    setTodos(newTodos)
    postData('http://127.0.0.1:4523/m1/2128895-0-default/calendar/write',todoObj)
    .then(data => console.log(data))
    .catch(error => console.error('Error',error))
  }
  const handleKeyUp = (event)=>{
    const {keyCode,target}=event
    if(keyCode !== 13) return
    if(target.value.trim()==='')return
    const todoObj = {userId:nanoid(),content:target.value,done:false}
    addToDo(todoObj)
    target.value=''
  }

  const updateTodo=(userId,done)=>{
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.userId===userId)return {...todoObj,done}
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
					return <Item key={todo.userId} {...todo} updateTodo={updateTodo} />
				})
			}
                </ul>
    </div>
    </div>
  )
}
