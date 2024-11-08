import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Nav from '../Nav';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import players from './players.json'
import Autocomplete from '@mui/material/Autocomplete'


// 100 - Ranks, 200 - Items, 300 - Services

const products = [
  { id: 0, name: 'Ranga Vip na 30 dni', 
    description: 'Kupując rangę wspierasz naszą pracę przy projekcie, w zamian za jej zakup otrzymujesz nick z prefixem VIP oraz: \nDostęp do zestawu dla Vipa, \nDostęp do komendy /feed, która natychmiastowo uzupełni twój głód, \nMożliwość ustawienia do 3 home, \nDostęp do komendy /wb', 
    image: '', 
    price: '15 PLN',
    type: 100},
  { id: 1, name: 'Ranga Svip na 30 dni', 
    description: 'Kupując rangę wspierasz naszą pracę przy projekcie, w zamian za jej zakup otrzymujesz nick z prefixem SVip oraz wszystko to co dostępne w pakiecie dla gracza Vip, a pondadto: \nDostęp do komendy /repair, \nMożliwość ustawienia do 5 home,', 
    image: '', price: '30 PLN', 
    type: 100 },
  { id: 2, name: 'Ranga Sponsor na 30 dni', 
    description: 'Kupując rangę wspierasz naszą pracę przy projekcie, w zamian za jej zakup otrzymujesz nick z prefixem Sponsor oraz wszystko to co dostępne w pakiecie dla gracza SuperVip i Vip, a pondadto: \nDostęp do komendy /repair all, \nMożliwość ustawienia do 10 home,', 
    image: '', price: '50 PLN', 
    type: 100 },
  { id: 3, name: 'Klucz do srebrnej skrzyni', 
    description: 'Kupując klucz wspierasz naszą pracę przy projekcie, w zamian za jego zakup otrzymujesz dostęp do otwarcia srebrnej skrzyni, która zawiera cenne przedmioty, które pomogą ci w rozwoju na serwerze.', 
    image: '', price: '5 PLN / szt.', 
    type: 200 },
  { id: 4, name: 'Klucz do diamentowej skrzyni', 
    description: 'Kupując klucz wspierasz naszą pracę przy projekcie, w zamian za jego zakup otrzymujesz dostęp do otwarcia diamentowej skrzyni, która zawiera cenne przedmioty, które pomogą ci w rozwoju na serwerze.', 
    image: '', price: '5 PLN / szt.', 
    type: 200 },
  { id: 5, name: 'Klucz do netherytowej skrzyni', 
    description: 'Kupując klucz wspierasz naszą pracę przy projekcie, w zamian za jego zakup otrzymujesz dostęp do otwarcia netherytowej skrzyni, która zawiera cenne przedmioty, które pomogą ci w rozwoju na serwerze.', 
    image: '', price: '5 PLN / szt.', 
    type: 200 },
];

