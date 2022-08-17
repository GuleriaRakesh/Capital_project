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
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { display } from "@mui/system";
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
  const [rowValues, setRowValues] = React.useState<any>([
    {
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
      loan_id: 123456,
      borrower_name: "Rakesh Kumar",
      Loan_officer_name: "James",
    },
    {
      id: 2,
      expenses: 200,
      amount_received: 2000,
      how_amount_received: "By cheque",
      notes: {
        amount_note: "Recieved Successfully",
        expense_note: "Not Expense",
        loa_note: "Full Amount recieved",
        pr_note: "None recieved",
      },
      dates: {
        amount_note: "06/08/2022",
        expense_note: "07/08/2022",
        loan_date: "01/08/2022",
      },
      loan_id: 123456,
      borrower_name: "Rakesh Kumar",
      Loan_officer_name: "James",
    },
    {
      id: 3,
      expenses: 3000,
      amount_received: 300000,
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
      loan_id: 123456,
      borrower_name: "Rakesh Kumar",
      Loan_officer_name: "James",
    },
  ]);
  const [isShownAmount, setIsShownAmount] = useState<boolean>(false);
  const [isShownExpense, setIsShownExpense] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const [dialogContent, setDialogContent] = useState<any>();

  const handleEditValues = (id: number, type: string) => {
    const objIndex = rowValues.findIndex((value: any) => value.id === id);
    if (objIndex > -1) {
      if (type === "total_amount") {
        rowValues[objIndex]["amount_received"] = amount;
      } else {
        rowValues[objIndex]["expenses"] = amount;
      }
    }
  };

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
                <Box sx={{ display: "flex" }}>
                  <Box>Total Amount : $ </Box>
                  <Box
                    sx={{ color: "#805ad8" }}
                    onMouseOver={() => {
                      setIsShownAmount(true);
                      setDialogContent(params.row);
                    }}
                  >
                    {params.row.amount_received}
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box>Expenses : $ </Box>
                  <Box
                    sx={{ color: "#d55ad8" }}
                    onMouseOver={() => {
                      setIsShownAmount(true);
                      setDialogContent(params.row);
                    }}
                  >
                    {params.row.expenses}
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  {" "}
                  <Box>Net Amount : $ </Box>
                  <Box sx={{ color: "#31a534" }}>
                    {params.row.amount_received - params.row.expenses}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Dialog
              className="popup_1"
              open={isShownAmount}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent className="popup_1_content">
                <Box className="dialogcontent">
                  <Box className="amount_content">
                    Amount :
                    <TextField
                      onChange={(e) => setAmount(+e.target.value)}
                      defaultValue={dialogContent?.amount_received}
                      disabled={isEditable ? false : true}
                    />
                    <IconButton>
                      {isEditable ? (
                        <DoneIcon
                          className="done_Icon"
                          onClick={() =>
                            handleEditValues(dialogContent?.id, "total_amount")
                          }
                        />
                      ) : (
                        <EditIcon
                          className="Edit_icon"
                          onClick={() => setIsEditable(true)}
                        />
                      )}
                    </IconButton>
                  </Box>
                  <Box className="bottom_content">
                    <span> Note : {dialogContent?.notes.amount_note}</span>
                    <span>Date : {dialogContent?.dates.amount_note}</span>
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    setIsShownAmount(false);
                    setIsEditable(false);
                  }}
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog
              className="popup_2"
              open={isShownExpense}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <Box>
                  <Box>
                    Amount :
                    <TextField
                      onChange={(e) => setAmount(+e.target.value)}
                      defaultValue={dialogContent?.expenses}
                      disabled={isEditable ? false : true}
                    />
                    <IconButton>
                      {isEditable ? (
                        <DoneIcon
                          onClick={() =>
                            handleEditValues(dialogContent?.id, "expense")
                          }
                        />
                      ) : (
                        <EditIcon onClick={() => setIsEditable(true)} />
                      )}
                    </IconButton>
                  </Box>
                  <Box className="bottom_content">
                    <p>
                      <span className="commo_he"> Note :</span>
                      <span>{dialogContent?.notes.expense_note}</span>
                    </p>
                    <p>
                      <span className="commo_he">Date : </span>
                      <span>{dialogContent?.dates.expense_note}</span>
                    </p>
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    setIsShownExpense(false);
                    setIsEditable(false);
                  }}
                >
                  Close
                </Button>
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
