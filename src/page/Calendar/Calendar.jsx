import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { postDataa, getJSON, deleteAll } from "../../api/fetch";
import BGM from 'react-awesome-snippets-bgm';
import CalendarBGM from '../../assets/bgm/Calendar.mp3';
import Item from '../../components/item';
import LoadingAnimetion from '../../components/LoadingAnimation/LoadingAnimation';
import './Calendar.css';


export default function Calendar() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getJSON('calendar', 1)
      .then(data => {
        if (data.schedule.length === 0) setTodos([]);
        else setTodos(data.schedule)
      })
      .catch(error => alert('获取任务失败，请检查登录状态。错误信息：' + error))
  }, []);

  const addToDo = (todoObj) => {
    const newTodos = [todoObj, ...todos]
    setTodos(newTodos)
  }
  const handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === '') return;
    const todoObj = { SchId: nanoid(), Content: target.value };
    addToDo(todoObj);
    target.value = '';
    postDataa('calendar/write', todoObj)
      .then(data => console.log(data))
      .catch(error => alert('error', error));
  }

  const updateTodo = (SchId, Done) => {
    const newTodos = todos.map((todoObj) => {
      if (todoObj.SchId === SchId) {
        return { ...todoObj, Done };
      }
      else return todoObj;
    })
    setTodos(newTodos);
  }

  const [isClicked, setClick] = useState(false);
  const [isAlldone, setAllDone] = useState(true);

  const handleClick = (target) => {
    if (todos.length !== 0 && isAlldone === true) {
      setTodos([])
      deleteAll('calendar/deleteAll')
        .then(data => console.log(data))
        .catch(error => alert('error', error));
      setClick(true);
      updateCalendar(target);
    }
    else return;
  }

  const deleteOne = (id) => {
    const newTodos = todos.filter((todoObj) => {
      return todoObj.SchId !== id
    })
    setTodos(newTodos)
  }

  useEffect(() => {
    setAllDone(true);
    todos.map((todo) => { if (todo.Done !== true) { setAllDone(false); } });
  }, [todos]);

  const updateCalendar = (target) => {
    if (target) {
      setTimeout(function () {
        setClick(false);
      }, 800);
    }
    else { return; }
  }

  const time = new Date();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const days = day.toString();
  const months = month.toString();

  if (window.innerWidth > window.innerHeight) {
    return (
      <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
    );
  }
  else {
    let bodyStyle = document.body.style;
    bodyStyle.zoom = window.innerWidth / 750;
    return (
      <div className="view">
        <BGM src={CalendarBGM} loop={true} autoplay={true}></BGM>
        <div className="view-box">
          <div className="view-content">
            <div className='body'>
              <div className='hint0'>hint:全部完成后点击可撕下日历哦~</div>
              <Link to='/HomePage'><img src="https://s2.loli.net/2023/03/19/ub3vaky7ULtnH9E.png" className='turnback' alt="返回" /></Link>
              <div className='book'>
                <div className={isClicked ? 'tear' : 'page'} onClick={handleClick}>
                  <div className='time'>
                    <font>{time.getMonth() < 10 ? '0' : months[0]}</font><font>{time.getMonth() < 10 ? months[0] : months[1]}</font>月<font>{days < 0 ? '0' : days[0]}</font><font>{days < 0 ? days[0] : days[1]}</font>日
                  </div>
                  <input id="inputbox" placeholder="今天要做什么呢？" onKeyUp={handleKeyUp} />
                  <ul>{
                    todos.map((todo) => {
                      return <Item key={todo.SchId} {...todo} updateTodo={updateTodo} deleteOne={deleteOne} />
                    })
                  }</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoadingAnimetion />
      </div>
    );
  }
}
