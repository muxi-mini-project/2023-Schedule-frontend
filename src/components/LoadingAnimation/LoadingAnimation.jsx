import $ from 'jquery'; 
import './LoadingAnimation.css';


const LoadingAnimation = () => {
    let bodyStyle = document.body.style;
    bodyStyle.zoom = window.innerWidth/750;
    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    });

    return(
        <div class="loader-wrapper">
            <span class="loader"><span class="loader-inner"></span></span>
        </div>
    );
}

export default LoadingAnimation;