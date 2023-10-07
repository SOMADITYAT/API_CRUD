import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditData = () => {
   const [data , setData] = useState([])
    const {id} = useParams();
    const  navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/user/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/user/'+id,data)
        .then(res=>{
            alert("data update");
            navigate('/')
        })
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-light p-5'>
                <form onSubmit={handleSubmit}>
                <div>
                        <label>id</label>
                        <input value={data.id}  disabled name='id' className='form-control' />
                    </div>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' onChange={e=> setData({...data,name:e.target.value})} value={data.name} className='form-control' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name='email' onChange={e=> setData({...data,email:e.target.value})} value={data.email} className='form-control' />
                    </div>
                    <div>
                        <label>Number</label>
                        <input type="phone" name='phone' onChange={e=> setData({...data,phone:e.target.value})} value={data.phone}  className='form-control' />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="comment" name='address' onChange={e=> setData({...data,address:e.target.value})} value={data.address}  className='form-control' />
                    </div>
                    <br />
                    <button className='btn btn-info' type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditData