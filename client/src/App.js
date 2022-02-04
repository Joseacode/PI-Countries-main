import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LadingPage from './components/LadingPage';
import Home from './components/Home';

function App() {
    return (
         <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<LadingPage/>} />
                    <Route exact path='/home' element={<Home/>} />
                </Routes>
            </div>
        </Router>
     );
}
export default App;