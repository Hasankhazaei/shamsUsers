"use client";

import NextLink from 'next/link';
import { getDictionary } from "@/app/lib/dictionary"
import { Box, Grid, Paper, Typography, Link as MuiLink } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";



export default function Category({ params: { lang, name } }) {
  const { page } = getDictionary(lang)
  const [products, setProducts] = useState([]);





  const getProducts = async () => {
    try {
      const { data } = await axios({
        url: 'https://fakestoreapi.com/products/category/' + name
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
    <Box sx={{ width: '90%', margin: '50px auto' }}>
      <Grid container spacing={{ xs: 2 }} columns={{ xs: 3, sm: 8, md: 16 }}>
        {products.map((product, id) => (
          <Grid item rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  key={id}>
            <MuiLink href={`/${lang}/${product.title}/${product.id}`} component={NextLink} underline="none" sx={{width:'200px',display:'inline-block'}}>
              <Paper elevation={3} sx={{ padding: '20px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', rowGap: '20px',}}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box component="img" src={product.image} alt="product.image" priority style={{  width: '100px', height: '150px', }} />
                </Box>
                <Typography> {product.title.substring(0, 12)}...</Typography>
                <Typography> {product.price}</Typography>
              </Paper>
            </MuiLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
