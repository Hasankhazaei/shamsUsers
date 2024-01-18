import  {getDictionary}  from "@/app/lib/dictionary"
import { Box, Typography } from "@mui/material"

export default async function Home({params :{ lang }}) {
  const { page } = await getDictionary(lang)

  return (
    <Box>
      <Typography variant="h5">{page.home.title}</Typography>
      <Typography variant="p">{page.home.description}</Typography>
    </Box>
  )
}