import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from '../src/Pages/Home/Home';
import CreatePost from './Components/CreatePost/CreatePost';
import Navbar from './Components/Navbar/Navbar';
import Post from './Pages/Post/Post';
import Filler from './Components/Filler';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/criarpost" element={<CreatePost />} />
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
                <Filler />
            </BrowserRouter>
        </div>
    );
}

export default App;
