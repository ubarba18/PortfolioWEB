import logo from './logo.svg';
import './App.css';
import './pages/AboutMe'
import Navbar from './Navbar';
import About from './pages/AboutMe';
import Content from './pages/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        
        <Content/>

      </header>
    </div>
  );
}

export default App;
