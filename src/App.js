import './App.css';
import Footer from './component/footer';
import Landing from './component/landing';
//import Landing from './component/landing';
import Navbar from './component/navbar';
//import Project from './component/project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
