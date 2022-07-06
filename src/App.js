import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import CardTitle from "./components/CardTitle";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
      <Route path="/" element={<CardTitle/>}/>
      <Route path="list" element={<UserList/>}/>
      <Route path="list/add" element={<AddUser/>}/>
      <Route path="list/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
