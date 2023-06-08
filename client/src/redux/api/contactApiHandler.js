import contactApi from "../../api/contactApi";
import {
  createFailed,
  createStart,
  createSuccess,
  deleteFailed,
  deleteStart,
  deleteSuccess,
  getContactTypeFailed,
  getContactTypeStart,
  getContactTypeSuccess,
  getContactsFailed,
  getContactsStart,
  getContactsSuccess,
  updateFailed,
  updateStart,
  updateSuccess,
} from "../slice/contactSlice";

export const createContact = async (dispatch, toast, data) => {
  dispatch(createStart());
  try {
    const res = await contactApi.createContact(data);
    toast.success(
      "Tạo phiếu liên hệ thành công. Xin vui lòng check email để xác nhận thông tin."
    );
    dispatch(createSuccess());
  } catch (error) {
    console.log(error);
    toast.error("Tạo phiếu liên hệ thất bại!");
    dispatch(createFailed());
  }
};
export const getAllContacts = async (dispatch, accessToken) => {
  dispatch(getContactsStart());
  try {
    const res = await contactApi.getAllContact(accessToken);
    dispatch(getContactsSuccess(res.data.data));
  } catch (error) {
    dispatch(getContactsFailed());
  }
};
export const getAllContactType = async (dispatch) => {
  dispatch(getContactTypeStart());
  try {
    const res = await contactApi.getAllContactType();
    dispatch(getContactTypeSuccess(res.data.data));
  } catch (error) {
    dispatch(getContactTypeFailed());
  }
};
export const updateContact = async (
  dispatch,
  toast,
  accessToken,
  data,
  contactId
) => {
  dispatch(updateStart());
  try {
    const res = await contactApi.updateContact(contactId, data, accessToken);
    toast.success("Cập nhật thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};
export const deleteContact = async (
  dispatch,
  toast,
  accessToken,
  contactId
) => {
  dispatch(deleteStart());
  try {
    const res = await contactApi.deleteConact(contactId, accessToken);
    toast.success("Xóa thành công");
    dispatch(deleteSuccess());
  } catch (error) {
    toast.error("Xóa thất bại");
    dispatch(deleteFailed());
  }
};
