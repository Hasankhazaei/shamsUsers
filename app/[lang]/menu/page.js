"use client";

import NextLink from 'next/link';
import Image from 'next/image';
import { getDictionary } from "@/app/lib/dictionary"
import { Box, Link as MuiLink, Typography } from "@mui/material"
import menClothes from "@/app/assets/images/menClothes.png"
import womenClothes from "@/app/assets/images/womenClothes.png"
import electronics from "@/app/assets/images/electronics.jpg"
import jewelery from "@/app/assets/images/jewelery.jpg"

export default async function Menu({ lang }) {
  const { page } = await getDictionary(lang)



 
  return (
    <Box sx={{ height: '150px', display: 'flex',alignItems: 'center',justifyContent: 'center', borderBottom: '1px solid lightgray'}}>
      <MuiLink  href={`/${lang}/men's clothing`} component={NextLink}
        sx={{
          display: 'flex', width: '200px', height: '150px', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', rowGap: '15px',fontSize:'14px'
        }}
        underline="none">
        <Box sx={{ width: '70px', height: '70px',}}>
          <Image src={menClothes} alt="menClothes"  priority style={{ borderRadius: '50%',width: '100%',height: '100%',}} />
        </Box>
        <Typography variant="p" sx={{ color: 'black' }}>{page.menu.menClothing}</Typography>
      </MuiLink>
      <MuiLink href={`/${lang}/women's clothing`} component={NextLink} 
        sx={{
          display: 'flex', width: '200px', height: '150px', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', rowGap: '15px',fontSize:'14px'
        }}
        underline="none">
        <Box sx={{ width: '70px', height: '70px',}}>
          <Image src={womenClothes} alt="womenClothes"  priority style={{ borderRadius: '50%',width: '100%',height: '100%',}} />
        </Box>
        <Typography variant="p" sx={{ color: 'black' }}>{page.menu.womenClothing}</Typography>
      </MuiLink>
      <MuiLink href={`/${lang}/electronics`} component={NextLink}
        sx={{
          display: 'flex', width: '200px', height: '150px', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', rowGap: '15px',fontSize:'14px'
        }}
        underline="none">
        <Box sx={{ width: '70px', height: '70px', }}>
          <Image src={electronics} alt="electronics"  priority style={{ borderRadius: '50%',width: '100%',height: '100%',}} />
        </Box>
        <Typography variant="p" sx={{ color: 'black' }}>{page.menu.electronics}</Typography>
      </MuiLink>
      <MuiLink href={`/${lang}/jewelery`} component={NextLink}
        sx={{
          display: 'flex', width: '200px', height: '150px', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', rowGap: '15px',fontSize:'14px'
        }}
        underline="none">
        <Box sx={{ width: '70px', height: '70px', }}>
          <Image src={jewelery} alt="jewelery"  priority style={{ borderRadius: '50%',width: '100%',height: '100%',}} />
        </Box>
        <Typography variant="p" sx={{ color: 'black' }}>{page.menu.jewelery}</Typography>
      </MuiLink>
    </Box>
  )
}