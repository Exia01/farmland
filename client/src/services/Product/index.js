import axios from 'axios';

const getAllProducts = async (params) => {
  //   return http.get("/tutorials", { params });
   return await axios.get('/v1/products', { params });
    // productDispatch(updateCollections(res.data));

};

// other CRUD methods

const productService = {
  getAllProducts,
};

export default productService;
