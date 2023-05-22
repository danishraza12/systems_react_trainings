import "./App.css";
import Signup from "./Components/signup";
import Login from "./Components/login";
import Header from "./Components/header";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Header isLoggedIn={login} />
      <Login setLogin={setLogin} />
      <Signup />
    </div>
  );
}

export default App;
