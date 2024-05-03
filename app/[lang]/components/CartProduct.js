"use client";

import { getDictionary } from "@/app/lib/dictionary"
import { Box, Typography, Button, TableRow, TableCell } from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty, removeFromCart } from '@/redux/slices/cartSlice';
import toast from 'react-hot-toast';

export default  function CartProduct({lang, cartItem }) {
  // const { navigation } = await getDictionary(lang)
  const dispatch = useDispatch();
  function handleItemDelete(cartId) {
    dispatch(removeFromCart(cartId));
    toast.success("item removed successfully");
  }
  function handleQtyIncrement(cartId) {
    dispatch(incrementQty(cartId));
  }
  function handleQtyDecrement(cartId) {
    dispatch(decrementQty(cartId));
  }

  return (


            <TableRow >
              <TableCell>
                <Box sx={{ display:'flex',}}>
                <Box component="img" srcSet={cartItem.image} src={cartItem.image} alt={cartItem.title}
                 sx={{ width: { xs: '50px', sm: '80x', md: '100px', lg: '100px' },
                  height:{ xs: '50px', sm: '700x', md: '70px', lg: '70px' },
                  }} />
                </Box>
              </TableCell>
              <TableCell> {cartItem.title.substring(0,12)}... </TableCell>
              <TableCell>
                <Box
                sx={{
                  display:'flex',
                  width: '190px',
                }}
                >
                  <Button
                    sx={{
                      height:'30px',
                      color: 'var(--BG)',
                      borderRadius:'4px 0px 0px 4px',
                      borderColor: 'var(--BG)',
                      "&:hover": {
                        borderColor: 'var(--BG)',
                        color: 'var(--BG)',
                      }
                    }}
                    onClick={()=>handleQtyDecrement(cartItem.id)}

                    variant="outlined"
                    ><RemoveIcon/>
                  </Button>
                  <Typography
                  sx={{
                    width: '60px',
                    border:'1px solid var(--BG)',
                    display:'flex',
                    justifyContent:'center',
                  }}
                  
                  >
                    {cartItem.qty}
                  </Typography>
                  <Button
                    sx={{
                      height:'30px',
                      color: 'var(--BG)',
                      borderRadius:'0px 4px 4px 0px',
                      borderColor: 'var(--BG)',
                      "&:hover": {
                        borderColor: 'var(--BG)',
                        color: 'var(--BG)',
                      }
                    }}
                    onClick={()=>handleQtyIncrement(cartItem.id)}

                    variant="outlined"
                    ><AddIcon />
                  </Button>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{display:'flex',alignItems:'center',}}>
                <Typography>
                    $ {cartItem.price}
               </Typography>
                  <Button
                    sx={{
                      color: 'var(--BG)',
                      border:'none',
                      "&:hover": {
                        border: 'none',
                        color: 'var(--BG)',
                        background:'none',
                      }
                    }}
                     onClick={()=>handleItemDelete(cartItem.id)}
                    ><DeleteSweepIcon />
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
  )
}