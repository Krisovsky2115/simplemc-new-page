import Typography from '@mui/material/Typography';
import Nav from './Nav';
import Container from '@mui/material/Container';
import React from 'react';
import Box from '@mui/material/Box';

export default function Rules() {
    
    const rules =[
        {"paragraph": 1, 
        "score": 1, 
        "textOfRule": "Regulamin obowiązuje na serwerze XayMc.pl na trybie Survival i dotyczy wszystkich graczy. Wchodząc na serwer akceptujesz regulamin."}, 
        {"paragraph": 1, 
        "score": 2,
        "textOfRule": "Nieznajomość regulaminu nie zwalnia z jego przestrzegania."
        }, 
        {"paragraph": 1,
        "score": 3,
        "textOfRule": "Złamanie dowolnego punktu regulaminu grozi karą."
        },
        {"paragraph": 1,
            "score": 4,
            "textOfRule": "Administracja serwera zastrzega sobie prawo do zmiany regulaminu w dowolnym momencie bez konieczności informowania o tym graczy."
        },
        {"paragraph": 1,
            "score": 5,
            "textOfRule": "Kary podane w regulaminie mają charakter orientacyjny, administrator ma prawo do zastosowania innej kary w zależności od sytuacji."
        },
        // Paragraph 2
        {"paragraph": 2,
        "score": 1,
        "textOfRule": "Używania wulgaryzmów, wyzywania i poniżania innych."
        },
        {"paragraph": 2,
        "score": 2,
        "textOfRule": "Prowokowania do kłótni oraz zachowywania się toksycznie w stosunku do innych."},
        {"paragraph": 2,
            "score": 3,
            "textOfRule": "Podszywania się pod kogokolwiek."
        },
        {"paragraph": 2,
            "score": 4,
            "textOfRule": "Reklamowania się na serwerze i w wiadomościach prywatnych."
        },
        {"paragraph": 2,
            "score": 5,
            "textOfRule": "Publikowania treści dla dorosłych, seksualizowania nieletnich w jakikolwiek sposób, propozycji dotyczących zdjęć, filmików i innych powiązanych treści."
        },
        {"paragraph": 2,
            "score": 6,
            "textOfRule": "Posiadania multikont."
        },
        {"paragraph": 2,
            "score": 7,
            "textOfRule": "Propagowania mowy nienawiści"
        },
        {"paragraph": 2,
            "score": 8,
            "textOfRule": "Spamowania, floodowania, nadużywania caps-locka."
        },
        {"paragraph": 2,
            "score": 9,
            "textOfRule": "Jakiegokolwiek zastraszania, wyrządzania krzywdy, również w tym wyciek danych osobistych (zwane również doxingiem)"
        },
        {"paragraph": 2,
            "score": 10,
            "textOfRule": "Handlowania przy pomocy prawdziwych pieniędzy."
        },
        {"paragraph": 2,
            "score": 11,
            "textOfRule": "Organizowania, promowania bądź popierania krzywdzącego ekstremizmu."
        },
        {"paragraph": 2,
            "score": 12,
            "textOfRule": "Nadmiernego proszenia o rangi."
        },
        {"paragraph": 2,
            "score": 13,
            "textOfRule": "Treści gloryfikujących bądź promujących samobójstwo lub autoagresję."
        },
        {"paragraph": 2,
            "score": 14,
            "textOfRule": "Wysyłania złośliwych programów, wirusów, robaków i tym podobnych; phishingu, hackowania, DDoSowania."
        },
        {"paragraph": 2,
            "score": 15,
            "textOfRule": "Ogólnopojętego łamania prawa, powszechnie obowiązującego."
        },
        // Paragraph 3
        {"paragraph": 3,
            "score": 1,
            "textOfRule": "Zakaz celowego grifowania terenu wokół działek."
        },
        {"paragraph": 3,
            "score": 2,
            "textOfRule": "Zakaz używania multikont celem powiększania działek, taka praktyka grozi usunięciem kont oraz terenu. "
        },
        {"paragraph": 3,
            "score": 3,
            "textOfRule": "Zakaz używania błędów serwera, należy natychmiast zgłosić się z problemem do Administracji "
        },
        // Paragraph 4
        {"paragraph": 4,
            "score": 1,
            "textOfRule": "Wulgaryzmy oraz przekleństwa: Lista: http://marcinmazurek.com.pl/polskie-wulgaryzmy Definicja: https://pl.wikipedia.org/wiki/wulgaryzmy_i_przekleństwa_w_języku_polskim"
        },
        {"paragraph": 4,
            "score": 2,
            "textOfRule": "Mowa nienawiści: Definicja: https://uprzedzuprzedzenia.org/czym-mowa-nienawisci/"
        },
        //Paragraph 5
        {"paragraph": 5,
            "score": 1,
            "textOfRule": "Muty- nadawane przez Administratora, trwające do 24h, wynikające z nieznacznego złamania regulaminu (np. flood, spam)"
        },
        {"paragraph": 5,
            "score": 2,
            "textOfRule": "Warny- nadawane przez Administratora, wynikające ze złamania regulaminu przez użytkownika- trzy warny są równoznaczne z banem."
        },
        {"paragraph": 5,
            "score": 3,
            "textOfRule": "Bany- nadawane przez Administratora, wynikające ze znacznego złamania regulaminu, mogą być nieodwracalne."
        },
    ]
    
    return (
        <Nav>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Typography variant="h4" align="center" gutterBottom>
                    Regulamin serwera Survival
                </Typography>
                <Box id={1}>
                <Typography variant="body1" gutterBottom align='center'>
                §1 Postanowienia ogólne
                </Typography>
                {rules.filter(rule => rule.paragraph === 1).map(rule => (
                    <Typography key={rule.paragraph} variant="body1" fontWeight='light' gutterBottom align='left'>
                        {rule.score}.{rule.textOfRule}
                    </Typography>
                ))}
                </Box>
                <Box id={2}>
                §2 Zakazujemy
                {rules.filter(rule => rule.paragraph === 2).map(rule => (
                    <Typography key={rule.paragraph} variant="body1" gutterBottom align='left'>
                        {rule.score}.{rule.textOfRule}
                    </Typography>
                ))}
                </Box>
                <Box id={3}>
                §3 Działki
                {rules.filter(rule => rule.paragraph === 3).map(rule => (
                    <Typography key={rule.paragraph} variant="body1" gutterBottom align='left'>
                        {rule.score}.{rule.textOfRule}
                    </Typography>
                ))}
                </Box>
                <Box id={4}>
                §4 Terminologia
                {rules.filter(rule => rule.paragraph === 4).map(rule => (
                    <Typography key={rule.paragraph} variant="body1" gutterBottom align='left'>
                        {rule.score}.{rule.textOfRule}
                    </Typography>
                ))}
                </Box>
                <Box id={5}>
                §5 Taryfikator kar
                {rules.filter(rule => rule.paragraph === 4).map(rule => (
                    <Typography key={rule.paragraph} variant="body1" gutterBottom align='left'>
                        {rule.score}.{rule.textOfRule}
                    </Typography>
                ))}
                </Box>
            </Container>
        </Nav>
    );
}