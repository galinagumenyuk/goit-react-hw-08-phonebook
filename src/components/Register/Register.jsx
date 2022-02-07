import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/authOperations";

const Register = () => { 
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState('');

    const handleChange = (e) => {
        switch (e.target.name) {
            case "password":
                setPassword(e.target.value);
             break;
            case "email":
                setEmail(e.target.value);
            break;
           case "name":
                setName(e.target.value);
            break;
            default:
                return;
        }
    };

    const onHandleSubmit = (e) => { 
      e.preventDefault();
      dispatch(authOperations.register({ name, email, password }));
      setEmail('');
      setPassword('');
      setName('');
    }
  
    return (<>
      <h2>Sign Up Now</h2>
      <form onSubmit={onHandleSubmit}>
          <label>
        name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
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
     <button type="submit">Sign Up</button>
      </form>
      </>
  );
}
export default Register;
