import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/authOperations";

const Login = () => { 
  const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        switch (e.target.name) {
            case "password":
                setPassword(e.target.value);
             break;
            case "email":
                setEmail(e.target.value);
            break;
            default:
                return;
        }
    };

    const onHandleSubmit = (e) => { 
      e.preventDefault();
       dispatch(authOperations.login({ email, password }));
      setEmail('');
      setPassword('');
    }
  
    return (<>
      <h2>Welcome back!</h2>
    <form onSubmit={onHandleSubmit}>
      <label>
        email
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        </label>
         <label>
        password
        <input
          type="text"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
      </label>
     <button type="submit">Log In</button>
      </form>
      </>
  );
}
export default Login;