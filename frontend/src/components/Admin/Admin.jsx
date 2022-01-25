import '../../index.css'
import './Admin.css'
import React, { useState, useEffect } from 'react'
import { Grid, Button, Item, Paper, Box } from '@mui/material/'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography';
import Image from 'material-ui-image';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DialogEdit from './DialogEdit/DialogEdit';

function Admin(props) {
	const [cocktails, setCocktails] = useState([])

	useEffect(() => {
		getCocktails()
	}, [])

	function getCocktails() {
		axios.get('http://localhost:8000/api/get-cocktail-list/')
			.then((response) => {
				if (response.status === 200) {
					setCocktails(response.data)
				}
			})
	}
	return (
		<React.Fragment>
        <ToastContainer />
        <Grid className='mt-4'>
          <Typography variant='h3' className='text-teal-300 font-sans font-bold'>Choose a drink</Typography>
        </Grid>
        <Grid container spacing={{md: 1 }} columns={{ xs: 4, sm: 8, md: 10 }} className='pb-20' justifyContent='center' alignItems='center'>
          {cocktails.map((cocktail) => {
            return (
              <Grid container xs={3} className='mt-10 hover-transform hover:scale-110' justifyContent='center' alignItems='center'>
                <Paper elevation={20} className='px-8 pb-10 mt-3 grad-bckgrnd-admin rounded-xl' style={{}}>
                  <Grid item className='mb-5 pt-2 capitalize'>
                    <Typography variant='h4' className='text-blue-900 font-sans font-bold'>{cocktail.name}</Typography>
                  </Grid>
                  <Grid item>
                    <img src={cocktail.image_url} className='w-36 h-52 images' />
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
                  <DialogEdit cocktail={cocktail}/>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </React.Fragment>
	)
}

export default Admin
