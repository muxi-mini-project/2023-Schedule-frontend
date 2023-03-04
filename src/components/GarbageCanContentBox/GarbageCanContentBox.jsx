import check from '../../img/GarbageCan/Check2.png';
import crumpledPaperContent from '../../img/GarbageCan/CrumpledPaperContent.png';
import './GarbageCanContentBox.css';


const GarbageCanContentBox = () => {
    return(
        <div className="contentBox">
            <img alt='' src={crumpledPaperContent} className="" />
            <img alt='' src={check} className="pastChecker1" />
            <img alt='' src={check} className="pastChecker2" />
            <img alt='' src={check} className="pastChecker3" />
            <img alt='' src={check} className="pastChecker4" />
            <img alt='' src={check} className="pastChecker5" />
            <input type="checkbox" className="pastChecker1 pastChecker"></input>
            <input type="checkbox" className="pastChecker2 pastChecker"></input>
            <input type="checkbox" className="pastChecker3 pastChecker"></input>
            <input type="checkbox" className="pastChecker4 pastChecker"></input>
            <input type="checkbox" className="pastChecker5 pastChecker"></input>
            <input type="text" className="pastTodo1 pastTodo"></input>
            <input type="text" className="pastTodo2 pastTodo"></input>
            <input type="text" className="pastTodo3 pastTodo"></input>
            <input type="text" className="pastTodo4 pastTodo"></input>
            <input type="text" className="pastTodo5 pastTodo"></input>
        </div>
    );
}

export default GarbageCanContentBox;