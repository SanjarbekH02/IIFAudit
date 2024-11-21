import { Route, Routes } from 'react-router-dom';
import './App.css';
import Background from './Components/Background/Background';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses'
import ListCourses from './Pages/ListCourses/ListCourses';
import ScrollToTop from './Components/ScrollTop/ScrollTop';
import Quiz from './Pages/Quiz/Quiz';
import Certificate from './Pages/Certificate/Certificate';
import QuizModal from './Components/QuizModal/QuizModal';
import Partners from './Pages/Partners/Partners';
import PartnersInfo from './Components/PartnersInfo/PartnersInfo'
  
function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<ListCourses />} />
        <Route path='/courses/:id' element={<Courses />} />
        <Route path='/certificate' element={<Certificate />} />
        <Route path='/quiz' element={<Quiz />} />
        {/* <Route path='/partners' element={<PartnersInfo />} /> */}
        <Route path='/partners' element={<Partners />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
