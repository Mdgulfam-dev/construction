
// import './App.css'

// import { Routes, Route } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom';
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Budget from './Pages/Budget'
// import Project from './Pages/Project'
// import Navbar from './Components/Navbar'
// import Register from './Pages/Register';
// import Login from './Pages/Login';
// import Footer from './Components/Footer';
// import Services from './Components/Services';
// import { AuthProvider } from './AuthContext';



// function App() {
  

//   return (
//     <BrowserRouter>
//      <div >
//      <Navbar/>
     
//       <Routes>
//         <Route path='/home' element={<Home/>} />
//         <Route path='/about' element={<About/>} />
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='/budget' element={<Budget/>} />
//         <Route path='/project' element={<Project/>} />
//         <Route path='/register' element={<Register/>} />
//         <Route path='/login' element={<Login/>} />
//         <Route path='/service' element={<Services/>} />
//       </Routes>
//       <Footer/>
     
      
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App




import './App.css'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Budget from './Pages/Budget'
import Project from './Pages/Project'
import Navbar from './Components/Navbar'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Services from './Components/Services';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow">
            <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/budget' element={<Budget/>} />
              <Route path='/project' element={<Project/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/service' element={<Services/>} />
              <Route path='/' element={<Home/>} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App