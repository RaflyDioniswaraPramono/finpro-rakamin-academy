import PropTypes from "prop-types";
import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";
import { XMarkIcon } from "../../assets";

const AlertBox = (props) => {
  AlertBox.propTypes = {
    showAlert: PropTypes.any,
    setShowAlert: PropTypes.func,
    alertMessage: PropTypes.string,
    alertSeverity: PropTypes.string,
    alertTitle: PropTypes.string
  };

  return (
    <div className="absolute right-5 top-5 z-[100]">
      <Collapse in={props.showAlert}>
        <Alert
          severity={props.alertSeverity}
          variant="filled"
          sx={{ mb: 2 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                props.setShowAlert(false);
              }}>
              <XMarkIcon />
            </IconButton>
          }>
          <AlertTitle>{props.alertTitle}</AlertTitle>
          {props.alertMessage}
        </Alert>
      </Collapse>
    </div>
  );
};

export default AlertBox;
