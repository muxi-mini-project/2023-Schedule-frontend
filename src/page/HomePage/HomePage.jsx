// import baseLayer from '../../img/HomePage/BaseLayer.png';
// import bulletinBoard from '../../img/HomePage/BulletinBoard.png';
// import calendar from '../../img/HomePage/Calendar.png';
// import garbageCan from '../../img/HomePage/GarbageCan.png';
// import paperAirplane from '../../img/HomePage/PaperAirplane.png';
// import pottedPlant from '../../img/HomePage/PottedPlant.png';
// import todoList from '../../img/HomePage/TodoList.png';

import LoadingAnimetion from '../../components/LoadingAnimation/LoadingAnimation';
import {getJSON} from '../../api/fetch';
import {Link, useNavigate} from "react-router-dom";
import './HomePage.css';


const HomePage = () => {
    let navigate = useNavigate();

    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        getJSON("index", 0).then((res) => {if(res.code !== 200) navigate("/");});

        let time = new Date();
        let month = time.getMonth()+1;
        let date = time.getDate();
        let timing = month + '.' + date;

        return(
            <div className="view">
                <div className="view-box">
                    <div className="view-content">
                        <img alt='' src={"https://s2.loli.net/2023/03/17/8GjBySD6fYPsXaO.png"} className="baseLayer"/>
                        <Link to="/SelectTime"><img alt='' src={"https://s2.loli.net/2023/03/17/G1HupeWIPtdJ5Nr.png"} className="bulletinBoard"/></Link>
                        <Link to="/Calendar">
                            <img alt='' src={"https://s2.loli.net/2023/03/17/7tHcw1boMqdsQNO.png"} className="calendar item"/>
                            <input type="text" className="timing" defaultValue={timing}></input>
                        </Link>
                        <Link to="/GarbageCan"><img alt='' src={"https://s2.loli.net/2023/03/17/OZA3BhUEILtK9Fv.png"} className="garbageCan item"/></Link>
                        <img alt='' src={"https://s2.loli.net/2023/03/17/nKemkzO3x6VsapT.png"} className="paperAirplane item"/>
                        <img alt='' src={"https://s2.loli.net/2023/03/17/fHzrVme5tKNkZRc.png"} className="pottedPlant1 item"/>
                        <Link to="/TodoList"><img alt='' src={"https://s2.loli.net/2023/03/17/cRrysdVl5OJSwjk.png"} className="todoList item"/></Link>
                        <LoadingAnimetion/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;