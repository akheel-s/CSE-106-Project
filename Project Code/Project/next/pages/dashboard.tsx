import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardDeck from "../components/DashboardDeck";
import ResponsiveAppBar from "../components/navbarDashboard";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { AddCircle, PhotoCamera } from "@material-ui/icons";
import axios from "axios";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@material-ui/core";
import { useState } from "react";

const theme = createTheme();

export default function Album({ decks }) {
  // console.log(decks.data);
  let array2: any[] = [];
  for (var i = 0; i < decks.data.length; i++) {
    for (var key in decks.data[i]) {
      array2.push(decks.data[i][key].name);
      console.log(decks.data[i][key].name);
    }
    var data = array2.filter(function (x) {
      return x !== undefined;
    });
  }

  const [open, setOpen] = React.useState(false);
  const [inputDeck, setinputDeck] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addDeck = (e) => {
    const post = axios.post("http://localhost:1337/api/decks", {
      data: {
        name: inputDeck,
      },
    });
  };

  return (
    <main>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container sx={{ py: 8, marginTop: "0%" }} maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            Library
          </Typography>
          <IconButton
            onClick={handleClickOpen}
            color="info"
            size="large"
            component="span"
            sx={{ marginLeft: "50%" }}
          >
            <AddCircle />
          </IconButton>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Deck</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter the name of your new deck.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Deck Name"
                fullWidth
                value={inputDeck}
                variant="standard"
                onChange={(e) => setinputDeck(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={addDeck}>Add</Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Grid container spacing={4} sx={{ marginTop: "1%" }}>
          {data.map((value, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <DashboardDeck deckname={value}></DashboardDeck>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:1337/api/decks?fields=name&populate=flashcards"
  );
  let decks = await res.json();

  return {
    props: { decks },
  };
}

export async function addDeck() {
  let val = document.getElementById("name");
  const post = axios.post("http://localhost:1337/api/decks", {
    data: {
      name: val,
    },
  });
}
