import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, Row, Col } from "react-bootstrap";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useForm } from "react-hook-form";
import userApi from "../../../../../api/userApi";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalUpdateUser = ({
  open,
  handleClose,
  value,
}) => {
  const roleInputRender = (roleId) => {
    if ((roleId === 1) | (roleId === 2)) {
      return (
        <FormControl fullWidth>
          <InputLabel id="role">Role Name</InputLabel>
          <Select
            fullWidth
            label="Role Name"
            labelId="role"
            name="roleId"
            defaultValue={roleId}
            error={!!errors["roleId"]}
            helpertext={errors["roleId"] ? errors["roleId"].message : ""}
            {...register("roleId")}
          >
            <MenuItem value={1}>Admin</MenuItem>
            <MenuItem value={2}>Employee</MenuItem>
          </Select>
        </FormControl>
      );
    } else {
      return (
        <FormControl fullWidth>
          <InputLabel id="role">Role Name</InputLabel>
          <Select
            fullWidth
            label="Role Name"
            labelId="role"
            name="roleId"
            defaultValue={roleId}
            error={!!errors["roleId"]}
            helpertext={errors["roleId"] ? errors["roleId"].message : ""}
            {...register("roleId")}
          >
            <MenuItem value={3}>Member</MenuItem>
            <MenuItem value={4}>Siver Member</MenuItem>
            <MenuItem value={5}>Golden Member</MenuItem>
          </Select>
        </FormControl>
      );
    }
  };
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm();
  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    await userApi.updateRole(currentUserAccessToken, data, value.id);
    await userApi.updateStatus(currentUserAccessToken, data, value.id);
    handleClose();
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);
  return (
    <React.Fragment>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Update role & Update status
          </Typography>
          <Typography
            id="modal-description"
            sx={{ mt: 2 }}
            component="form"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <Container>
              <Row>
                <Col sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                      fullWidth
                      label="Status"
                      labelId="status"
                      name="status"
                      defaultValue={value.status}
                      error={!!errors["status"]}
                      helpertext={
                        errors["status"] ? errors["status"].message : ""
                      }
                      {...register("status")}
                    >
                      <MenuItem value={1}>Active</MenuItem>
                      <MenuItem value={0}>Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
                <Col sm={6}>{roleInputRender(value.roleId)}</Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ModalUpdateUser;
