import GarbageCanContentBox from '../GarbageCanContentBox/GarbageCanContentBox'
import './GarbageCanContentOuterBox.css';


const GarbageCanContentOuterBox = (monthF, dateF) => {
    return(
        <div className="contentOuterBox">
            <GarbageCanContentBox monthF={monthF} dateF={dateF} m={0}/>
            <GarbageCanContentBox monthF={monthF} dateF={dateF} m={5}/>
            <GarbageCanContentBox monthF={monthF} dateF={dateF} m={9}/>
        </div>
    );
}

export default GarbageCanContentOuterBox;