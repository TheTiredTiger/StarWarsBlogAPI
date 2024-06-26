import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarouselView from './components/CarouselView';
import Navbar from './components/Navbar';
import DetailedView from './components/DetailedView';


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <CarouselView />} />
        <Route path="/character/:id" element={ <DetailedView />}  />
      </Routes>
    </BrowserRouter>
    </>


  )
}

export default App;