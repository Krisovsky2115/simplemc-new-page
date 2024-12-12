import Container from '@mui/material/Container';
import Nav from "./Nav";
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
export default function RoadMap() {
    const theme = createTheme({
        components: {
          MuiTimeline: {
            styleOverrides: {
                TimelineConnector: {
                color: 'red',
              },
            },
          },
        },
      });
    return (
        <div>
            <CssBaseline />
            <ThemeProvider theme={theme}>
            <Nav />
            <Container maxWidth="xxl" sx={{ py: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Jak to wszystko powstawało?
                </Typography>

                <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>01.01.2024 - Zupełnie nowa edycja projektu <br />
                        Nasz projekt postawił swój kolejny krok milowy tworząc unikalną jeszcze lepszą edycję, 
                        poza naprawą tego co zgłoszone skupiliśmy się na dodaniu wielu nowości, wcześniej nie 
                        dostępnych dla serwera.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>06.11.2024 <br/>
                        Połączenie serwera z siecią SimpleNetwork i rozpoczęcie prac nad nowościami w serwerze, 
                        nowa maszyna dała multum nowych możliwości i planów na wprowadzenie nowych trybów. Rozpoczęto 
                        także prace nad serwerem SkyBlock.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent>25.09.2024 <br/>
                        Rozpoczęcie 1 edycji serwera, dodanie podstawowych funkcjonalności.
        </TimelineContent>      
        </TimelineItem>
        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent>10.09.2024 <br/>
                        Rozpoczęcie prac nad projektem, idea stworzenia serwera o trybie Survival.
        </TimelineContent>      
        </TimelineItem>
    </Timeline>
            </Container>
            </ThemeProvider>
        </div>
    )
}