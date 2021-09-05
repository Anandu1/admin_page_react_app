
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <div className="others">
   <Home/>
   
    </div>
    </div>
    </div>
  );
}

export default App;
