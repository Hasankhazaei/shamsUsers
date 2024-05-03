"use client"


import { Box } from "@mui/material";
import { useSelector } from "react-redux";


export default  function CartCount() {
    const cartItems =useSelector((store) => store.cart);
  return (
     <Box>{cartItems.length}</Box>
  )
}