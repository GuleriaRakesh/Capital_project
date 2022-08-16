import React, { useState } from "react";
import HomeStyles from "./Home.style";
import {
  AppBar,
  Box,
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Link,
  SelectChangeEvent,
  TextField,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
interface State {
  amount: string;
  expenses: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function HomePage() {
  const [rowValues, setRowValues] = React.useState<any>([{
    id: 1,
    expenses: 1000,
    amount_received: 10000,
    how_amount_received: "By cheque",
    notes: {
      amount_note: "Recieved Successfully",
      expense_note: "Not Expense",
      loa_note: "Full Amount recieved",
      pr_note: "None recieved",
    },
    dates: {
      amount_note: "16/08/2022",
      expense_note: "17/08/2022",
      loan_date: "10/08/2022",
    },
    LOA_amount: "$90,000",
    LOA_percent: "20%",
    PR_amount: "$500",
    loan_id: 123456,
    borrower_name: "Rakesh Kumar",
    Loan_officer_name: "James",
  }]);
  const [isShownAmount, setIsShownAmount] = useState<boolean>(false);
  const [isShownExpense, setIsShownExpense] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0)

  const handleEditValues = (id: number, type: string) => {
    const objIndex = rowValues.findIndex((value: any) => value.id === id);
    if (objIndex > -1) {
      if (type === 'total_amount') {
        rowValues[0]['amount_received'] = amount;
      }
      else {
        rowValues[0]['expenses'] = amount;
      }
    }
  }

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "loan_details",
      headerName: "Loan Details",
      flex: 1,
      sortable: false,
      align: "left",
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <>
            <Box
              className="name_main"
              style={{ cursor: "pointer", display: "flex" }}
            >
              <Box>
                <Box>
                  Loan ID : <Link href="#"> {params.row.loan_id}</Link>
                </Box>
                <Box>Borrower Name : {params.row.borrower_name}</Box>
                <Box> Loan Officer Name : {params.row.Loan_officer_name}</Box>
                <Box>Date Closed : {params.row.dates.loan_date}</Box>
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: "amount_received",
      headerName: "Amount received from bank",
      flex: 1,
      sortable: false,
      align: "left",
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <>
            <Box
              className="name_main"
              style={{ cursor: "pointer", display: "flex" }}
            >
              <Box>
                <Box
                  // onMouseEnter={() => setIsShown(true)}
                  // onMouseLeave={() => setIsShown(false)}
                  onMouseOver={() => setIsShownAmount(true)}
                >
                  Total Amount :{" "}
                  $ {params.row.amount_received}
                </Box>
                <Box onMouseOver={() => setIsShownExpense(true)}>Expenses : $ {params.row.expenses}</Box>
                <Box>
                  {" "}
                  Net Amount :${" "}
                  {params.row.amount_received - params.row.expenses}
                </Box>
              </Box>
            </Box>
            <Dialog
              open={isShownAmount}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Box>
                    <Box>
                      Amount :
                      <TextField
                        onChange={(e) => setAmount(+e.target.value)}
                        defaultValue={params.row.amount_received}
                        disabled={isEditable ? false : true} />
                      <IconButton>{isEditable ? <DoneIcon onClick={() => handleEditValues(params.row.id, 'total_amount')} /> : <EditIcon onClick={() => setIsEditable(true)} />}</IconButton>
                    </Box>
                    <Box> Note : {params.row.notes.amount_note}</Box>
                    <Box>date : {params.row.dates.amount_note}</Box>
                  </Box>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => { setIsShownAmount(false); setIsEditable(false) }}>Close</Button>
              </DialogActions>
            </Dialog>

            <Dialog
              open={isShownExpense}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <Box>
                  <Box>
                    Amount :
                    <TextField onChange={(e) => setAmount(+e.target.value)} defaultValue={params.row.expenses} disabled={isEditable ? false : true} />
                    <IconButton>{isEditable ? <DoneIcon onClick={() => handleEditValues(params.row.id, 'expense')} /> : <EditIcon onClick={() => setIsEditable(true)} />}</IconButton>
                  </Box>
                  <Box> Note : {params.row.notes.expense_note}</Box>
                  <Box>date : {params.row.dates.expense_note}</Box>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => { setIsShownExpense(false); setIsEditable(false) }}>Close</Button>
              </DialogActions>
            </Dialog>
          </>
        );
      },
    },
  ];
  return (
    <HomeStyles>
      <div className="HomePage">
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <h1>Dashboard</h1>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <Box
          sx={{
            "& .super-app-theme--header": {
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: 600,
              },
            },
            height: 400,
            width: "100%",
            textAlign: "left",
          }}
        >
          <DataGrid
            rows={rowValues}
            columns={columns}
            pageSize={5}
            disableColumnFilter={true}
            disableColumnSelector={true}
            disableColumnMenu={true}
            rowsPerPageOptions={[5]}
            rowHeight={100}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </HomeStyles>
  );
}
