"use client";

import NextLink from 'next/link';
import  {getDictionary}  from "@/app/lib/dictionary"
import LocaleSwitcher from "@/app/[lang]/components/locale-switcher"
import { AppBar, Box, Toolbar, Typography, Link as MuiLink } from "@mui/material"


export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang)

  return (

    < Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" sx={{ background: 'var(--BG)' }}>
        <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box
            sx={{
              typography: 'body1',
              '& > :not(style) ~ :not(style)': {
                ml: 2,
              },
            }}
          >
            <MuiLink href={`/${lang}`} component={NextLink} sx={{ color: 'white', margin: '0px' }} underline="none">{navigation.home}</MuiLink>
            <MuiLink href={`/${lang}/about`} component={NextLink} sx={{ color: 'white', margin: '10px' }} underline="none">{navigation.about}</MuiLink>
          </Box>
          <Typography variant="h6" sx={{ color: 'white' }} component="div">
            Photos
          </Typography>
          <LocaleSwitcher />
        </Toolbar>
      </AppBar>
    </Box >
  )
}