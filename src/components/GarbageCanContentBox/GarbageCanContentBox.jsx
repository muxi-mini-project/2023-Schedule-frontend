import './GarbageCanContentBox.css';


function PastTodolistItem(todo){
    return(
        <div className="pastItemBox" >
            <div className="pastCheckBox">
                <img src={"https://s2.loli.net/2023/03/17/3WSN7vdAUEJxXgP.png"} alt="" className={`pastCheck ${todo.todo.Done? "a" : "b"}`}/>
                <label className="pastCheckLabel" htmlFor={todo.SchId}>
                    <img src={"https://s2.loli.net/2023/03/17/vFxMpzslYwd6QDq.png"} alt=""/>
                </label>
            </div>
            <div className="pastInputBox">
                <input type="text" className={`pastTodo pastDescriptionInput ${todo.todo.Done? "done":""}`} defaultValue={todo.todo.Content} readOnly={true}/>
                <div className="pastLine">
                    <img src={"https://s2.loli.net/2023/03/17/5TBmfGcWl21dJp9.png"} alt=""/>
                </div>
            </div>
        </div>
    );
}


const GarbageCanContentBox = (props) => {
    const {pastTodos} = props;
    console.log(pastTodos)
    return(
        <div className="GarbageCanContentBox">
            <div className="GarbageCanContent">
                {pastTodos.map(todo => {
                    return(
                        <PastTodolistItem todo={todo}/>
                    );
                })}
            </div>
        </div>
    );
}

export default GarbageCanContentBox;