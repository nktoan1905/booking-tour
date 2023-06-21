import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  addImage,
  removeImage,
} from "../../../../../../redux/api/tourApiHandler";
import { useDispatch, useSelector } from "react-redux";
import { getImagePublicIdOfToursImageFolder } from "../../../../../../Helper/StringHelper";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import DeleteIcon from '@mui/icons-material/Delete';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ListImageOfTour = () => {
  const { tourId } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const tours = useSelector((state) => state.tours.tours.tours);
  const tourDetail = tours.find((tour) => tour.id === Number(tourId));
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const dispatch = useDispatch();
  const [imageSelected, setImageSelected] = useState({
    file: null,
    url: "https://www.raisin.digital/wp-content/uploads/placeholder.svg",
  });

  const handleUploadFile = async () => {
    var newImageLink;
    const formData = new FormData();
    formData.append("file", imageSelected.file);
    formData.append("upload_preset", "kifxio8y");
    await axios
      .post(
        "https://api.cloudinary.com/v1_1/dlu4c764b/image/upload",
        formData,
        { params: { folder: "toursImage" } }
      )
      .then((res) => {
        newImageLink = res.data.url;
        setImageSelected({
          file: null,
          url: "https://www.raisin.digital/wp-content/uploads/placeholder.svg",
        });
      });
    await addImage(
      dispatch,
      tourDetail.id,
      {
        imageLink: newImageLink,
        imageName: getImagePublicIdOfToursImageFolder(newImageLink),
      },
      currentUserAccessToken,
      toast
    );
  };
  const handleDeleteFile = async (image) => {
    const publicId = image.imageName;
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
    await removeImage(
      dispatch,
      tourDetail.id,
      image.id,
      currentUserAccessToken,
      toast
    );
  };
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Button
            variant="contained"
            className="float-end"
            size="small"
            onClick={handleOpen}
          >
            Add Image
          </Button>
        </Col>
      </Row>
      <Row>
        <ImageList sx={{ width: "100%", height: "700px" }} cols={5} gap={8}>
          {tourDetail.images.map((item) => (
            <ImageListItem
              key={item.id}
              style={{ width: "100%", objectFit: "cover" }}
            >
              <img
                src={`${item.imageLink}`}
                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.imageName}
                loading="lazy"
              />
              <ImageListItemBar
                // title={item.title}
                // subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                    onClick={() => handleDeleteFile(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Row>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload image
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="text-center">
              <img
                src={imageSelected.url}
                style={{ width: "300px", height: "300px", objectFit: "fill" }}
                alt="avatar"
              />
              <h6 className="text-break">Upload a different photo...</h6>
              <input
                type="file"
                className="text-center center-block file-upload"
                onChange={(e) =>
                  setImageSelected({
                    file: e.target.files[0],
                    url: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
              <Button
                variant="contained"
                className="mt-3"
                onClick={handleUploadFile}
              >
                Upload image
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];

export default ListImageOfTour;
