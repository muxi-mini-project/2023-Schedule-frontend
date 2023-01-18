import {HashRouter,Route,Switch} from "react-router-dom";
import homePage from "./page/home page"
import todoList from "./page/todo list"


export default function App(){
    return(
        <HashRouter>
            <Switch>
                <homePage>
                    <Route exact path="/" component={homePage}/>
                    <Route path="/todoList" component={todoList}/>
                </homePage>
            </Switch>
        </HashRouter>
    );   
}