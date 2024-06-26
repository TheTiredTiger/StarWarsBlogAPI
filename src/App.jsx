import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import CarouselView from './components/CarouselView';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <CarouselView />} />
      </Routes>
    </BrowserRouter>
    </>


  )
}

export default App;