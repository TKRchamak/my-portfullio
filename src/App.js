import './App.css';
import About from './Component/AboutMe/About';
import Header from './Component/Header/Header';
import Projects from './Component/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
