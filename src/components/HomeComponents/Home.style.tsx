import styled from "styled-components";

const HomeStyles = styled.div`
  .HomePage {
    font-family: sans-serif;
    text-align: center;
    .MuiDataGrid-cell {
      height: 200px;
    }
  }

  .MuiAppBar-root.MuiAppBar-colorPrimary {
    background: #4b9aff;
  }

  .MuiDataGrid-row[role="row"]:nth-child(2n) {
    background: #f7f7f7;
  }
  h1 {
    font-size: 20px;
  }

  .izLKnD .MuiAppBar-root.MuiAppBar-colorPrimary {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    display: flex;
    width: 100%;
    color: #fff;
    padding: 8px 16px;
    -webkit-transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: none;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-style: solid;
    border-color: #e7ebf0;
    border-width: 0;
    border-bottom-width: thin;
    background-color: var(--purple);
  }
  .css-lz5g83 .super-app-theme--header {
    background: #e3dddd;
  }

  /* popup */
  .popup_1 .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded {
    border: none;
    margin-bottom: 2rem;
    -webkit-box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    border-radius: 5px;
    width: 100%;
  }
  .popup_1 .amount_content {
    flex-direction: column-reverse;
  }
  .amount_content .MuiFormControl-root.MuiTextField-root {
    width: calc(100% - 40px);
    margin: 10px auto;
  }
  .done_Icon {
    color: var(--purple);
  }
  .popup_1 .MuiDialogActions-root button {
    text-align: center;
    background-color: var(--purple);
    border: 1px solid var(--purple);
    padding: 0.786rem 1.5rem;
    color: #fff;
    border-radius: 0.358rem;
    transition: 0.3s ease all;
  }
  .popup_1 .MuiDialogActions-root button:hover {
    background: #fff;
    color: var(--ppurple);
  }
  .bottom_content span {
    display: flex;
    flex-wrap: wrap;
  }
  .bottom_content {
    margin-top: 10px;
  }
`;
export default HomeStyles;
