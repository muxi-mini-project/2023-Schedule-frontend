import $ from 'jquery'; 
import './LoadingAnimation.css';


const LoadingAnimation = () => {
    let bodyStyle = document.body.style;
    bodyStyle.zoom = window.innerWidth/750;
    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    });

    return(
        <div className="loader-wrapper">
            <span className="loader"><span className="loader-inner"></span></span>
        </div>
    );
}

export default LoadingAnimation;