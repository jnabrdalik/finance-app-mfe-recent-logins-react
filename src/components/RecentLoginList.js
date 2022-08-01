import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function RecentLoginList() {
  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/logins")
      .then((res) => setLoginData(res.data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data logowania</TableCell>
            <TableCell>Klient</TableCell>
            <TableCell>Czy zalogowano</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loginData.map((loginEntry) => (
            <TableRow
              key={loginEntry.uid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {new Date(loginEntry.datetime).toLocaleString()}
              </TableCell>
              <TableCell>{loginEntry.userAgent}</TableCell>
              <TableCell>{loginEntry.success ? "Tak" : "Nie"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
