import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './viewtest/Home/Main';
import MainUser from './viewtest/User/MainUser';
import MainAbout from './viewtest/About/MainAbout';
import MainListBlog from './viewtest/Home/ListBlog/MainListBlog';
import MainListBlog1 from './viewtest/Home/ListBlog/MainListBlog1';
import MainListBlog2 from './viewtest/Home/ListBlog/MainListBlog2';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user' element={<MainUser />} />
          <Route path='/about' element={<MainAbout />} />
          <Route path='/listblog' element={<MainListBlog/>} />
          <Route path='/listblog1' element={<MainListBlog1 />} />
          <Route path='/listblog2' element={<MainListBlog2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

