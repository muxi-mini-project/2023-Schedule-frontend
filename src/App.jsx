import {BrowserRouter, Routes, Route} from "react-router-dom";
import Calender from "./page/Calendar";
import Photowall from "./page/Photowall";
import Scenery from "./page/Scenery";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Calendar" element={<Calender />} />
                <Route path="/Photowall" element={<Photowall />} />
                <Route path="/Scenery" element={<Scenery />} />
            </Routes>
        </BrowserRouter>
    );
}