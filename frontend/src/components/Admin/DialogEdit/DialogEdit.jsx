import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { Grid, Button, TextField, Box } from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../../../index.css';
import { borderRadius } from '@mui/system';


function DialogEdit(props) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [cocktail, setCocktail] = useState({})
  const [ingredientArray, setIngredientArray] = useState([])
  const [newIng, setNewIng] = useState('')
  const [newIngAmount, setNewIngAmount] = useState(0)

  useEffect(() => {
    setCocktail(props.cocktail)
    var arr = []
    for (var ing in props.cocktail.ingredients) {
      var temp = {
        'name': ing,
        'amount': props.cocktail.ingredients[ing]
      }
      arr.push(temp)
    }
    setIngredientArray(arr)
    return () => {
    }
  }, [])

  function addIngredient(ing, am) {
    if (ing !== '') {
      var arr = []
      var temp = {
        'name': ing,
        'amount': am
      }
      arr.push(temp)
      setIngredientArray(...ingredientArray, arr)
      console.log(ingredientArray);
    }
  }

  function deleteIngredient(index) {
    console.log(index)
    // ingredientArray.splice(index)
  }

  function inputChanged(e) {

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" variant='contained' className="button" onClick={() => setOpen(o => !o)}>
        Edit Cocktail
      </Button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <Box
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            width: 'fit-content',
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '.5rem',
          }}>
          <span>Name</span>
          <TextField
            autoFocus
            required
            value={cocktail.name}
            onChange={(e) => setCocktail({ ...cocktail, name: e.target.value })}
          >
          </TextField>
          <span>Image URL</span>
          <TextField
            required
            value={cocktail.image_url}
            onChange={(e) => setCocktail({ ...cocktail, image_url: e.target.value })}
          >
          </TextField>
          <span>Ingredients</span>
          {ingredientArray.map((ing, index) => {
            return (
              <React.Fragment>
                <Grid>
                  <TextField
                    required
                    value={ing.name}
                  ></TextField>
                  <TextField
                    required
                    value={ing.amount}
                  ></TextField>
                </Grid>
                {/* <Button onClick={deleteIngredient(index)}>
                      <RemoveIcon className='pressable' />
                    </Button> */}
              </React.Fragment>
            )
          })}
          <Grid>
            <div>
              Add ingredient
            </div>
            <input
              required
              value={newIng}
              onChange={(e) => setNewIng(e.target.value)}
            ></input>
            <input
              required
              value={newIngAmount}
              onChange={(e) => setNewIngAmount(e.target.value)}
            ></input>
          </Grid>
          <button onClick={addIngredient(newIng, newIngAmount)} type='button'>
            <AddIcon className='pressable' />
          </button>
        </Box>
      </Popup>
    </div>
  )
}

export default DialogEdit
