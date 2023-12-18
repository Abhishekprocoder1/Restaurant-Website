import React from 'react'
import Layout from '../Component/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {Box, Paper,Table, TableCell, TableContainer, TableHead, Typography ,TableBody,TableRow} from '@mui/material'

const Contact = () => {
  return (
    <Layout>
     <Box sx={{my:5,ml:5, "& h4 ":{
      fontWeight:"bold",mb:2
     }}}>
      <Typography variant='h4'>Contact My Restaurant</Typography>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime
      </p>
     </Box>
     <Box sx={{
      m:3,
     width:"600px",
     ml:4,
     "@media (max-width:500px)":{
      width:"200px",
     },

     }}>
      <TableContainer component={Paper}>
      <Table aria-label="contact-table">
    <TableHead>
        <TableRow>
        <TableCell sx={{ bgcolor:'black',color:'white'  }}
         align='center'
        >Contact Detaile </TableCell>
        </TableRow>
      </TableHead>
    
    <TableBody>
      
      <TableRow>
        <TableCell>
          <SupportAgentIcon sx={{
            color:"red",pt:2,
          }}/>18001032222(tollfree)
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell>
          <EmailIcon sx={{
            color:"skyblue",pt:2,
          }}/>help@myrest
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell>
          <PhoneIcon sx={{
            color:"green",pt:2,
          }}/>7277663608
        </TableCell>
      </TableRow>

    </TableBody>
      </Table>
      </TableContainer>
     </Box>
    </Layout>
  )
}

export default Contact
