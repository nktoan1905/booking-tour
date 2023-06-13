import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import CryptoJS from "crypto-js";

import HTMLReactPaser from "html-react-parser";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Row, Col } from "react-bootstrap";
import ModalConfirm from "../../../../components/ModalConfirm/ModalConfirm";
import { deleteNews } from "../../../../redux/api/newsApiHandler";
import { toast } from "react-toastify";
import axios from "axios";
import ModalChangeStatus from "../components/ModalChangeStatus/ModalChangeStatus";

const DetailNews = () => {
  const [open, setOpen] = useState(false);
  const [value, setvalue] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [openModalChangeStatus, setOpenModalChangeStatus] = useState(false);
  const handleOpenModalChangeStatus = (value) => {
    setOpenModalChangeStatus(true);
    setvalue(value);
  };
  const handleCloseModalChangeStatus = () => {
    setOpenModalChangeStatus(false);
  };
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataNewsList = useSelector((state) => state.news.news.listNews);
  const dataNews = dataNewsList.find((item) => item.id === Number(newsId));
  const currentUser = useSelector((state) => state.auth.login.currentUser.user);
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );

  const handleOnDelete = async (newsId) => {
    const publicId = dataNews.imageName;
    const cloudName = "dlu4c764b";
    const timestamp = Math.round(new Date().getTime() / 1000);
    const apiKey = "645973345167519";
    const apiSecret = "IrM4EOrDTXOYf6gvMOFREDIqJRY";
    const signature = CryptoJS.SHA1(
      `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
    ).toString();
    const deleteUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
    await axios.post(deleteUrl, {
      public_id: publicId,
      timestamp: timestamp,
      api_key: apiKey,
      signature: signature,
    });
    await deleteNews(dispatch, toast, navigate, currentUserAccessToken, newsId);
  };
  const renderAction = (userInfo, newsUserInfoId) => {
    if (userInfo.roleId === 1 && userInfo.id === newsUserInfoId) {
      // 3 action delete, edit, updateStatus
      return (
        <Col xs={6}>
          <Button
            variant="contained"
            endIcon={<DeleteIcon />}
            className="mb-3 float-end"
            onClick={() => handleOpen()}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            className="mb-3  mx-2 float-end"
            onClick={() => handleOpenModalChangeStatus(dataNews)}
          >
            Update Status
          </Button>
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            onClick={() => navigate(`/admin/news/edit/${newsId}`)}
            className="mb-3 float-end"
          >
            Edit
          </Button>
        </Col>
      );
    } else if (userInfo.roleId === 1 && userInfo.id !== newsUserInfoId) {
      // 2action delete updateStatus
      return (
        <Col xs={6}>
          <Button
            variant="contained"
            endIcon={<DeleteIcon />}
            className="mb-3 mx-2 float-end"
            onClick={() => handleOpen()}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            className="mb-3 float-end"
            onClick={() => handleOpenModalChangeStatus(dataNews)}
          >
            Update Status
          </Button>
        </Col>
      );
    } else if (userInfo.roleId !== 1 && userInfo.id === newsUserInfoId) {
      // action edit
      return (
        <Col xs={6}>
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            onClick={() => navigate(`/admin/news/edit/${newsId}`)}
            className="mb-3 float-end"
          >
            Edit
          </Button>
        </Col>
      );
    } else {
      // action ko co
      return "";
    }
  };
  useEffect(() => {
    document.title = dataNews.title;
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={6}>
          <Button
            variant="contained"
            endIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            className="mb-3"
          >
            Back
          </Button>
        </Col>
        {renderAction(currentUser, dataNews?.userInfo.id)}
      </Row>
      <Row>
        <Col xs={12}>
          <div className="content">
            <div className="fw-bold fs-3">{dataNews?.title}</div>
            <div className="">
              <Link
                className="text-decoration-none d-inline mx-3"
                to="/news/tin-tuc-du-lich/"
              >
                {dataNews?.type.name}
              </Link>
              <p className="d-inline">
                {moment(dataNews?.createdAt).format("L")}
              </p>
            </div>
            <div className="mt-5">
              {dataNews?.content
                ? HTMLReactPaser(dataNews?.content)
                : HTMLReactPaser("")}
            </div>
          </div>
        </Col>
      </Row>
      <ModalConfirm
        open={open}
        handleClose={handleClose}
        deleteCallback={handleOnDelete}
        title={`Bạn có muốn xóa bài viết này không`}
        itemId={dataNews?.id}
      ></ModalConfirm>
      <ModalChangeStatus
        open={openModalChangeStatus}
        handleClose={handleCloseModalChangeStatus}
        value={value}
      ></ModalChangeStatus>
    </Container>
  );
};

export default DetailNews;
