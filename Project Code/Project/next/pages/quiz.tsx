import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import ResponsiveAppBar from "../components/navbarDashboard";

export default function Quiz(deckinfo) {
  const [show, setShow] = useState(false);
  let frontArray: any[] = [];
  for (
    var i = 0;
    i < deckinfo.deckinfo.data.attributes.flashcards.data.length;
    i++
  ) {
    frontArray.push(
      deckinfo.deckinfo.data.attributes.flashcards.data[i].attributes.front
    );
    console.log(frontArray);
  }

  let backArray: any[] = [];
  for (
    var i = 0;
    i < deckinfo.deckinfo.data.attributes.flashcards.data.length;
    i++
  ) {
    backArray.push(
      deckinfo.deckinfo.data.attributes.flashcards.data[i].attributes.back
    );
    console.log(backArray);
  }

  let idArray: any[] = [];
  for (var i = 0; i < backArray.length; i++) {
    idArray.push(i + 1);
    console.log(idArray);
  }

  const makeArrays = (
    idArray: number[],
    frontArray: string[],
    backArray: string[]
  ) => {
    const test = [];
    for (let i = 0; i < idArray.length; i++) {
      test.push({
        id: idArray[i],
        question: frontArray[i],
        answer: backArray[i],
      });
    }
    return test;
  };

  let output = makeArrays(idArray, frontArray, backArray);
  let count = 0;

  function add() {
    count = count + 1;
  }

  return (
    <main>
      <ResponsiveAppBar></ResponsiveAppBar>

      <Container>
        {/* <Box sx = {{display: 'flex',
                 flexDirection: 'row',
                 alignItems: 'center'}}>    */}
        <Card
          sx={{
            minWidth: "300",
            backgroundColor: "gray",
            marginLeft: "20%",
            marginTop: "20%",
            marginRight: "20%",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                {output[count].question}
              </Typography>
              {show ? (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  {output[count].answer}
                </Typography>
              ) : null}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              sx={{ marginLeft: "32%", color: "black", borderColor: "black" }}
              onClick={() => setShow(true)}
            >
              Check Answer
            </Button>
          </CardActions>
        </Card>
        <Button
          size="large"
          color="primary"
          sx={{ marginLeft: "45%" }}
          onClick={() => add()}
        >
          Next
        </Button>
        {/* </Box> */}
        <Box
          sx={{
            marginTop: "5%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button size="large" color="primary" sx={{ marginLeft: "30%" }}>
            Easy
          </Button>
          <Button size="large" color="primary" sx={{ marginLeft: "10%" }}>
            Medium
          </Button>
          <Button size="large" color="primary" sx={{ marginLeft: "10%" }}>
            Hard
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button size="large" color="primary" sx={{}}>
            Incorrect
          </Button>
        </Box>
      </Container>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:1337/api/decks/2?fields=name&populate=flashcards"
  );
  let deckinfo = await res.json();
  // console.log(deck)

  return {
    props: { deckinfo },
  };
}
