import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box, createTheme, ThemeProvider } from "@mui/system";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import MaterialTable from "material-table";
import React, { useState } from "react";
import ResponsiveAppBar from "../components/navbarDashboard";
import useStyles from "@mui/material/useStyles";

const theme = createTheme({
  palette: {
    inherit: "white",
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function workshop({ deckinfo }) {
  let frontArray: any[] = [];
  console.log(deckinfo.data.attributes.flashcards.data[0].attributes.front);
  for (var i = 0; i < deckinfo.data.attributes.flashcards.data.length; i++) {
    frontArray.push(
      deckinfo.data.attributes.flashcards.data[i].attributes.front
    );
    console.log(frontArray);
  }

  let backArray: any[] = [];
  for (var i = 0; i < deckinfo.data.attributes.flashcards.data.length; i++) {
    backArray.push(deckinfo.data.attributes.flashcards.data[i].attributes.back);
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
  console.log(makeArrays(idArray, frontArray, backArray));
  const arrayss = makeArrays(idArray, frontArray, backArray);
  console.dir(makeArrays(idArray, frontArray, backArray));

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "front", headerName: "Question", width: 400 },
    { field: "back", headerName: "Answer", width: 600 },
  ];
  const rows = [makeArrays(idArray, frontArray, backArray)];
  let input = makeArrays(idArray, frontArray, backArray);

  const DisplayData = input.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.question}</td>
        <td>{info.answer}</td>
      </tr>
    );

    const [value, setValue] = useState("");
  });

  const [inputID1, setinputID1] = useState("");
  const [inputID2, setinputID2] = useState("");
  const [inputquestion1, setinputquestion1] = useState("");
  const [inputquestion2, setinputquestion2] = useState("");
  const [inputanswer1, setinputanswer1] = useState("");
  const [inputanswer2, setinputanswer2] = useState("");

  // const classes = useStyles();
  // const [id, setID] = useState([]);
  // const [question, setQuestion] = useState([]);
  // const [answer, setAnswer] = useState([]);
  // const [search, setSearch] = useState("");

  return (
    <main>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <Typography variant="h4" sx={{ color: "white" }}>
          Workshop
        </Typography>

        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <TextField
            label="Deck Name"
            value={deckinfo?.data.attributes?.name}
            inputRef={deckinfo}
            variant="outlined"
            sx={{
              marginRight: 5,
              borderColor: "white",
              color: "white",
            }}
          ></TextField>
          <Button
            variant="outlined"
            sx={{
              marginTop: "1%",
              borderColor: "white",
              color: "white",
            }}
          >
            Save
          </Button>
        </Box>

        <Box sx={{ marginTop: "5%" }}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Question</th>
                  <th>Answer</th>
                </tr>
              </thead>
              <tbody>{DisplayData}</tbody>
            </table>
          </div>
        </Box>

        <Box>
          <TextField
            label="Card ID"
            inputRef={deckinfo}
            variant="outlined"
            sx={{
              marginTop: "5%",
              marginRight: 5,
              borderColor: "white",
              color: "white",
            }}
          ></TextField>
          <TextField
            label="New Question"
            inputRef={deckinfo}
            variant="outlined"
            sx={{
              marginTop: "5%",
              marginRight: 5,
              borderColor: "white",
              color: "white",
            }}
          ></TextField>
          <TextField
            label="New Answer"
            inputRef={deckinfo}
            variant="outlined"
            sx={{
              marginTop: "5%",
              marginRight: 5,
              borderColor: "white",
              color: "white",
            }}
          ></TextField>
          <Button
            variant="outlined"
            sx={{
              marginTop: "6%",
              borderColor: "white",
              color: "white",
            }}
          >
            Add
          </Button>
        </Box>

        <Box>
          <TextField
            label="Card ID"
            inputRef={deckinfo}
            variant="outlined"
            sx={{
              marginTop: "5%",
              marginRight: 5,
              borderColor: "white",
              color: "white",
            }}
          ></TextField>
          <TextField
            label="Edit Question"
            inputRef={deckinfo}
            variant="outlined"
            sx={{
              marginTop: "5%",
              marginRight: 5,
              borderColor: "white",
              color: "white",
            }}
          ></TextField>
          <TextField
            label="Edit Answer"
            inputRef={deckinfo}
            variant="outlined"
            sx={{
              marginTop: "5%",
              marginRight: 5,
              borderColor: "white",
              color: "white",
            }}
          ></TextField>
          <Button
            variant="outlined"
            sx={{
              marginTop: "6%",
              borderColor: "white",
              color: "white",
            }}
          >
            Edit
          </Button>
        </Box>
        {/* <Button
          variant="outlined"
          fullWidth
          sx={{
            marginTop: 5,
            borderColor: "white",
            color: "white",
          }}
        >
          Save
        </Button> */}
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
