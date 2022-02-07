import React from "react";
import { useState } from "react";

const Login = () => { 
        const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
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
    }
  
    return (<>
      <h2>Welcome back!</h2>
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
     <button type="button">Log In</button>
      </form>
      </>
  );
}
export default Login;