import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser';
import SearchUser from './Components/SearchUser';
import ViewUser from './Components/ViewUser';
import UserLogin from './Components/UserLogin';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' exact element={<UserLogin/>}/>
     <Route path='/add' exact element={<AddUser/>}/>
     <Route path='/searchu' exact element={<SearchUser/>}/>
     <Route path='/viewu' exact element={<ViewUser/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
