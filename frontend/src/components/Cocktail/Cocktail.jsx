import '../../index.css'
import './Cocktail.css'
import React, { useState, useEffect } from 'react'
import { Grid, Button, Item, Paper} from '@mui/material/'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography';

const Cocktail = (props) => {
  const [cocktailList, setCocktailList] = useState(props.cocktails)

  const sendToPi = (e) => {
    e.preventDefault()
    var res = Math.floor(Math.random() * (Math.floor(202) - Math.ceil(198)) + Math.ceil(198))
    if (res === 200) {
      toast.success('Mixing started successfully!' + res)
    } else {
      toast.error("Couldn't access PI!" + res)
    }
  }

  return (
    <form onSubmit={(e) => sendToPi(e)}>
      <React.Fragment>
        <ToastContainer />
        <Grid className='mt-4'>
          <Typography variant='h3' className='text-teal-300 font-sans font-bold'>Choose a drink</Typography>
        </Grid>
        <Grid container spacing={{md: 1 }} columns={{ xs: 4, sm: 8, md: 10 }} className='pb-20' justifyContent='center' alignItems='center'>
          {cocktailList.map((cocktail) => {
            return (
              <Grid container xs={3} className='mt-10 hover-transform hover:scale-110' justifyContent='center' alignContent='center'>
                <Paper elevation={20} className='px-8 pb-10 mt-3 grad-bckgrnd rounded-xl' style={{}}>
                  <Grid item className='mb-5 pt-2 capitalize'>
                    <Typography variant='h4' className='text-blue-900 font-sans font-bold'>{cocktail.name}</Typography>
                  </Grid>
                  <Grid item>
                    <img src={cocktail.image_url} className='w-52 h-72 images' />
                  </Grid>
                  <Grid item className='pt-3'>
                    <Typography variant='h5' className='text-teal-300 '>Ingredients</Typography>
                  </Grid>
                  {Object.keys(cocktail.ingredients).map(ing => {
                    return (
                      <Grid item className='capitalize'>
                        <Typography variant='h6' className='text-white'>{ing}</Typography>
                      </Grid>
                    )
                  })}
                    <Button style={{ background: '#00ffc3', borderRadius: '2rem', padding: '.5rem 1rem', marginTop:'.3rem'}} className='px-2' endIcon={<SendIcon />} type='submit'>
                      Mix me
                    </Button>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </React.Fragment>
    </form>
  )
}

export default Cocktail
