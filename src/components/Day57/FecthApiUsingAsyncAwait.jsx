import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function FecthApiUsingAsyncAwait() {
    const [pokemondata, setPokemonData] = useState(null)
    const [ loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const API = 'https://pokeapi.co/api/v2/pokemon/ditto';


    const FetchApi = async() =>{
         try{
         const res = await fetch(API);
         const data = await res.json();
         setPokemonData(data)
         setLoading(false)
         }
         catch(error){
           console.log(error)
           setLoading(false)
           setError(error)
         }
    }

    // useEffect(()=>{
    //     FetchApi()
    // }, [])

    useEffect(()=>{
      FetchApi()
  })


    if(loading){
        return (
            <>Loading.....</>
        )
    }

    if(error){
        return(
            <>Error:- {error.message}</>
        )
    }

  return (
    
    <>
           <h3>Lets Catchup Pokemon List</h3>
           <Card>  
            <CardMedia
            component="img"
            alt={"Pikachu"}
            image={pokemondata.sprites.front_shiny}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {pokemondata.species.name}
            </Typography>
          </CardContent>  
          <CardActions className='me-5 ms-5'>
            <span>Height:{pokemondata.height}</span>
           <span> Speed:{pokemondata.stats[0].base_stat}</span>
            <span>weight:{pokemondata.weight}</span>
         </CardActions>   
        </Card>
    </>
  )
}
