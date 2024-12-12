import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Survival from './survival/Main'; // Import the Survival component
import Shop from './survival/Shop'; // Import the Shop component
import Rules from './survival/Rules';
import Stats from './survival/Stats';
import Contact from './survival/Contact';
import './index.css';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import PrivacyPolicy from './survival/PrivacyPolicy';
import RoadMap from './survival/RoadMap';


const servers = [
  {name: "Survival", placeholder: "survival", path: "../public/media/survival.jpg", description: "Dołącz do emocjonującej walki o przetrwanie w otwartym pełnym niespodzianek w świecie!"},
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
          XayMc.pl
        </Typography>
        <Typography variant="h6" color="white" align="center" gutterBottom>
          Sieć serwerów Minecraft
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
          <Route path="/" element={<Survival />} />
          {/* SurvivalRedirects */}
          <Route path="/survival" element={<Survival />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path='/stats' element={<Stats />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/Main" element={<Survival />} />
        </Routes>
    </Router>
  );
}