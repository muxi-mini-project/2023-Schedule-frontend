import $ from 'jquery'; 
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './LoadingAnimation.css';


const LoadingAnimation = () => {
    let bodyStyle = document.body.style;
    bodyStyle.zoom = window.innerWidth/750;
    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    });

    const location = useLocation();
    const [dis,setDis] = useState(true);

    useEffect(()=>{
        setDis(false);
    },[location])

    return(
        <div className="loader-wrapper" style={dis?{display:'block'}:{display:'none'}}>
            <span className="loader"><span className="loader-inner"></span></span>
        </div>
    );
}

export default LoadingAnimation;