import React, { useState } from 'react'
import './AddAdmin.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddAdmins() {
  const navigate = useNavigate()
  const [userName, setUsername] = useState()
  const [password, setPassword] = useState('pp')
  const [status, setStatus] = useState('')
  const [type, setType] = useState('pp')

  const handleClick = () => {
    console.log(userName, password, type, status)
    axios.post('http://localhost:5000/admin/add', {
      userName: userName,
      password,
      status,
      type,
      date: new Date(),
    })
    .then((res) => {
      console.log(res.data)
      navigate('/admin/list')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='card-admin'>
    <h1> ADD ADMIN </h1>
    <input 
      value={userName}
      onChange={(e) => setUsername(e.target.value)} 
      placeholder='User Name' 
      className='input-admin' 
      type='text'
    />
    <input 
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password ' 
      className='input-admin' 
      type='password'
    />
    <select value={status} 
      onChange={(e) => setStatus(e.target.value)}
      className='select-admin'
    >
      <option>ACTIVE</option>
      <option>BLOCK</option>
      <option>DELETE</option>
    </select>
    <select value={type}
      onChange={(e) => setType(e.target.value)}
      className='select-admin'
    >
      <option>ADMIN</option>
      <option>SUB-ADMIN</option>
    </select>
    <button 
      onClick={handleClick}
      className='submit-btn'
    > SUBMIT </button>
    </div>
  )
}

export default AddAdmins