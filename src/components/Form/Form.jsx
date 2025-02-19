import React, { useState } from 'react'
import './Form.css'
import Input from '../Input/Input'

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage : "Username should contain 3-16 characters and should not include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "dob",
      type: "date",
      placeholder: "Date of birth",
      label: "Date of birth"
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage : "Invalid email address!",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage : "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage : "Passwords don't match!",
      pattern: values.password,
      required: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  console.log(values);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='title'>Registration</h2>
      { inputs.map((input) => (
        <Input 
          key={input.id}  
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <button>Submit</button>
    </form>
  )
}

export default Form