// import axios from 'axios'
// import React, { useState } from 'react'

// const API_URL = 'http://localhost:8800/user'

// const User = () => {
//     const [data, setData] = useState([]); 
//     const fetchUser = async () => {
//         try {
//             const response = await axios.get(`${API_URL}/getAll`)
//             setData(response.data)
//         } catch (err) {
//             console.log(err);
//         }
//     }
//     return (
//         <div>
//             <button onClick={fetchUser}>Get All User</button>
//             <div>
//                 {
//                     data.map(user =>  
//                     <span>
//                         {user.id}. {user.username} - {user.email}
//                     </span>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default User

// *********************Front <-> Back************************

import axios from 'axios'
import React, { useState } from 'react'

const API_URL = 'http://localhost:8800/users'

const User = () => {
    const [id, setId] = useState(0);

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
        } catch (err) {
            console.log(err);
        }
    }

    // const setInpt = (e) => {
    //     const key = e.target.name;
    //     const value = e.target.value;
    //     setFormData({
    //         ...formData,
    //         [key] : value
    //     })
    // }

    // const insertUser = async () => {
    //     try {
    //         const response = await axios.get(`${API_URL}/add`, formData)
    //         console.log(response.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    return (
        <div className='user'>
            <button onClick={fetchUser}>Get All User</button>
            <div>
                <input onChange={(e) => setId(e.target.value)} type='number' name='id'/>
                <button onClick={fetchUserByID}>Get Details</button>
            </div>
        </div>
    )
}

export default User















