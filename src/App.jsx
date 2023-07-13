import './App.css'
import Home from './assets/Components/Main/Home'
import Navbar from './assets/Components/Navbar/Navbar'
import Service from './assets/Components/Service/Service'
import Work from './assets/Components/Work/Work'
import Port from './assets/Components/Portfolio/Port'
import Footer from './assets/Components/Footer/Footer'
import Contact from './assets/Components/Contact/Contact'
import Question from './assets/Components/FQA/Question'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from './assets/Components/utility/Page404'
import Client from './assets/Components/ClientPortfolio/Client'
import ScrollTop from './assets/Components/ScrollTop'


function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <ScrollTop/>
      <Navbar/>
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <Service />
              <Work />
              <Client/>
              <Port />
              <Contact/>
              <Question />
              <Footer />    
            </>
          }></Route>
          <Route path="/*" element={<Page404/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
