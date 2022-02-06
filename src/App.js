import AppBar from "./components/AppBar/AppBar.jsx";
import PhoneBook from "./components/PhoneBook/PhoneBook.jsx";
import Home from "./components/Home/Home.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contacts" element={<PhoneBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
