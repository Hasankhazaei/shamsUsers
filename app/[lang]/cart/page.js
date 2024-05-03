"use client";

import NextLink from 'next/link';
import { getDictionary } from "@/app/lib/dictionary"
import { Box, Typography, Link as MuiLink, TableRow, TableCell, TableContainer, Table, TableHead, Paper, TableBody } from "@mui/material"
import CartProduct from '@/app/[lang]/components/CartProduct';
import { useSelector } from 'react-redux';

export default function cart({ lang }) {
  // const { navigation } = await getDictionary(lang);
  const cartItems = useSelector((store) => store.cart);
  const subTotal = cartItems.reduce((acc, currentItem) => {
    return acc + (currentItem.price * currentItem.qty);
  }, 0).toFixed(2);




  return (

    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', boxSizing: 'border-box', }}>
      <Box
        sx={{
          width: '900px',
          background: 'bisque',
          position: 'relative',
        }}
      >
        <TableContainer component={Paper} sx={{
          width: { xs: '95%', sm: '100%', md: '100%', lg: '100%' },
        }}>
          <Table aria-label="customized table">
            <TableHead
              sx={{
                backgroundColor: 'var(--BG)',
                color: 'white'
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    color: 'white',
                    fontSize: { xs: '12px', sm: '14px', md: '15px', lg: '17px' },
                  }}
                >Img</TableCell>
                <TableCell
                  sx={{
                    color: 'white',
                    fontSize: { xs: '12px', sm: '14px', md: '15px', lg: '17px' },
                  }}
                >Title</TableCell>
                <TableCell
                  sx={{
                    color: 'white',
                    fontSize: { xs: '12px', sm: '14px', md: '15px', lg: '17px' },
                  }}
                >Quantity</TableCell>
                <TableCell
                  sx={{
                    color: 'white',
                    fontSize: { xs: '12px', sm: '14px', md: '15px', lg: '17px' },
                  }}
                >Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                backgroundColor: '#f5deb338',
              }}
            >
              <>
                {cartItems.length > 0 ? cartItems.map((item, i) => {
                  return <CartProduct cartItem={item} key={i} />
                }) : (<Typography
                  sx={{
                    position: 'absolute',
                    display: 'flex',
                    width: '100%',
                    height: '150px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>No Cart items</Typography>)}
              </>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          width: '300px',
          padding: '20px',
          boxSizing: 'border-box',
          border: '1px solid var(--BG)',
          borderRadius: '10px'
        }}

      >
        <Typography variant="h4">Cart total</Typography>
        <Box
          sx={{
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--BG)'
          }}
        >
          <Typography>Subtotal</Typography>
          <Typography>${subTotal}</Typography>
        </Box>

        <MuiLink href="#" component={NextLink} underline="none"
          sx={{
            display: 'flex',
            height: '50px',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--BG)',
            borderRadius: '4px',
            marginTop: '10px',
            border: '1px solid var(--BG)',
            "&:hover": {
              background: 'var(--BG)',
              borderColor: 'var(--BG)',
              color: 'white',
            }
          }}
          variant="outlined"

        >
          Continue to Payment
        </MuiLink>
      </Box>
    </Box >
  )
}