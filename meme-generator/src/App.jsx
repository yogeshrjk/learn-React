import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home.jsx";
import Edit from "./pages/edit.jsx";
import Text from "./components/text.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/edit" element={<Edit/>}/>
                <Route path="/abc" element={<Text/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;