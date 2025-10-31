import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from '../src/Pages/Home/Home';
import CreatePost from './Components/CreatePost/CreatePost';
import Post from './Pages/Post/Post';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/criarpost" element={<CreatePost isPage />} />
                    <Route path="/post/:id" element={<Post />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
