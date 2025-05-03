import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function HowToTechApiUsingUseEffect() {
    const[pokemondata, setPokemonData] = useState();
    const [ loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    

    const FetchApi = ()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res=>res.json())
        .then(data=>{
            setPokemonData(data)
           setLoading(false)
        })
        .catch((error)=>{
            setError(error)
            setLoading(false)
        })
    }

    useEffect(()=>{
        FetchApi()
    }, [])

    if(loading){
    return <h1>Loading...</h1>
    }
   if(error){
    return(
        <h4>Error: {error.message}</h4>
    )
   }
    return (
        <>
        <h3>Lets Catchup Pokemon List</h3>
           <Card sx={{ width: 300 }}>      
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
