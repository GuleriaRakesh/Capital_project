import React from 'react'
import HomeStyles from './Home.style';
import { AppBar, Box, createTheme, Link, SelectChangeEvent, ThemeProvider, Toolbar } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface State {
    amount: string;
    expenses: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function HomePage() {
    const [percentage, setPercentage] = React.useState('');
    const [values, setValues] = React.useState<State>({
        amount: '',
        expenses: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (event: SelectChangeEvent) => {
        setPercentage(event.target.value as string);
    };
    const handleChangeCurrency =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const rows = [
        {
            id: 1,
            expenses: '$50,000',
            amount_received: '$500,000',
            how_amount_received: 'By cheque',
            notes: {
                amount_note: "Recieved Successfully",
                expense_note: "Not Expense",
                loa_note: "Full Amount recieved",
                pr_note: "None recieved"
            },
            dates: {
                amount_note: "16/08/2022",
                expense_note: "16/08/2022"
            },
            LOA_amount: "$90,000",
            LOA_percent: '20%',
            PR_amount: "$500"
        },
        {
            id: 2,
            expenses: '$20,000',
            amount_received: '$100,000',
            how_amount_received: 'By cheque',
            notes: {
                amount_note: "Recieved Successfully",
                expense_note: "Not Expense",
                loa_note: "Full Amount recieved",
                pr_note: "None recieved"
            },
            dates: {
                amount_note: "16/08/2022",
                expense_note: "16/08/2022"
            },
            LOA_amount: "$24,000",
            LOA_percent: '30%',
            PR_amount: "$100"
        },
        {
            id: 3,
            expenses: '$150,000',
            amount_received: '$1,000,000',
            how_amount_received: 'By cheque',
            notes: {
                amount_note: "Recieved Successfully",
                expense_note: "Not Expense",
                loa_note: "Full Amount recieved",
                pr_note: "None recieved"
            },
            dates: {
                amount_note: "16/08/2022",
                expense_note: "16/08/2022"
            },
            LOA_amount: "$425,000",
            LOA_percent: '50%',
            PR_amount: "$5000"
        },
    ];
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100, headerClassName: 'super-app-theme--header', },
        {
            field: 'amount_received',
            headerName: 'Amount Received from Bank',
            width: 275,
            sortable: false,
            align: 'left',
            headerClassName: 'super-app-theme--header',
            renderCell: (params) => {
                console.log("params")
                return (
                    <>
                        <Box
                            className="name_main"
                            style={{ cursor: "pointer", display: "flex" }}>
                            <Box >
                                <Box>Amount : <Link href="#"> {params.row.amount_received}</Link></Box>
                                <Box>How it was received : {params.row.how_amount_received}</Box>
                                <Box> Note : {params.row.notes.amount_note}</Box>
                                <Box>date : {params.row.dates.amount_note}</Box>
                            </Box>
                        </Box>
                    </>
                );
            },
        },
        {
            field: 'expenses',
            headerName: 'Expenses',
            width: 275,
            sortable: false,
            align: 'left',
            headerClassName: 'super-app-theme--header',
            renderCell: (params) => {
                console.log("params")
                return (
                    <>
                        <Box
                            className="name_main"
                            style={{ cursor: "pointer", display: "flex" }}>
                            <Box >
                                <Box>Amount : <Link href="#">{params.row.expenses}</Link></Box>
                                <Box>How it was paid : {params.row.notes.expense_note}</Box>
                                <Box> Note : {params.row.notes.expense_note}</Box>
                                <Box>date : {params.row.dates.expense_note}</Box>
                            </Box>
                        </Box>
                    </>
                );
            },
        },
        {
            field: 'LOA_amount',
            headerName: 'Loan officer Amount',
            sortable: false,
            width: 275,
            align: 'left',
            headerClassName: 'super-app-theme--header',
            renderCell: (params) => {
                console.log("params")
                return (
                    <>
                        <Box
                            className="name_main"
                            style={{ cursor: "pointer", display: "flex" }}>
                            <Box >
                                <Box>Amount : <Link href="#">{params.row.LOA_amount}</Link></Box>
                                <Box>Percentage : {params.row.LOA_percent}</Box>
                                <Box> Note : {params.row.notes.loa_note}</Box>
                            </Box>
                        </Box>
                    </>
                );
            },
        },
        {
            field: 'PR_amount',
            headerName: 'Processor Amount',
            sortable: false,
            width: 275,
            align: 'left',
            headerClassName: 'super-app-theme--header',
            renderCell: (params) => {
                console.log("params")
                return (
                    <>
                        <Box
                            className="name_main"
                            style={{ cursor: "pointer", display: "flex" }}>
                            <Box >
                                <Box>Amount : <Link href="#">{params.row.PR_amount}</Link></Box>
                                <Box> Note : {params.row.notes.pr_note}</Box>
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
                    <AppBar position="static" color="primary" >
                        <Toolbar>
                            <h1>Dashboard</h1>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
                <Box sx={{
                    '& .super-app-theme--header': {
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 600,
                        }
                    }, height: 400, width: '100%', textAlign: "left"
                }}>
                    <DataGrid
                        rows={rows}
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
