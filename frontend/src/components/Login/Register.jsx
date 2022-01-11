import '../../index.css'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = (props) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  })

  function handleRegistration(e) {
    e.preventDefault()
    if (state.password !== state.passwordConfirm) {
      toast.warn('Passwords does not match!')
      return
    }
    axios.post('http://localhost:8000/api/sign-up/', {
      body: state,
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.status === 200) {
          if (response.data) {
            var error_message = JSON.parse(response.data)
            toast.error(error_message.error_detail)
            return
          }
          toast.success("Sikeres regisztráció!")
          props.setTab('login')
        }
      })
  }


  return (
    <React.Fragment>
      <ToastContainer />
      <form onSubmit={e => handleRegistration(e)}>
        <h1 className='text-4xl mt-5 text-blue-900'>Registration</h1>
        <Grid container spacing={4} justifyContent='center' alignItems='center' direction='column'>
          <Grid item xs={6}>
            <Input
              required
              autoFocus={true}
              className='mt-6'
              color='primary'
              name='username'
              placeholder='Username'
              type='text'
              value={state.username}
              onChange={(e) => setState({ ...state, username: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              required
              className='mt-6'
              color='primary'
              name='password1'
              placeholder='Password'
              type='password'
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              required
              className='mt-6'
              color='primary'
              name='password2'
              placeholder='Password'
              type='password'
              value={state.passwordConfirm}
              onChange={(e) => setState({ ...state, passwordConfirm: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant='contained' color='primary' type='submit'> {/* type='button' onClick={() => handleRegistration()}> */}
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  )
}

export default Register
