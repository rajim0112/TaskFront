import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import User from './usercomponents/User';
import AddUser from './usercomponents/AddUser';
import GetUser from './usercomponents/GetUser';
import DeleteUser from './usercomponents/DeleteUser';
import UpdateUser from './usercomponents/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<User/>}/>
        <Route path='/user/get' element={<GetUser/>}/>
        <Route path='/user/add' element={<AddUser/>}/>
        <Route path='/user/delete' element={<DeleteUser/>}/>
        <Route path='/user/update' element={<UpdateUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
