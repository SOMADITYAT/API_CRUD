import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TableData = () => {
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])
  const handleEdit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf){
      axios.delete('http://localhost:3000/user/' + id)
        .then(res => {
          alert('record has delete');
          navigate("/")
        }).catch(err => console.log(err));
    }
  
  }
  return (
    <div className='container mt-5 border p-5'>
      <div className='text-end'>
        <Link to="/create" className='btn btn-primary'>Add+</Link>
      </div>
      <table className='table'>
        <thead>
          <tr>
            {
              columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))
            }
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((r, i) => (
              <tr key={i}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>{r.email}</td>
                <td>{r.phone}</td>
                <td>{r.address}</td>
                <td className='d-flex gap-1'>
                  <Link to={`/update/${r.id}`} className='btn btn-sm btn-success'>Update</Link>
                  <button onClick={e=> handleEdit(r.id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )

}


export default TableData