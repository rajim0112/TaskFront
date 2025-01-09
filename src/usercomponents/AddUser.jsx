import axios from 'axios';
import React, { useState } from 'react';

const API_URL = 'http://localhost:8800/users';

const AddUser = () => {
  const [formData, setFormData] = useState({});

  const setInpt = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const insertUser = async () => {
    try {
      const response = await axios.post(`${API_URL}/add`, formData);
      console.log(response.data);
      alert(response.data.message);
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  return (
    <div className="add">
      Username: <input onChange={setInpt} type="text" name="username" /><br />
      Email: <input onChange={setInpt} type="text" name="email" /><br />
      Gender: 
      <input onChange={setInpt} type="radio" name="gender" value="0" /> Female
      <input onChange={setInpt} type="radio" name="gender" value="1" /> Male<br />
      <button onClick={insertUser}>Add</button>
    </div>
  );
};

export default AddUser;

