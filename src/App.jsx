import React from 'react'
import TableData from './Components/TableData/TableData'
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import AddData from './Components/AddData/AddData'
import EditData from './Components/EditData/EditData'

const App = () => {
  return (
     <Router>
        <div>
          {/* <TableData/> */}
            <Routes>
            <Route path="/" element={<TableData />} />
            <Route path="/create" element={<AddData />} />
            <Route path="/update/:id" element={<EditData />} />
            {/* <Route path="/create" element={<AddData />} /> */}

            </Routes>
        </div>
     </Router>
   
  )
}

export default App