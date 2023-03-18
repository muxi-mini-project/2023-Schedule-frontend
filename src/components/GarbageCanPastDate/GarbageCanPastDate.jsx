import './GarbageCanPastDate.css';


const GarbageCanPastDate = () => {
    return(
        <div>
            <input type="text" className="tenDigitsOfTheMonth pastTime"></input>
            <input type="text" className="singleDigitOfTheMonth pastTime"></input>
            <input type="text" className="tenDigitsOfTheDate pastTime"></input>
            <input type="text" className="singleDigitOfTheDate pastTime"></input>
        </div>      
    );
}

export default GarbageCanPastDate;