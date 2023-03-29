import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Calender from "./page/Calendar/Calendar";
import Login from "./page/Login/Login";
import HomePage from "./page/HomePage/HomePage";
import TodoList from "./page/TodoList/TodoList";
import GarbageCan from "./page/GarbageCan/GarbageCan";
import BulletinBoard from "./page/BulletinBoard/BulletinBoard";
import SelectTime from "./page/SelectTime/SelectTime"
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Calendar" element={<Calender />} />
          <Route path="/BulletinBoard" element={<BulletinBoard />} />
          <Route path="/" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/GarbageCan" element={<GarbageCan />} />
          <Route path="/SelectTime" element={<SelectTime />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
