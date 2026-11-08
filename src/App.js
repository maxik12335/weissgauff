import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import AppRouter from './Components/AppRouter';
import { AuthContext } from './context';
import Loader from './Components/loader/Loader';
import Footer from './Sections/Footer/Footer';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }

    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter >
        <Navbar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
