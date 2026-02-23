// import { useState } from 'react'
// import './src/shared/styles/App.css'

import { Header } from "./features/layout/components/Header"
import { Content } from "./features/layout/components/Content"
import { Footer } from "./features/layout/components/Footer"
import Props from "./features/layout/components/Props"

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Content></Content >}> </Route>
        <Route path="/props" element={<Props></Props>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
