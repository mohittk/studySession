import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Sessions from '../pages/Sessions';
import CreateSession from '../pages/CreateSession';

export default function Router () {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/sessions" element={<Sessions />} />
            <Route exact path="/createSession" element={<CreateSession />} />
        </Routes>
        </BrowserRouter>
        </>
    )

}