import React from 'react';
import Nav from './Nav';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { SocialIcon } from 'react-social-icons';
export default function Contact() {
    
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#90caf9',
          },
          background: {
            default: '#121212',
            paper: '#1d1d1d',
          },
          text: {
            primary: '#ffffff',
          },
        },
      });
      

    return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Nav>
          <Container maxWidth="xxl">
            <Grid container spacing={3} sx={{mt: 2}}>
              <Typography variant="h4" align="center" gutterBottom>
                Masz jakieś pytania? 
              </Typography>
            </Grid>
          </Container>

        </Nav>
    </ThemeProvider>
    );
}