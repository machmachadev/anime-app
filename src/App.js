import './App.css';
import { BrowserRouter  ,Routes , Route  } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import AnimeScreen from "./screens/AnimeScreen";
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element = {<HomeScreen/>}/>
        <Route path='/anime/:id' element = {<AnimeScreen/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
       


    </div>
  );
}

export default App;
