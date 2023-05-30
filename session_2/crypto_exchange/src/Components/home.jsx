import React from "react";
import Signup from "./signup";
import Login from "./login";
import Header from "./header";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./footer";

const Home = () => {
  const [login, setLogin] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <ToastContainer />
      <Header isLoggedIn={login} />
      {users?.length === 0 && <Signup users={users} setUsers={setUsers} />}
      {users?.length > 0 && <Login setLogin={setLogin} users={users} />}
      <Footer />
    </div>
  );
};

export default Home;
