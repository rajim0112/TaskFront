import axios from 'axios'
import React, { useState } from 'react'

const API_URL = 'http://localhost:8800/users'

const GetUser = () => {
    const [id, setId] = useState(0);
    const [user, setUser] = useState({})

    const fetchUserByID = async () => {
        try {
            const response = await axios.get(`${API_URL}/getById/${id}`)
            console.log(response.data);
            setUser(response.data[0]);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='get'>
            <input onChange={(e) => setId(e.target.value)} type='number' name='id'/>
            <button onClick={fetchUserByID}>Get Details</button>

            <div>
                Id : {user.id} <br/>
                UserName : {user.username} <br/>
                Email : {user.email} <br/>
                Gender : {user.gender}
            </div>
        </div>
    )
}

export default GetUser



