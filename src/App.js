import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Topic from './Components/Topic/Topic';
import { Routes, Route, Link } from "react-router-dom";
import Static from './Components/Static/Static';
import Blog from './Components/Blog/Blog';
import Quiz from './Components/Quiz/Quiz';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Topic />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/topic/:id" element={<Quiz />} />
        <Route path="/static" element={<Static />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
