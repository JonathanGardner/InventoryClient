import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

// Create a Form component that'll render a <form> tag with some styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
`;

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 200px;
`;

// Create a Button component that'll render a <button> tag with some styles
const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [message, setMessage] = useState(''); // Add a state for the message
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/admin/login', { username, password });
      localStorage.setItem('adminToken', res.data.token);
      alert('Login was successful');
      navigate('/'); // Redirect to home page
    } catch (error) {
      setAttempts(prevAttempts => prevAttempts - 1);
      if (attempts > 1) {
        setMessage(`Login was unsuccessful. You have ${attempts - 1} attempts remaining.`);
      } else {
        setMessage('You have exceeded the number of allowed login attempts.');
        navigate('/'); // Redirect to home page or login page
      }
      alert(message); // Display the error message
    }
  };
  

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <Button type="submit">Login</Button>
        {message && <p>{message}</p>}
      </Form>
    </Wrapper>
  );
}

export default AdminLogin;
