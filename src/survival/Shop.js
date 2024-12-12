import * as React from 'react';
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
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ApiURL } from './Main';
import { pink } from '@mui/material/colors';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { grey } from '@mui/material/colors';
import Snackbar from '@mui/material/Snackbar';


// 100 - Ranks, 200 - Items, 300 - Services


export default function Shop() {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState([]);


  const [products, setProducts] = useState([]);



  useEffect(() => {
      fetch(ApiURL + '/products'
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


const [filterType, setFilterType] = React.useState("all"); // Initialize with "Pokaż wszystko"

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

const navigate = useNavigate();

const handleNavigateToRules = () => {
  navigate('/rules');
}

const handleNavigateToPrivacy = () => { 
  navigate('/privacypolicy');
}

// chceckbox
const [checked, setChecked] = React.useState(false);
const handleChangeCheckbox = (event) => {
  console.log(event.target.value)
  setChecked(event.target.checked);
}



const [players, setPlayers] = useState([]);

useEffect(() => {
  const fetchPlayers = () => {
    try {
      fetch(ApiURL + '/onlineplayers', {
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then((response) => {
        return response.json();
      }).then((json) => {
        console.log(json);
        setPlayers(json);
      }).catch((error) => {
        console.error('Error fetching server data:', error);
      });
    } catch (error) {
      console.error('Error fetching server data:', error);
    }
  }

  // Start the interval to fetch players every second
  const interval = setInterval(fetchPlayers, 1000);

  // Start the first request immediately
  fetchPlayers();

  return () => {
    // Cleanup
    clearInterval(interval);
  }
}, []);

const [enteredName, setEnteredName] = React.useState('');

// snackbar
const [openSnackbar, setOpenSnackbar] = React.useState(false);
const handleClick = () => {
  openSnackMessage();
  setOpenSnackbar(true);
};

const handleCloseSnack = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenSnackbar(false);
};

const [count, setCount] = useState(0);

const AnimatedCounter = ({ end }) => {

  useEffect(() => {
    let start = 0;
    const duration = 4903994343; // 2 seconds
    const increment = end / (duration / 100);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(counter);
  }, [end]);
};


const openSnackMessage = () => {
  return (
    <Snackbar open={openSnackbar} anchorOrigin="bottomRight" autoHideDuration={6000} onClose={handleCloseSnack}>
      <Alert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
        Musisz podać swój nick!
      </Alert>
    </Snackbar>
  );
};

const handleClickBuy = (event) => {
  event.preventDefault();

  if (!enteredName) {
    alert("Musisz wybrać z listy lub podać swój nick!")
    return;
  }

  fetch(ApiURL + '/execute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "player": enteredName,
      "productID": selectedProduct.productID
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};


  return (
    <Nav>
      <Container fullWidth sx={{ py: 8 }}>
        <Box fullWidth sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sklep serwerowy
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleVoucherOpen}>
            Zrealizuj voucher
          </Button>
        </Box>
        <Box fullWidth sx={{ mb: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="text" color="primary" sx={{ mt: 2 }} onClick={handleNavigateToRules}>
            Regulamin sklepu
          </Button>
          <Button variant="text" color="primary" sx={{ mt: 2 }} onClick={handleNavigateToPrivacy}>
            Polityka prywatności
          </Button>
        </Box>

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
              <Alert severity="primary" sx={{fontSize: "large", textAlign: 'center', alignContent: 'center', mb: 3}} >
              Promocja premierowa, nawet do -20%
            </Alert>
        <Grid container spacing={4} sx={{width: "100%"}}>
        {products.filter((product) => {
            if (filterType === "all") return true; // Show all
            if (filterType === "rank") return product.productID.includes("rank"); // Show only ranks
            if (filterType === "item") return product.productID.includes("item"); // Show only items
            if (filterType === "service") return product.productID.includes("service"); // Show only services
            return false;
          }).map((product) => (
            <React.Fragment key={product.id}>
              <Grid item xs={12} sm={12} md={4} xxl={4}>
                {product.discount > 0 && (
                      <Badge badgeContent={"Promocja"} color="primary" size="large">
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: "100%" }}>
                      <CardMedia
                        component="img"
                        image={product.iconURL}
                        alt={product.name}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h6">
                          <span style={{color: pink[300]}}> {product.discount}</span> zł <span style={{color: grey[100], textDecoration: 'line-through', fontSize: "medium"}}>{product.price} zł</span> 
                        </Typography>
                        <Typography variant='body1' color='text.primary'>
                          Promocja kończy się za: {count}
                        </Typography>
                      </CardContent>
                      <Button variant="contained" color="secondary" onClick={() => handleClickOpen(product)}>
                        Kup teraz
                      </Button>
                      
                    </Card>
                  </Badge>
                )}
                {product.discount === 0 && (
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: "100%" }}>
                    <CardMedia
                      component="img"
                      image={product.iconURL}
                      alt={product.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h6">
                        <span style={{color: pink[300]}}>{product.price}</span> zł
                      </Typography>
                    </CardContent>
                    <Button variant="contained" color="secondary" onClick={() => handleClickOpen(product)}>
                      Kup teraz
                    </Button>
                  </Card>
                )}
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form noValidate autoComplete="off" typeof='GET' onSubmit={handleClickBuy}>
        <DialogTitle id="alert-dialog-title">
          <ShoppingCartIcon sx={{mr: 1}} fontSize='small'/>{selectedProduct && selectedProduct.name} <a style={{display: "none"}}> {selectedProduct && selectedProduct.id} </a>
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{ whiteSpace: 'pre-wrap', color: 'unset', mt: 1}}>
          Opis produktu: <br />
        <span style={{color: "#999694"}}>{selectedProduct && selectedProduct.description} </span>
        </DialogContentText>
          {selectedProduct && selectedProduct.discount > 0 ? (
            <DialogContentText id="alert-dialog-description" color='unset' sx={{mt: 2}}>
            Cena zakupu: <span style={{textDecoration: "line-through", color: "#999694"}}> {selectedProduct && selectedProduct.price} zł</span> <span style={{color: "#999694"}}> {selectedProduct && selectedProduct.discount} zł</span> 
            </DialogContentText>
          ) :           <DialogContentText id="alert-dialog-description" color='unset' sx={{mt: 2}}>
          Cena zakupu: <span style={{color: 'secondary'}}> {selectedProduct && selectedProduct.price} zł</span> 
        </DialogContentText>
        }
          <Autocomplete
           disablePortal
           options={players}
           getOptionLabel={(enteredName) => enteredName}
           sx={{ mt: 2 }}
           fullWidth
           renderOption={(props, enteredName) => (
             <Box component="li" {...props} display="flex" alignItems="center">
               <img
                 src={`https://mc-heads.net/avatar/${enteredName}`}
                 alt={enteredName.name}
                 style={{ width: 32, height: 32, marginRight: 8 }}
               />
               {enteredName}
             </Box>
           )}
           onChange={(event, newValue) => {
            setEnteredName(newValue);
          }}
           renderInput={(params) => (
            <Box display="flex" alignItems="center">
              <img
                src={`https://mc-heads.net/avatar/${params.inputProps.value}`}
                alt={params.inputProps.value}
                style={{ width: 32, height: 32, marginRight: 8 }}
              />
              <TextField {...params} label="Nickname" value={enteredName} />
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
                    required
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Przelew online / BLIK</MenuItem>
                    <MenuItem value={20}>PaySafeCard</MenuItem>
                    <MenuItem value={30}>SMS+</MenuItem>
                    <MenuItem value={40}>SMS</MenuItem>
                    <MenuItem value={50}>Waluta w grze</MenuItem>
                    {/* Bank transfer - przelew online, psc - paysafecard, sms - sms, cash - waluta w grze */}
                </Select>
                </FormControl>
            </Box>

            <Box sx={{mt: 2}}>
                <FormControlLabel
                  label={<Typography variant='underline' color='primary'>Zapoznałem się z <a href="/rules" target="_blank" style={{color: 'unset'}} rel="noopener noreferrer"> regulaminem sklepu </a> i <a href='/privacypolicy' target="_blank" style={{color: 'unset'}} rel="noopener noreferrer"> polityką prywatności</a></Typography>}
                  control={
                    <Checkbox
                      value=""
                      onChange={handleChangeCheckbox}
                      color="secondary"
                      required
                    />
                  }
                />
            </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='red'>Zamknij</Button>
          <Button type="submit" autoFocus>
            Przejdź do płatności
          </Button>
        </DialogActions>
        </form>
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