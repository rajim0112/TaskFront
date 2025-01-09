import axios from 'axios'
import React, { useState } from 'react'

const API_URL = 'http://localhost:8800/users'

const DeleteUser = () => {
    const [id, setId] = useState(0);
    const [user, setUser] = useState() 

    const fetchUserByID = async () => {
        try {
            const response = await axios.get(`${API_URL}/getById/${id}`)
            console.log(response.data);
            setUser(response.data[0])
        } catch (err) {
            console.log(err.response.data.message);
            alert(err.response.data.message);
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
        <div className='delete'>
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

export default DeleteUser




