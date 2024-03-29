import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postData } from '../../api/fetch';
import LoadingAnimetion from '../../components/LoadingAnimation/LoadingAnimation';
import './Login.css';


const Login = () => {
    const [uid, SetUid] = useState("");
    const [pw, SetPW] = useState("");
    let navigate = useNavigate();

    if (localStorage.getItem("token") == null) localStorage.setItem("token", [""]);
    // if(localStorage.getItem("token") !== [""]) navigate("/HomePage");

    if (window.innerWidth > window.innerHeight) {
        return (
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else {
        function submitClick() {
            postData("login", { Password: pw, UID: uid }, 0)
                .then((res) => {
                    if (res.code === 200) navigate("/HomePage");
                    else alert("学号或密码错误，请再试一次。");
                    localStorage.setItem("token", res.token);
                });
        }

        return (
            <div className="view">
                <div className="view-box">
                    <div className="view-content">
                        <img alt='' src={"https://s2.loli.net/2023/03/16/Z3qfH2nr1QsCLlB.png"} className="baseLayer" />
                        <img alt='' src={"https://s2.loli.net/2023/03/16/CycpPdjawv6ufsL.png"} className="textBox" />
                        <img alt='' src={"https://s2.loli.net/2023/03/16/AO4Qfs1iazBpnwh.png"} className="studentID" />
                        <img alt='' src={"https://s2.loli.net/2023/03/16/9kDiW8T4FahEuXN.png"} className="password" />
                        <Link to="/HomePage"><img alt='' src={"https://s2.loli.net/2023/03/16/meZRuVgNtr74Sfk.png"} className="login" /></Link>
                        <img alt='' src={"https://s2.loli.net/2023/03/16/dPCl3UcZz2wVA9h.png"} className="logo" />
                        <img alt='' src={"https://s2.loli.net/2023/03/16/Q4nk5TDdN7FxGtO.png"} className="pottedPlant2" />
                        <img alt='' src={"https://s2.loli.net/2023/03/16/feKwDl9pZIJGn1N.png"} className="bacterium" />
                        <input type="text" className="studentIDText Text" onChange={(e) => { SetUid(e.target.value); }}></input>
                        <input type="password" className="passwordText Text" onChange={(e) => { SetPW(e.target.value); }}></input>
                        <input type="submit" className="submit" onClick={submitClick}></input>
                    </div>
                </div>
                <LoadingAnimetion />
            </div>
        );
    }
}

export default Login;