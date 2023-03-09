import {BrowserRouter, Routes, Route} from "react-router-dom";
import Calender from "./page/Calendar/Calendar";
import Login from "./page/Login/Login";
import HomePage from "./page/HomePage/HomePage";
import TodoList from "./page/TodoList/TodoList";
import GarbageCan from "./page/GarbageCan/GarbageCan";
import BulletinBoard from "./page/BulletinBoard/BulletinBoard";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Calendar" element={<Calender />} />
                <Route path="/BulletinBoard" element={<BulletinBoard />} />
                <Route path="/" element={<Login/>}/>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/TodoList" element={<TodoList/>}/>
                <Route path="/GarbageCan" element={<GarbageCan/>}/>
            </Routes>
        </BrowserRouter>
    );
}