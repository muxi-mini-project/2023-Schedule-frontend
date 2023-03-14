import baseLayer from '../../img/Login/BaseLayer.png';
import textBox from '../../img/Login/TextBox.png';
import studentID from '../../img/Login/StudentID.png';
import password from '../../img/Login/Password.png';
import login from '../../img/Login/Login.png';
import logo from '../../img/Login/Logo.png';
import pottedPlant from '../../img/Login/PottedPlant.png';
import bacterium from '../../img/Login/Bacterium.png';

import {postData} from '../../api/fetch';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import './Login.css';


const Login = () => {
    const [uid, SetUid] = useState("");
    const [pw, SetPW] = useState("");
    let navigate = useNavigate();

    if(localStorage.getItem("token") == null) localStorage.setItem("token", [""]);
    // if(localStorage.getItem("token") !== [""]) navigate("/HomePage");

    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        let bodyStyle = document.body.style;
        bodyStyle.zoom = window.innerWidth/750;

        function submitClick(){
            postData("login", {Password: pw, UID: uid}, 0)
                .then((res) => {
                    if(res.code === 200) navigate("/HomePage");
                    else alert("学号或密码错误，请再试一次。");
                    localStorage.setItem("token", res.token);
                });
        }
        
        return(
            <div className="view">
                <img alt='' src={baseLayer} className="baseLayer"/>
                <img alt='' src={textBox} className="textBox"/>
                <img alt='' src={studentID} className="studentID"/>
                <img alt='' src={password} className="password"/>
                <Link to="/HomePage"><img alt='' src={login} className="login"/></Link>
                <img alt='' src={logo} className="logo"/>
                <img alt='' src={pottedPlant} className="pottedPlant2"/>
                <img alt='' src={bacterium} className="bacterium"/>
                <input type="text" className="studentIDText Text" onChange={(e) => {SetUid(e.target.value);}}></input>
                <input type="password" className="passwordText Text" onChange={(e) => {SetPW(e.target.value);}}></input>
                <input type="submit" className="submit" onClick={submitClick}></input>
            </div>
        );
    }
}

export default Login;