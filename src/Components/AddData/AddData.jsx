import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const AddData = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const Navigate = useNavigate();
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputData({
            ...inputData,
            [name]: value
        })
        console.log(inputData);
    }
    const handleSubmit =(e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/user',inputData)
        .then(res=>{
            alert("Data Add SuccessFully. ");
            Navigate("/");
        }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' value={inputData.name} onChange={handleChange} className='form-control' required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name='email' value={inputData.email} onChange={handleChange} className='form-control'required />
                    </div>
                    <div>
                        <label>Number</label>
                        <input type="phone" name='phone' value={inputData.phone} onChange={handleChange} className='form-control' required />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="comment" name='address' value={inputData.address} onChange={handleChange} className='form-control' required />
                    </div>
                    <br />
                    <div className='d-flex gap-2'>
                       <button className='btn btn-info' type='submit'>Submit</button>
                       <Link className='btn btn-info' to="/">Back</Link>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default AddData