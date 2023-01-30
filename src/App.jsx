import {BrowserRouter, Routes, Route} from "react-router-dom";
import Calender from "./page/Calendar";
import Photowall from "./page/Photowall";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Calendar" element={<Calender />} />
                <Route path="/Photowall" element={<Photowall />} />
            </Routes>
        </BrowserRouter>
    );
}