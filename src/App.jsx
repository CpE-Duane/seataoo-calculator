import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Password from './components/Password'
import FileUpload from './components/FileUpload'
import { ToastContainer } from 'react-toastify'
const App = () => {
     return (
          <>
               <ToastContainer />
               <Routes>
                    <Route path='/' element={<Password />} />
                    <Route path='/home' element={<FileUpload />} />
               </Routes>
          </>
     )
}

export default App