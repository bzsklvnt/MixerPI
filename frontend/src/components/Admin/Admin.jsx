import '../../index.css'
import React, { useState, useEffect } from 'react'
import { Grid, Button, Item, Paper, Box } from '@mui/material/'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography';
import Image from 'material-ui-image';
import { Route, Routes, BrowserRouter } from "react-router-dom";

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
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='mt-20' justifyContent='center'>
				{cocktails.map((cocktail) => {
					return (
						<Paper elevation={15} className='p-20 m-10 bg-cyan-700'>
							<Grid item xs={4} className='m-10'>
								<Typography variant='h6'>{cocktail.name}</Typography>
								<Image src={cocktail.image_url} />
								{/* Image */}
								{/* {cocktail.ingredients.map((ing, key) => {
												return (
														<div key={key}>{ing}</div>
												)
										})} */}
							</Grid>
						</Paper>
					)
				})}
			</Grid>
		</React.Fragment>
	)
}

export default Admin
