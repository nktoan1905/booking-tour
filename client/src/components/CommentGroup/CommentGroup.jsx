import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment, Form, Header } from "semantic-ui-react";
import commentApi from "../../api/commentApi";
import moment from "moment";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorList from "antd/es/form/ErrorList";

const schema = yup
  .object({
    newComment: yup.string().required("Please input something!"),
  })
  .required();
const CommentGroup = () => {
  const { tourId } = useParams();
  const [comments, setComments] = useState([]);
  const currentUser = useSelector(
    (state) => state.auth.login.currentUser?.user
  );
  const currentUserAcessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  useEffect(() => {
    const fetchData = async () => {
      const res = await commentApi.getAllCommentAndReply(tourId);
      setComments(res.data.comments);
    };
    fetchData();
  }, []);
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const handleOnAddComment = async (data, e) => {
    e.preventDefault();

    try {
      await commentApi.createComment(
        tourId,
        { text: data.newComment },
        currentUserAcessToken
      );
      const res = await commentApi.getAllCommentAndReply(tourId);
      setComments(res.data.comments);
      toast.success("Thêm comment thành công ");
    } catch (error) {
    }
  };
  const [replyComment, setReplyComment] = useState({
    commentId: null,
  });
  const handleOnclickReply = (id) => {
    setReplyComment({ commentId: id });
  };
  const handleOnReplyComment = async (e) => {
    e.preventDefault();
    const replyCommentText = e.target.elements.replyComment.value;
    try {
      await commentApi.createReplyComment(
        replyComment.commentId,
        {
          text: replyCommentText,
        },
        currentUserAcessToken
      );
      const res = await commentApi.getAllCommentAndReply(tourId);
      setComments(res.data.comments);
      toast.success("Thêm comment thành công ");
      e.target.elements.replyComment.value = "";
    } catch (error) {
      toast.error("Thêm comment thất bại ");
    }
  };
  const handleOnDeleteComment = async (commentId) => {
    try {
      await commentApi.removeComment(commentId, currentUserAcessToken);
      const res = await commentApi.getAllCommentAndReply(tourId);
      setComments(res.data.comments);
      toast.success("Xóa thành công");
    } catch (error) {
      toast.error("Xóa thất bại");
    }
  };
  const handleOnDeleteReplyComment = async (replyId, commentId) => {
    try {
      await commentApi.removeReply(replyId, commentId, currentUserAcessToken);
      const res = await commentApi.getAllCommentAndReply(tourId);
      setComments(res.data.comments);
      toast.success("Xóa thành công");
    } catch (error) {
      toast.error("Xóa thất bại");
    }
  };
  return (
    <Comment.Group size="large">
      <Header as="h2" dividing>
        Comments
      </Header>
      {currentUser ? (
        <Form reply className="" onSubmit={handleSubmit(handleOnAddComment)}>
          <TextField
            fullWidth
            margin="normal"
            label="Bình luận"
            name="newComment"
            size="small"
            error={!!errors["newComment"]}
            helperText={
              errors["newComment"] ? errors["newComment"].message : ""
            }
            {...register("newComment")}
          />
          <Button variant="contained" size="small" type="submit">
            Add new comment
          </Button>
        </Form>
      ) : (
        ""
      )}
      {comments &&
        comments.map((comment, index) => (
          <Comment key={comment.id}>
            <Comment.Avatar
              src={
                comment.User.avatar
                  ? comment.User.avatar
                  : "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
              }
            />
            <Comment.Content>
              <Comment.Author as="a">{comment.User.fullName}</Comment.Author>
              <Comment.Metadata>
                <span>{moment(comment.createdAt).fromNow()}</span>
                {currentUser?.roleId === 2 || currentUser?.roleId === 1 ? (
                  <Comment.Action>
                    <DeleteIcon
                      className="text-danger"
                      onClick={() => handleOnDeleteComment(comment.id)}
                    ></DeleteIcon>
                  </Comment.Action>
                ) : (
                  ""
                )}
              </Comment.Metadata>
              <Comment.Text>{comment.text}</Comment.Text>
              <Comment.Action
                as="a"
                onClick={() => handleOnclickReply(comment.id)}
              >
                Reply
              </Comment.Action>
              {/* Hiển thị các reply comments */}
              {comment.replyComments.length > 0 && (
                <Comment.Group>
                  {comment.replyComments.map((reply) => (
                    <Comment key={reply.id}>
                      <Comment.Avatar
                        src={
                          reply.User.avatar
                            ? reply.User.avatar
                            : "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                        }
                      />
                      <Comment.Content>
                        <Comment.Author as="a">
                          {reply.User.fullName}
                        </Comment.Author>
                        <Comment.Metadata>
                          <span>{moment(comment.createdAt).fromNow()}</span>
                          {currentUser?.roleId === 2 ||
                          currentUser?.roleId === 1 ? (
                            <Comment.Action>
                              <DeleteIcon
                                className="text-danger"
                                onClick={() =>
                                  handleOnDeleteReplyComment(
                                    reply.id,
                                    comment.id
                                  )
                                }
                              ></DeleteIcon>
                            </Comment.Action>
                          ) : (
                            ""
                          )}
                        </Comment.Metadata>
                        <Comment.Text>{reply.text}</Comment.Text>
                      </Comment.Content>
                    </Comment>
                  ))}
                </Comment.Group>
              )}
            </Comment.Content>
          </Comment>
        ))}
      {currentUser ? (
        <Form reply onSubmit={handleOnReplyComment}>
          <Form.Input
            label={`Click vào button reply ở mỗi comment để trả lời cmt số ${replyComment.commentId}`}
            name="replyComment"
          />
          <Button variant="contained" type="submit">
            Reply
          </Button>
        </Form>
      ) : (
        ""
      )}
    </Comment.Group>
  );
};
export default CommentGroup;
