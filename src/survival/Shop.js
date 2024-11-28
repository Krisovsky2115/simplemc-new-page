import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Nav from './Nav';
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
import Autocomplete from '@mui/material/Autocomplete'
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';


// 100 - Ranks, 200 - Items, 300 - Services


export default function Shop() {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);


  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productID, setProductID] = useState(null);


  
  useEffect(() => {
      fetch('http://149.50.99.11:4001/products'
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
          
          setProducts(myJson);
          

        }
        );
  }, []);


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

const [filterType, setFilterType] = React.useState("all"); // Initialize with "Pokaż wszystko"
const [filterName, setFilterName] = React.useState("all"); // Initialize with "Pokaż wszystko"

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


const [players, setPlayers] = useState([]);

useEffect(() => {
  const fetchPlayers = async () => {
    try {
      const response = await fetch('http://149.50.99.11:4001/onlineplayers', {
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setPlayers(data);
    } catch (error) {
      console.error('Error fetching server data:', error);
    } finally {
      // Schedule the next request after the current one completes
      setTimeout(fetchPlayers, 600);
    }
  };

  // Start the first request
  fetchPlayers();
}, []);

const [option, setOption] = React.useState('');

const handleClickBuy = (event) => {
  if (!players.some(player => player.name === option)) {
    alert('Takiego gracza nie ma na serwerze!');
    console.log(option);
    return;

    //player = event.target.value;
    //id = event.target.id;
  }

  // Proceed with the purchase
  console.log('Proceeding with purchase for player:', option);
};


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

        <Alert severity="info" sx={{ mb: 4 }}>
          Funkcjonalność sklepu w przygotowaniu.
        </Alert>

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
                    <MenuItem value={"rank"}>Rangi</MenuItem>
                    <MenuItem value={"item"}>Przedmioty</MenuItem>
                    <MenuItem value={"service"}>Usługi</MenuItem>
                    <MenuItem value={"all"}>Pokaż wszystko</MenuItem>
                </Select>
            </FormControl>
            </Box>
        </Grid>
        <Grid container spacing={4}>
        {products.filter((product) => {
            if (filterType === "all") return true; // Show all
            if (filterType === "rank") return products.id.includes("rank"); // Show only ranks
            if (filterType === "item") return products.id.includes("item"); // Show only items
            if (filterType === "service") return products.id.includes("service"); // Show only services
            return false;
          }).map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  sx={{ pt: '56.25%' }}
                  image={product.image ? product.image: '/media/server_logo.jpg'}

                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {product.description}
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
          {selectedProduct && selectedProduct.name} <a style="display: none"> {selectedProduct && selectedProduct.id} </a>
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{ whiteSpace: 'pre-wrap', color: 'unset', mt: 1}}>
          Opis produktu: <br />
        <span style={{color: "#999694"}}>{selectedProduct && selectedProduct.description} </span>
        </DialogContentText>
          <DialogContentText id="alert-dialog-description" color='unset' sx={{mt: 2}}>
            Cena zakupu: <span style={{color: "#999694"}}> {selectedProduct && selectedProduct.price} </span>
          </DialogContentText>
          <form noValidate autoComplete="off" typeof='GET'>
          <Autocomplete
           disablePortal
           options={players}
           getOptionLabel={(option) => option}
           sx={{ mt: 2 }}
           fullWidth
           renderOption={(props, option) => (
             <Box component="li" {...props} display="flex" alignItems="center">
               <img
                 src={`https://mc-heads.net/avatar/${option}`}
                 alt={option.name}
                 style={{ width: 32, height: 32, marginRight: 8 }}
               />
               {option}
             </Box>
           )}
           onChange={(event, newValue) => {
            setOption(newValue ? newValue.name : '');
          }}
           renderInput={(params) => (
            <Box display="flex" alignItems="center">
              <img
                src={`https://mc-heads.net/avatar/${params.inputProps.value}`}
                alt={params.inputProps.value}
                style={{ width: 32, height: 32, marginRight: 8 }}
              />
              <TextField {...params} label="Nickname" />
            </Box>
          )}
          />
            <Box sx={{ minWidth: 120, mt: 2 }}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Metoda płatności</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleClickBuy(target.value)}
                    required
                >
                    <MenuItem value={10}>Przelew online / BLIK</MenuItem>
                    <MenuItem value={20}>PaySafeCard</MenuItem>
                    <MenuItem value={30}>SMS+</MenuItem>
                    <MenuItem value={40}>SMS</MenuItem>
                    <MenuItem value={50}>Waluta w grze</MenuItem>
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
          <Button onClick={handleClickBuy} type="submit" autoFocus>
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
          <DialogContentText id="alert-dialog-description" sx={{ whiteSpace: 'pre-wrap', color: 'unset', mt: 1}}>
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