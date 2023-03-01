import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./page/Login";
import HomePage from "./page/HomePage";
import TodoList from "./page/TodoList";
import GarbageCan from "./page/GarbageCan";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/TodoList" element={<TodoList/>}/>
                <Route path="/GarbageCan" element={<GarbageCan/>}/>
            </Routes>
        </BrowserRouter>
    );
}