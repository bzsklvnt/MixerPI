import '../../index.css'
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import axios from 'axios'
import Register from './Register'
import { Typography } from '@mui/material'

const Login = (props) => {
  const [tab, setTab] = useState('login')
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })

  function handleLogin(e) {
    e.preventDefault()
    axios.post('http://localhost:8000/api/login/', {
      body: credentials,
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.status === 200) {
          if (response.data) {
            props.setUser(response.data)
            props.setUserLoggedIn('true')
            return
          }
        }
      })
  }

  if (tab === 'registration') {
    return (
      <Register setTab={setTab}></Register>
    )
  }

  return (
    <form onSubmit={e => handleLogin(e)}>
      <Grid container spacing={4} justifyContent='center' alignItems='center' direction='column'>
        <Grid item className='mt-10'>
          <Typography variant='h2' className='text-blue-900'>Login</Typography>
        </Grid>
        <Grid item xs={6}>
          <Input
            required
            autoFocus={true}
            className='mt-6'
            color='primary'
            name='username'
            placeholder='Username'
            type='text'
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            required
            className='mt-6'
            color='primary'
            name='password'
            placeholder='Password'
            type='password'
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant='contained' color='primary' type='submit'>
            Login
          </Button>
        </Grid>
        <Grid item xs={6}>
          <span className='text-blue-900'>If you don't have an accout</span>
        </Grid>
        <Grid item xs={6}>
          <Button variant='contained' color='primary' type='button' onClick={() => setTab('registration')}>
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Login;