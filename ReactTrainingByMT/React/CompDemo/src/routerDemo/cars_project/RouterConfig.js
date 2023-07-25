import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CarList } from "./CarList";
import CarLayout from "./CarLayout";
import CarHome from "./cars_home";
import CarDetail from "./Details";

export default function CarRouteConfig() {

    <Router>
        <Routes>
            <Route path='/' element={<CarLayout/>}>
                <Route path='/' element={<CarHome/>}/>
                <Route path='/cars' element={<CarList/>}/>
                <Route path='/cars/:id' element={<CarDetail/>}/>
            </Route>
        </Routes>
    </Router>
}