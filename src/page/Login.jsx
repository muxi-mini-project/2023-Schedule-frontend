import baseLayer from '../img/Login/BaseLayer.png';
import textBox from '../img/Login/TextBox.png';
import studentID from '../img/Login/StudentID.png';
import password from '../img/Login/Password.png';
import login from '../img/Login/Login.png';
import logo from '../img/Login/Logo.png';
import pottedPlant from '../img/Login/PottedPlant.png';
import bacterium from '../img/Login/Bacterium.png';
import {LoginPost} from '../api/fetch';
import {Link} from "react-router-dom";
import {useState} from "react";
import './Login.css';


const Login = () => {
    const [data, SetData] = useState({
        method: 'POST', 
        headers: {
            "User-Agent": "Apifox/1.0.0 (https://www.apifox.cn)",
            "Content-Type": "application/json;charset=utf-8",
        },
        body: {
            "password": "",
            "uid": ""
        },
        redirect: 'follow'
    });

    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        let bodyStyle = document.body.style;
        bodyStyle.zoom = window.innerWidth/750;

        function studentIDChange(value){
            SetData(value.body.uid);
        }
        function passwordChange(value){
            SetData(value.body.password);
        }
        function submitChange(){
            LoginPost(data);
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
                <input type="text" className="studentIDText" onChange={studentIDChange}></input>
                <input type="password" className="passwordText" onChange={passwordChange}></input>
                <input type="submit" className="submit" onChange={submitChange}></input>
            </div>
        );
    }
}

export default Login;