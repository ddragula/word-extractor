import React, { useEffect } from "react";
import resultPageStyles from "./resultPageStyles";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

function ResultPage({ words }) {
  const classes = resultPageStyles();

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h4" style={{ marginBottom: 15 }}>
        Result:
      </Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Word</TableCell>
              <TableCell align="right">Repeats</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {words.map((row) => (
              <TableRow key={row.word}>
                <TableCell component="th" scope="row">
                  {row.word}
                </TableCell>
                <TableCell align="right">{row.repeats}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ResultPage;
