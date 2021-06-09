import './App.css';
import Landing from './component/landing';
import Navbar from './component/navbar';
import Project from './component/project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Project/>
    </div>
  );
}

export default App;
