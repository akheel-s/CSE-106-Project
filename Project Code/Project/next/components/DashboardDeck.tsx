import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import Link from "next/link";

const DashboardDeck = ({ deckname }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "gray",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {deckname}
        </Typography>
        <Typography></Typography>
      </CardContent>
      <CardActions>
        <Link href="/workshop">
          <Button size="small">Edit</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default DashboardDeck;
