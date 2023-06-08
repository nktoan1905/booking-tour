import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalConfirm = ({ open, handleClose, deleteCallback, title, itemId }) => {
  const handleOnClickYes = () => {
    deleteCallback(itemId);
    handleClose();

  };
  const handleOnClickNo = () => {
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
          style={{ borderBottom: "1px solid #000000", padding: "4px" }}
        >
          {title}
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          className="d-flex justify-content-between"
        >
          <Button variant="danger" onClick={handleOnClickYes}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleOnClickNo}>
            No
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalConfirm;
