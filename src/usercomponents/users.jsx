import axios from 'axios'
import React, { useState } from 'react'

const API_URL = 'http://localhost:8800/users'

const users = () => {
    const [id, setId] = useState(0);
    const [user, setUser] = useState({})
    const [formData, setFormData] = useState({});

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${API_URL}/getAll`)
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchUserByID = async () => {
        try {
            const response = await axios.get(`${API_URL}/getById/${id}`)
            console.log(response.data);
            setUser(response.data[0]);
        } catch (err) {
            console.log(err);
        }
    }


    const setInpt = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [key] : value
        })
    }

    const insertUser = async () => {
        try {
            const response = await axios.get(`${API_URL}/add`, formData)
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteUserByID = async () => {
        try {
            const response = await axios.delete(`${API_URL}/deleteById/${id}`)
            alert(response.data.message)
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='users'>
            <button onClick={fetchUser}>Get All User</button>
            <div>
                <input onChange={(e) => setId(e.target.value)} type='number' name='id'/>
                <button onClick={fetchUserByID}>Get Details</button>
            </div>
            
            <input onChange={(e) => setId(e.target.value)} type='number' name='id'/>
            <button onClick={fetchUserByID}>Get Details</button>
            <div>
                Id : {user.id} <br/>
                UserName : {user.username} <br/>
                Email : {user.email} <br/>
                Gender : {user.gender}
            </div>

            Username: <input onChange={setInpt} type="text" name="username" /><br />
            Email: <input onChange={setInpt} type="text" name="email" /><br />
            Gender: 
            <input onChange={setInpt} type="radio" name="gender" value="0" /> Female
            <input onChange={setInpt} type="radio" name="gender" value="1" /> Male<br />
            <button onClick={insertUser}>Add</button>

            <input onChange={(e) => setId(e.target.value)} type='number' name='id'/>
            <button onClick={fetchUserByID}>Get Details</button>
            {
                user &&
                <div>
                    id : {user.id} <br/>
                    username : {user.username} <br/>
                    email : {user.email} <br/>
                    <button onClick = {deleteUserByID}>Delete</button>
                </div>
            }

        </div>
    )
}

export default users
