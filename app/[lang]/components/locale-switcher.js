"use client";

import NextLink from 'next/link';
import { usePathname } from "next/navigation"
import { Box, Link as MuiLink } from "@mui/material"


import { i18n } from "@/i18.config"

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = locale => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }
 
  return (
    <Box sx={{display: 'flex',justifyContent: 'space-around',width: '50px', color:'white'}}>
      {i18n.locales.map(locale => {
        return (
          <Box key={locale} >
            <MuiLink href={redirectedPathName(locale)} component={NextLink} underline="none" sx={{ color:'white'}}>
              {locale === "en" ? "En | "  :   locale === "fa" ? " FA" : null}
            </MuiLink>
          </Box>
        )
      })}
    </Box>
  )
}
