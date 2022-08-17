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

  .dilogcus {
    position: absolute;
    top: 130px;
    width: 100%;
    background: #fff;
    max-width: 410px;
    right: 190px;
    padding: 20px;
    border: 1px solid #fefefe;
    box-shadow: 4px 6px 16.2px 1.8px rgb(0 0 0 / 9%);
    button.MuiButtonBase-root {
      text-align: center;
      background-color: var(--purple);
      border: 1px solid var(--purple);
      padding: 0.6rem 1.5rem;
      color: #fff;
      border-radius: 0.358rem;
      transition: 0.3s ease all;
      margin-left: 10px;
      svg.MuiSvgIcon-root {
        color: #fff;
      }
    }
  }
`;
export default HomeStyles;