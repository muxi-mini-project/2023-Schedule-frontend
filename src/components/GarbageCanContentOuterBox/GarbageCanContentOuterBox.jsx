import GarbageCanContentBox from '../GarbageCanContentBox/GarbageCanContentBox'
import './GarbageCanContentOuterBox.css';


const GarbageCanContentOuterBox = (monthF, dateF) => {
    return(
        <div className="contentOuterBox">
            <GarbageCanContentBox monthF={monthF} dateF={dateF}/>
        </div>
    );
}

export default GarbageCanContentOuterBox;