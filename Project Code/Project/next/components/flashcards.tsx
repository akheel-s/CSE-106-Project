import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import Link from "next/link";
import { CardActionArea } from "@mui/material";
import { Container } from "@mui/material";
  
  const DashboardDeck = ({ output }) => {
    return (
        <Container>
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
      </Container>
    )
  
  export default DashboardDeck;