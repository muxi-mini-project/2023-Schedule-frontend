import $ from 'jquery';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './LoadingAnimation.css';


const LoadingAnimation = () => {
    let bodyStyle = document.body.style;
    bodyStyle.zoom = window.innerWidth / 750;

    const location = useLocation();
    const [dis, setDis] = useState(true);
    useEffect(() => {
        setTimeout(() => { setDis(false); }, 3000);
    }, [location]);
    if (dis === false) $(".loader-wrapper").fadeOut("slow");

    return (
        <div className="loader-wrapper" >
            <span className="loader"><span className="loader-inner"></span></span>
        </div>
    );
}

export default LoadingAnimation;