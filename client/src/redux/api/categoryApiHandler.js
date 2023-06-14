import categoryApi from "../../api/categoryApi";
import {
  createFailed,
  createStart,
  createSuccess,
  deleteFailed,
  deleteStart,
  deleteSuccess,
  getAllCategoriesFailed,
  getAllCategoriesStart,
  getAllCategoriesSuccess,
  updateFailed,
  updateStart,
  updateSuccess,
} from "../slice/categorySlice";

export const getAllCategories = async (dispatch) => {
  dispatch(getAllCategoriesStart());
  try {
    const res = await categoryApi.getAllCategories();
    dispatch(getAllCategoriesSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllCategoriesFailed());
  }
};

export const createNewCategory = async (dispatch, toast, data, accessToken) => {
  dispatch(createStart());
  try {
    const res = await categoryApi.createNewCategory(data, accessToken);
    const reGetAllCategories = await categoryApi.getAllCategories();
    dispatch(getAllCategoriesSuccess(reGetAllCategories.data.data));
    toast.success("Tạo thành công");
    dispatch(createSuccess());
  } catch (error) {
    toast.error("Tạo thất bại");
    dispatch(createFailed());
  }
};

export const updateCategory = async (
  dispatch,
  toast,
  data,
  categoryId,
  accessToken
) => {
  dispatch(updateStart());
  try {
    const res = await categoryApi.updateCategory(data, categoryId, accessToken);
    const reGetAllCategories = await categoryApi.getAllCategories();
    dispatch(getAllCategoriesSuccess(reGetAllCategories.data.data));
    toast.success("Cập nhật thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};

export const deleteCategory = async (
  dispatch,
  toast,
  categoryId,
  accessToken
) => {
  dispatch(deleteStart());
  try {
    const res = await categoryApi.deleteCategory(categoryId, accessToken);
    const reGetAllCategories = await categoryApi.getAllCategories();
    dispatch(getAllCategoriesSuccess(reGetAllCategories.data.data));
    toast.success("Xóa thành công");
    dispatch(deleteSuccess());
  } catch (error) {
    console.log(error)
    toast.error("Xóa thất bại");
    dispatch(deleteFailed());
  }
};
