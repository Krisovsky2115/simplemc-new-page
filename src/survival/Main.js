import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Nav from './Nav';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import { red, teal } from '@mui/material/colors';
import Grid from '@mui/material/Grid2';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ChurchIcon from '@mui/icons-material/Church';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

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

export default function Survival() {
  const [playerCount, setPlayerCount] = useState('0 / 0');
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
      fetch('http://149.50.99.11:4000/onlineplayers'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          
          setPlayers(myJson);
          setPlayerCount(myJson.length)
          if(myJson.length == 0){
            setPlayerCount('0 / 20');
          }
        }
        );
  }, []);

  const statistics = [

  ];

  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Nav>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{
            backgroundImage: 'url(https://i.imgur.com/wOGWrEz.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            pt: 0,
            height: '100vh',
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              color="white"
              align="center"
              sx={{
                fontWeight: 'normal',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              Survival + Działki
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleScrollToAboutUs}
              >
                About us
              </Button>
            </Box>
          </Container>
        </Box>
        <Box id="about-us" style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', marginTop: "10px"}}>
            <Container maxWidth="xxl" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap', mt: 2 }}>
              <Paper elevation={3} sx={{ pt: 2, width: '40%', mb: 3 }}>
                <Typography variant='h4' align='center' gutterBottom>
                  {/* Header */}
                  <Typography variant='h5' align='center' gutterBottom>
                    Obecnie online:
                  </Typography>
                  <Container sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline', alignContent: 'center', justifyContent: 'center'}}>
                    {players.length > 0 ? (
                      <>
                        <OnlinePredictionIcon style={{marginLeft: '2px'}} fontSize='large' />
                        <Typography variant='h4' align='center' gutterBottom color={teal[500]} sx={{marginLeft: '25px'}}>
                          {playerCount} / 20
                        </Typography>
                      </>
                    ) : (
                      <Typography variant='body1' align='center' gutterBottom color={red[500]}>
                        Serwer jest offline lub nikt nie gra
                      </Typography>
                    )}
                    
                  </Container>
                </Typography>
              </Paper>
              <Paper elevation={3} sx={{ pt: 2, width: '40%', mb: 3}}>
                <Typography variant='h5' align='center' gutterBottom>
                  Gracze online:
                </Typography>
                <Container sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                {players.length > 0 ? (
                  players.map((player) => (
                    <Box key={player.uuid} display="flex" alignItems="center" sx={{ mb: 2 }}>
                      <img
                        src={`https://mc-heads.net/avatar/${player}`}
                        alt={player}
                        style={{ width: 32, height: 32, marginRight: 8 , marginLeft: 8}}
                      />
                      <Typography variant="body1" color="text.primary" >
                        {player}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
                    Brak dostępnych graczy
                  </Typography>
                )}
                </Container>
              </Paper>
            </Container>
            <Container maxWidth="xxl">
              <Typography variant='h4' align='center' gutterBottom>
                O nas
              </Typography>
              <Typography variant='body1' align='left' gutterBottom>
                XayMc.pl to sieć serwerów Minecraft, która powstała w 2024 roku. Naszym celem jest zapewnienie rozrywki dla graczy z całego świata, 
                stosując nowoczesne rozwiązania technologiczne i dbając o jakość świadczonych usług oraz zadowolenie naszych użytkowników. Stworzyliśmy sieć
                serwerów, która pozwala na grę w różne tryby, takie jak Survival, SkyBlock, czy Creative. Nasze serwery są dostępne 24/7, dzięki czemu nasi 
                gracze mogą grać w kazdy dzien, a takze w wolnych godzinach. Zajmujemy sie tym, aby zapewnić graczom wyjańcza zabawe oraz radosć z graniem.
              </Typography>
            </Container>
        </Box>
        
        <Box>
          <Container maxWidth="xxl" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap', mt: 2 }}>
            <Typography variant='h4' align='center' gutterBottom>
              Najwięksi kozacy na serwerze
            </Typography>
            
            {statistics.length > 0 ? (
              statistics.map((statistic) => (
                <Grid container spacing={2} sx={{ mt: 2 }} key={statistic.awardname}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography variant='h6' align='center' gutterBottom>
                        {statistic.icon} {statistic.awardname}
                      </Typography>
                      <img
                        src={`https://mc-heads.net/avatar/${statistic.awardowner}`}
                        alt="owner"
                        style={{ width: 46, height: 46 }}
                      />
                      <Typography variant='body1' align='center' gutterBottom>
                       {statistic.awardowner}
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              ))
            ) : (
              <Typography variant='body1' align='center' gutterBottom>
                Funkcjonalność w przygotowaniu
              </Typography>
            )}

          </Container>
        </Box>

      </Nav>
    </ThemeProvider>
  );
}
