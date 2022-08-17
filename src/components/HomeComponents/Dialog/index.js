import {
  Dialog,
  TextField,
  DialogContent,
  Box,
  IconButton,
  DialogActions,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import TableDialogStyle from "./TableDialog.style";

const Tabledialog = ({
  isShownAmount,
  setAmount,
  setIsEditable,
  dialogType,
  setIsShownAmount,
  dialogContent,
  handleEditValues,
  isEditable,
}) => {
  return (
    <>
      <Box className="dilogcus dilogcushide"
        onMouseOver={() => {
          setIsShownAmount(true);
        }}
        onMouseLeave={() => {
          setIsShownAmount(false);

        }}
      >
        <TableDialogStyle>
          <Box className="dialogcontent">
            <Box className="amount_content">
              <h3>Amount :</h3>
              <div className="content-cp">
                <TextField
                  onChange={(e) => setAmount(+e.target.value)}
                  defaultValue={
                    dialogType === "amount"
                      ? dialogContent?.amount_received
                      : dialogContent?.expenses
                  }
                  disabled={isEditable ? false : true}
                />
                <IconButton>
                  {isEditable ? (
                    <DoneIcon
                      className="done_Icon"
                      onClick={() =>
                        handleEditValues(
                          dialogContent?.id,
                          dialogType === "amount" ? "total_amount" : "expense"
                        )
                      }
                    />
                  ) : (
                    <EditIcon
                      className="Edit_icon"
                      onClick={() => setIsEditable(true)}
                    />
                  )}
                </IconButton>
              </div>
            </Box>
            <Box className="bottom_content">
              <span>
                {" "}
                Note :{" "}
                {dialogType === "amount"
                  ? dialogContent?.notes.amount_note
                  : dialogContent?.notes.expense_note}
              </span>
              <span>
                Date :{" "}
                {dialogType === "amount"
                  ? dialogContent?.dates.amount_note
                  : dialogContent?.dates.expense_note}
              </span>
            </Box>
          </Box>



        </TableDialogStyle>
      </Box>
    </>
  );
};
export default Tabledialog;
