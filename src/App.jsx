import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import RechartJs from './Component/RechartJs/RechartJs'
import { Route, Routes } from 'react-router'
import Dashboard from './Component/Dashboard/Dashboard'
import Signup from './Component/Signup/Signup'
import Form from './Component/Form/Form'
import ProductView from './Component/ProductView/ProductView'

function App() {


  return (
    <>

      <Signup/>
      <header>
        <Header/>
      </header>
      <section>
        <Sidebar/>
      </section>

      <div className="body-page">
        <Routes>
            <Route path='RechartJs/' element={<RechartJs/>}></Route>
        </Routes>
      </div>

      <div className="body-page">
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
        </Routes>
      </div>

      <div className="body-page">
        <Routes>
            <Route path='Form/' element={<Form/>}></Route>
        </Routes>
      </div>

      <div className="body-page">
        <Routes>
            <Route path='/ProductView' element={<ProductView/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
