import './App.css';
import About from './Component/AboutMe/About';
import Blogs from './Component/Blogs/Blogs';
import Contact from './Component/Contact/Contact';
import Experience from './Component/Experience/Experience';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Projects from './Component/Projects/Projects';
import Skilles from './Component/Skilles/Skilles';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Skilles></Skilles>
      <Projects></Projects>
      <Blogs></Blogs>
      {/* <Experience></Experience> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
