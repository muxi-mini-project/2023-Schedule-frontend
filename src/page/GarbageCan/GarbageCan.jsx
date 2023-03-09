import baseLayer from '../../img/GarbageCan/BaseLayer.png';
import crumpledPaper from '../../img/GarbageCan/CrumpledPaper.png';
import GarbageCanContentOuterBox from '../../components/GarbageCanContentOuterBox/GarbageCanContentOuterBox';
import GarbageCanPastDate from '../../components/GarbageCanPastDate/GarbageCanPastDate';
import './GarbageCan.css';


const GarbageCan = () => {
    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        let bodyStyle = document.body.style;
        bodyStyle.zoom = window.innerWidth/750;

        return(
            <div className="view">
                <img alt='' src={baseLayer} className="baseLayer2" />
                <img alt='' src={crumpledPaper} className="crumpledPaper" />
                <GarbageCanContentOuterBox/>
                <GarbageCanPastDate/>
            </div>
        );
    }
}

export default GarbageCan;