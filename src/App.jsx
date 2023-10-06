import React from 'react'
import Header from './components/Header'
import FileUpload from './components/FileUpload'
import { Routes, Route } from 'react-router-dom'

const App = () => {
     return (
          <Routes>
               <Route path='/' element={<FileUpload />} />
          </Routes>
     )
}

export default App