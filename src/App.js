import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Survival from './Survival'; // Import the Survival component
import Shop from './survival/Shop'; // Import the Shop component
import Nav from './Nav'; // Import the Nav component
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './index.css';
import { green, orange } from '@mui/material/colors';

const servers = [
  {name: "Survival", placeholder: "survival", path: "../public/media/survival.jpg", description: "Dołącz do emocjonującej walki o przetrwanie w otwartym pełnym niespodzianek w świecie!"},
  {name: "Skyblock", placeholder: "skyblock", path: "../public/media/skyblock.jpg", description: "Zbuduj swoje podniebne imperium i stań się właścicielem najlepszej wyspy na serwerze"},
]

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'center',
        backgroundImage: 'url(https://i.imgur.com/wOGWrEz.png)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" color="white" align="center" gutterBottom>
          SimpleNetwork
        </Typography>
        <Typography variant="h6" color="white" align="center" gutterBottom>
          More than game servers
        </Typography>
        <Box>
        {servers.map((server) => (
            <Box key={server.name} sx={{ display: 'flex', justifyContent: 'center', my: 2, backgroundImage: 'url(./media/' + server.placeholder + '.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} className="cardServer">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="white" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                  {server.name}
                </Typography>
                <Typography variant="body2" color="white" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>
                  {server.description}
                </Typography>

                <Button onClick={() => navigate('/' + server.placeholder)} color="primary" sx={{ mt: 2 }}>
                  Join
                </Button> 

              </CardContent>
          </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survival" element={<Survival />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
    </Router>
  );
}