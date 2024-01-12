// import Link from "next/link"
import { getDictionary } from "@/app/lib/dictionary"
import LocaleSwitcher from "./locale-switcher"
import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material"


export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang)

  return (

    < Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" sx={{ background: 'var(--BG)'}}>
        <Toolbar variant="dense" sx={{ display:'flex', justifyContent: 'space-around' }}>
          <Box
            sx={{
              typography: 'body1',
              '& > :not(style) ~ :not(style)': {
                ml: 2,
              },
            }}
          >
            <Link href={`/${lang}/about`} sx={{ color: 'white' }} underline="none">{navigation.about}</Link>
            <Link href={`/${lang}`}  sx={{ color: 'white' }} underline="none">{navigation.home}</Link>
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