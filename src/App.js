import React from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Service from './components/Service.jsx'
import Portfolio from './components/Portfolio.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import {
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoutes from './Protected/ProtectedRoutes.jsx'
function App() {
  return (
    <div>
      {/* <Header />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer /> */}
      {/* <Login /> */}

      <Routes>
        <Route path='/' element={<><Header /><Home /></>} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main' element={<ProtectedRoutes />}>
          <Route path='/main' element={<><Header /><Home /><About /><Service /><Portfolio /><Blog /><Contact /><Footer /></>} />
        </Route>
        {/* <Route path='/home' element={<Home />} /> */}
        {/* <Route
            exact
            path="/signup"
            element={<Signup />}
          /> */}
      </Routes>

    </div>
  )
}

export default App
