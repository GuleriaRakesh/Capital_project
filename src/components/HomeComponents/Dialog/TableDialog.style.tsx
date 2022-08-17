import styled from "styled-components";

const TableDialogStyle = styled.div`
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
export default TableDialogStyle;
