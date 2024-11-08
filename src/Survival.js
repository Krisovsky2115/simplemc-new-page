import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Nav from './Nav';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import createTheme and ThemeProvider
import CssBaseline from '@mui/material/CssBaseline'; // Import CssBaseline
import CardHeader from '@mui/material/CardHeader'; // Import CardHeader
import CardContent from '@mui/material/CardContent'; // Import CardContent
import Card from '@mui/material/Card'; // Import Card
import axios from 'axios'; // Import axios
import { useEffect, useState } from 'react';

// Create a theme with dark mode
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // You can customize the primary color
    },
    background: {
      default: '#121212', // Dark background color
      paper: '#1d1d1d', // Dark paper color
    },
    text: {
      primary: '#ffffff', // Light text color
    },
  },
});

export default function Survival() {
  const [playerCount, setPlayerCount] = useState('0 / 0');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await axios.get('https://api.mcstatus.io/v2/status/java/149.50.99.11:25565'); // Replace with your server IP
        const data = response.data;
        setPlayerCount(`${data.players.online} / ${data.players.max}`);
        setPlayers(data.players.list || []);
      } catch (error) {
        console.error('Error fetching server data:', error);
      }
    };

    fetchServerData();
  }, []);

  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Apply baseline CSS for dark mode */}
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
            pt: 0, // Remove padding from top
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
        <Box id="about-us" sx={{ p: 4 }}>
          <Box display="flex" justifyContent="center" sx={{ mb: 2 }} gridAutoColumns={'1fr 1fr'}>
            <Card>
              <CardHeader title="Obecnie graczy online" />
              <CardContent>
                <Typography variant="h4" align="center" gutterBottom>
                  {playerCount}
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardHeader title="Obecni gracze" />
              <CardContent>
                {players.length > 0 ? (
                  players.map((player) => (
                    <Box key={player.uuid} display="flex" alignItems="center" sx={{ mb: 2 }}>
                      <img
                        src={`https://mc-heads.net/avatar/${player.uuid}`}
                        alt={player.name}
                        style={{ width: 32, height: 32, marginRight: 8 }}
                      />
                      <Typography variant="body1" color="text.primary">
                        {player.name}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body1" align="center" color="text.secondary">
                    Brak dostępnych graczy
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            O projekcie
          </Typography>
          <Typography variant="body1" align="center" style={{ fontWeight: 'normal' }}>
            XayMc.pl to serwer Survival + Działki dopracowany pod każdym względem natomiast na pewno nie zabraknie na nim elementów PvP dlatego też uważamy że każdy gracz
            (gracz który woli wieść spokojne i przyjazne życie na serwerze oraz gracz który woli wyjść na warpa i poklepać paru stevkow) znajdzie na serwerze coś dla siebie i na pewno będzie się na nim dobrze bawić.
            Mamy nadzieję że dołączysz do nas i sam ocenisz to co mamy do zaoferowania!
            Urozmaicamy rozgrywkę na naszym serwerze, dodając różne eventy, które na pewno przypadną Ci do gustu! A jeśli nie, to zawsze możesz zaproponować nam coś od siebie!
            Propozycje możesz nadesłać za pomocą zakładki "Kontakt do nas" na naszej stronie internetowej lub poprzez naszego <a href="https://discord.gg/BvVfUSsFbT">Discorda</a>.
          </Typography>
        </Box>
      </Nav>
    </ThemeProvider>
  );
}