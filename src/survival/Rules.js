import Typography from '@mui/material/Typography';
import Nav from './Nav';
import Container from '@mui/material/Container';
import React from 'react';

export default function Rules() {
    return (
        <Nav>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Typography variant="h6" color='inherit' align="center" gutterBottom>
                    Nawet największy boss trzyma się tych zasad.
                </Typography>

                <Typography variant="h5" color='inherit' align="center" gutterBottom>
                Zakazuje się:
                </Typography>
                <Typography variant="body1" color='inherit' align="center" gutterBottom>
                1. Dyskryminujących żartów i mowy nienawiści (ataki na osobę lub grupę na podstawie rasy, pochodzenia narodowego i etnicznego, orientacji seksualnej, płci, religii lub   niepełnosprawności),
                </Typography>
            </Container>
        </Nav>
    );
}