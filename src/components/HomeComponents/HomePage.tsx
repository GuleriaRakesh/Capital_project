import React, { useState } from "react";
import HomeStyles from "./Home.style";
import {
  AppBar,
  Box,
  createTheme,
  Link,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../Common.css";
import Tabledialog from "./Dialog";

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
      loan_amount: 100000,
      borrower_name: "Rakesh Kumar",
      Loan_officer_name: "James",
      Processor_name: "Thomas",
      Processor_amount: 200,
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
      loan_amount: 200000,
      borrower_name: "Rakesh Kumar",
      Loan_officer_name: "James",
      Processor_name: "Will",
      Processor_amount: 600,
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
      loan_amount: 300000,
      borrower_name: "Rakesh Kumar",
      Loan_officer_name: "James",
      Processor_name: "Jane",
      Processor_amount: 400,
    },
  ]);
  const [isShownAmount, setIsShownAmount] = useState<boolean>(false);
  const [dialogType, setDialogType] = useState<string>("");
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
                <Box>Loan Amount : $ {params.row.loan_amount}</Box>
                <Box sx={{ display: "flex" }}>
                  <Box>Total Amount : $ </Box>
                  <Box
                    className="dilogcus"
                    sx={{ color: "#805ad8" }}
                    onMouseOver={() => {
                      setDialogContent(params.row);
                      setDialogType("amount");
                      setIsShownAmount(true);
                    }}
                    onMouseLeave={() => {
                      setIsShownAmount(false);
                    }}
                  >
                    {params.row.amount_received}
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box>Expenses : $ </Box>
                  <Box
                    sx={{ color: "#d55ad8" }}
                    className="dilogcus"
                    onMouseOver={() => {
                      setDialogContent(params.row);
                      setDialogType("expenses");
                      setIsShownAmount(true);
                    }}
                    onMouseLeave={() => {
                      setIsShownAmount(false);
                    }}
                  >
                    {params.row.expenses}
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  {" "}
                  <Box>Net Amount : $ </Box>
                  <Box sx={{ color: "#31a534" }} >
                    {params.row.amount_received - params.row.expenses}
                  </Box>
                </Box>
              </Box>
            </Box>

          </>
        );
      },
    },
    {
      field: "processor",
      headerName: "Processor",
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
                <Box>Amount : ${params.row.Processor_amount}</Box>
                <Box>Processor Name : {params.row.Processor_name}</Box>
              </Box>
            </Box>
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
          {isShownAmount &&
            <Tabledialog
              isShownAmount={isShownAmount}
              setAmount={setAmount}
              setIsEditable={setIsEditable}
              dialogType={dialogType}
              setIsShownAmount={setIsShownAmount}
              dialogContent={dialogContent}
              handleEditValues={handleEditValues}
              isEditable={isEditable}
            />
          }
        </Box>
      </div>
    </HomeStyles>
  );
}
