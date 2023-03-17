import GarbageCanContentBox from '../GarbageCanContentBox/GarbageCanContentBox'
import './GarbageCanContentOuterBox.css';


const GarbageCanContentOuterBox = (props) => {
    const {pastTodos} = props
    return(
        <div className="contentOuterBox">
            <GarbageCanContentBox pastTodos={pastTodos}/>
        </div>
    );
}

export default GarbageCanContentOuterBox;