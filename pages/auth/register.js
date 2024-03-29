import React, { useState } from 'react'
import Head from 'next/head'


const Register = () => {

  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div style={{
      padding: '3rem'
    }}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Register
      </h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="username" placeholder="username" onChange={handleChange} /> <br />
        <input type="email" name="email" placeholder="email" onChange={handleChange} /> <br />
        <input type="password" name="password" placeholder="password" onChange={handleChange} /> <br />
        <br />
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
