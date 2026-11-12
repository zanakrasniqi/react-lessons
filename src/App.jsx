import {  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import Images from './pages/Images';
import './App.css';

function App() {
  return (
   <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