export default function Shop() {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState('');

const handleChange = (event) => {
  setAge(event.target.value);
};

const handleChangeNickname = (event) => {
    console.log(event.target.value)
}

const handleChangeCheckbox = (event) => {
    console.log(event.target.value)
}

const [filterType, setFilterType] = React.useState(400); // Initialize with "Pokaż wszystko"

const handleChangeFilter = (event) => {
  setFilterType(event.target.value);
};

const [voucherOpen, setVoucherOpen] = React.useState(false);

const handleVoucherOpen = () => {
  setVoucherOpen(true);
}

const handleVoucherClose = () => {
  setVoucherOpen(false);
}


  return (
    <Nav>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Box fullWidth sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sklep serwerowy
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleVoucherOpen}>
            Zrealizuj voucher
          </Button>
        </Box>
        <Grid>
        <Box sx={{mt: 2}} fullWidth>
            <FormControl fullWidth sx={{mb: 2}}>
                <InputLabel id="demo-simple-select-label">Filtruj wg. produktu</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="filterType"
                    value={filterType}
                    label="Filtrowanie według przedmiotów"
                    onChange={handleChangeFilter}
                    required
                >
                    <MenuItem value={100}>Rangi</MenuItem>
                    <MenuItem value={200}>Przedmioty</MenuItem>
                    <MenuItem value={300}>Usługi</MenuItem>
                    <MenuItem value={400}>Pokaż wszystko</MenuItem>
                </Select>
            </FormControl>
            </Box>
        </Grid>
        <Grid container spacing={4}>
        {products.filter((product) => {
            if (filterType === 400) return true; // Show all
            if (filterType === 100 && product.name.includes('Ranga')) return true; // Show only ranks
            if (filterType === 200 && !product.name.includes('Ranga')) return true; // Show only items
            if (filterType === 300 && product.name.includes('Usługa')) return true; // Show only services
            return false;
          }).map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  sx={{ pt: '56.25%' }}
                  image={product.image ? product.image : '/media/server_logo.jpg'}

                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary" onClick={() => handleClickOpen(product)}>
                  Szczegóły oferty
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {selectedProduct && selectedProduct.name}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{ whiteSpace: 'pre-wrap', color: 'black', mt: 1}}>
          Opis produktu: <br />
        <span style={{color: "#999694"}}>{selectedProduct && selectedProduct.description} </span>
        </DialogContentText>
          <DialogContentText id="alert-dialog-description" color='black' sx={{mt: 2}}>
            Cena zakupu: <span style={{color: "#999694"}}> {selectedProduct && selectedProduct.price} </span>
          </DialogContentText>
          <form noValidate autoComplete="off" typeof='POST'>
          <TextField
            id="nameofPlayer"
            label="Twój nickname (musisz być online na serwerze)"
            value=""
            onChange={handleChangeNickname}
            fullWidth
            sx={{ mt: 2 }}
            required
          />

          <Autocomplete
            disablePortal
            options={players.map((option) => option.name)}
            sx={{ mt: 2 }}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Nickname" />}
          />

            <Box sx={{ minWidth: 120, mt: 2 }}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Metoda płatności</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    required
                >
                    <MenuItem value={10}>Przelew online / BLIK</MenuItem>
                    <MenuItem value={20}>PaySafeCard</MenuItem>
                    <MenuItem value={30}>SMS+</MenuItem>
                    <MenuItem value={40}>SMS</MenuItem>
                </Select>
                </FormControl>
            </Box>

            <Box sx={{mt: 2}}>
                <FormControlLabel
                  label="Zakupując produkt, nimiejszym oświadczam, że akcpetuję Regulamin sklepu oraz Regulamin serwera"
                  control={
                    <Checkbox
                      value=""
                      checked={false}
                      onChange={handleChangeCheckbox}
                      color="primary"
                      required
                    />
                  }
                />
            </Box>
        </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='red'>Zamknij</Button>
          <Button onClick={handleClose} type="submit" autoFocus>
            Przejdź do płatności
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={voucherOpen}
        onClose={handleVoucherClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Zrealizuj kod vouchera
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ whiteSpace: 'pre-wrap', color: 'black', mt: 1}}>
           Wprowadź 15 znakowy unikalny kod oraz swój nick w odpowiednich polach. Aby wszystko poszło tak jak należy, musisz 
           być online na serwerze.
          
          <TextField 
            id="voucher"
            label="Kod produktu"
            value=""
            onChange={handleChangeNickname}
            fullWidth
            sx={{ mt: 2 }}
            required
            variant='standard'
          />

          <TextField 
            id="nameofPlayer"
            label="Nickname"
            value=""
            onChange={handleChangeNickname}
            fullWidth
            sx={{ mt: 2 }}
            required
            variant='standard'
          />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleVoucherClose} color='primary'>Zrealizuj voucher</Button>
          <Button onClick={handleVoucherClose} color='red'>Zamknij</Button>
        </DialogActions>
        </Dialog>
    </Nav>
  );
}