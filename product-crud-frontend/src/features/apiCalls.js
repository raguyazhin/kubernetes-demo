import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_BACKEND_API_URL;

console.log(`${BASE_API_URL}/ragu/`);

export const getProducts = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}/products/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addProduct = async (product) => {
  try {
    const res = await axios.post(`${BASE_API_URL}/products/`, product);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const updateProduct = async (product, productId) => {
  try {
    const res = await axios.put(
      `${BASE_API_URL}/products/` + productId,
      product
    );
    return res.data;
  } catch (err) {
    return {
      error: err,
    };
  }
};
export const deleteProduct = async (productId, productThumbnail) => {
  try {
    const res = await axios.delete(
      `${BASE_API_URL}/products/` + productId
    );
    return res.data;
  } catch (err) {
    return { error: err };
  }
};
export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/products/` + id);
    return res.data
  } catch (err) {
    return {error: err.message}
  }
};


export const uploadProductThumbnail = async (formData) => {
  try {
    const res = await axios.post(
      `${BASE_API_URL}/thumbnailUpload/`,
      formData
    );
    return res.data
      
  } catch (err) {
    console.log(err);
    return {error: err.message};
  }
};