import { Navigate } from "react";
import HomePage from "../page/HomePage";
import TodoList from "../page/TodoList";

const router = [
    {path: '/', element: <Navigate to="/HomePage" />},
    {path: '/HomePage', element: <HomePage />},
    {path: '/TodoList', element: <TodoList />}
];

export default router;