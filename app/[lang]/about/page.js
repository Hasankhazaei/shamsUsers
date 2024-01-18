"use client";

import { getDictionary } from "@/app/lib/dictionary"
import { Box, Typography } from "@mui/material"

export default async function About({params :{ lang }}) {
  const { page } = await getDictionary(lang)

  return (
    <Box>
      <Box>
        <Typography variant="h5">{page.about.title}</Typography>
        <Typography variant="p">{page.about.description}</Typography>
      </Box>
    </Box>
  )
}
