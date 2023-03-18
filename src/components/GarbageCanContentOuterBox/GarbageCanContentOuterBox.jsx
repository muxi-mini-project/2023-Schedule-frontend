import GarbageCanContentBox from '../GarbageCanContentBox/GarbageCanContentBox'
import './GarbageCanContentOuterBox.css';


const GarbageCanContentOuterBox = () => {
    return(
        <div className="contentOuterBox">
            <GarbageCanContentBox/>
            <GarbageCanContentBox/>
        </div>
    );
}

export default GarbageCanContentOuterBox;