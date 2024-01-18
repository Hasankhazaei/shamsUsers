"use client";

import NextLink from 'next/link';
import { getDictionary } from "@/app/lib/dictionary"
import { Box, Grid, Paper, Typography, Link as MuiLink, Rating, Button } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";



export default function ProductsId({ params: { lang, id } }) {
  const { page } = getDictionary(lang)
  const [products, setProducts] = useState([]);





  const getProducts = async () => {
    try {
      const { data } = await axios({
        url: 'https://fakestoreapi.com/products/' + id
      })
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);






  return (
    <Box sx={{ width: '90%', margin: '50px auto', display: 'flex', flexWrap: 'wrap', }}>
      <Box  sx={{padding:'20px',boxSizing:'border-box'}} >
        <img src={products.image} alt={products.title} height="400px" width="300px" />
      </Box>
      <Box
      sx={{
        width:{xs: '500px', sm: '500x', md: '500px', lg: '600px' },
        display:'flex',
        flexDirection:'column',
        rowGap:'40px',
        padding:'20px',
        boxSizing:'border-box',
      }}>
        <Typography variant="h4">{products.category}</Typography>
        <Typography variant="h5">{products.title}</Typography>
        <Box>
        <Typography component="legend">
          Rating  {products.rating && products.rating.rate}
        </Typography>
        <Rating name="readOnly" defaultValue={products.rating && products.rating.rate} max={5} readOnly/>
        </Box>
        <Typography variant="h3">{products.price} $</Typography>
        <Typography variant="p">{products.description}</Typography>
        <Button
           sx={{
            width: '200px',
            background: 'var(--BG)',
            borderColor: 'var(--BG)',
            color: 'white',
            "&:hover": {
              color: 'var(--BG)',
              borderColor: 'var(--BG)',
            }
          }}
          variant="outlined"
        >ADD TO CART
        </Button>
      </Box>
    </Box>
  )
}
