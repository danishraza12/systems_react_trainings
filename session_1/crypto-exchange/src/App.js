import "./App.css";
import Signup from "./Components/signup";
import Login from "./Components/login";
import Header from "./Components/header";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/footer";


function App() {
  const [login, setLogin] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <ToastContainer />
      <Header isLoggedIn={login} />
      {users?.length === 0 && <Signup users={users} setUsers={setUsers}/>}
      {users?.length > 0 && <Login setLogin={setLogin} users={users}/>}
      <Footer />
    </div>
  );
}

export default App;
