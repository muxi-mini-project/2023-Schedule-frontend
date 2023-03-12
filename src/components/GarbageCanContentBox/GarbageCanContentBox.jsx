import check from '../../img/GarbageCan/Check2.png';
import crumpledPaperContent from '../../img/GarbageCan/CrumpledPaperContent.png';

import {getRecycleBin} from "../../api/fetch";
import {useState} from "react";
import './GarbageCanContentBox.css';


const GarbageCanContentBox = (monthF, dateF, m) => {
    const [pastTodos, setPastTodos] = useState([]);
    let date = new Date();
    getRecycleBin("crash", date.getFullYear(), monthF, dateF)
        .then((res) => {setPastTodos(res.schedule);});

    return(
        <div className="contentBox">
            <img alt='' src={crumpledPaperContent} className="" />
            <img alt='' src={check} className="pastChecker1" />
            <img alt='' src={check} className="pastChecker2" />
            <img alt='' src={check} className="pastChecker3" />
            <img alt='' src={check} className="pastChecker4" />
            <img alt='' src={check} className="pastChecker5" />
            <input type="checkbox" className="pastChecker1 pastChecker"></input>
            <input type="checkbox" className="pastChecker2 pastChecker"></input>
            <input type="checkbox" className="pastChecker3 pastChecker"></input>
            <input type="checkbox" className="pastChecker4 pastChecker"></input>
            <input type="checkbox" className="pastChecker5 pastChecker"></input>
            <input type="text" className="pastTodo1 pastTodo" defaultValue={pastTodos[0+m]}></input>
            <input type="text" className="pastTodo2 pastTodo" defaultValue={pastTodos[1+m]}></input>
            <input type="text" className="pastTodo3 pastTodo" defaultValue={pastTodos[2+m]}></input>
            <input type="text" className="pastTodo4 pastTodo" defaultValue={pastTodos[3+m]}></input>
            <input type="text" className="pastTodo5 pastTodo" defaultValue={pastTodos[4+m]}></input>
        </div>
    );
}

export default GarbageCanContentBox;