import express from "express";
import formidable from "express-formidable";
import {
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFiltersController,
    productListController,
    productPhotoController,
    relatedProductController,
    searchProductController,
    updateProductController
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()

// routes
router.post('/create-product' , requireSignIn, isAdmin, formidable() , createProductController);


// get products
router.get('/get-product', getProductController);

// getting single product
router.get('/get-product/:slug', getSingleProductController);

// get photo
router.get('/product-photo/:pid', productPhotoController);

// delete product
router.delete('/delete-product/:pid', deleteProductController);

// update product
router.put('/update-product/:pid' , requireSignIn, isAdmin, formidable() , updateProductController);

// filter product
router.post('/product-filters', productFiltersController);

// product count
router.get('/product-count', productCountController);

// product per page
router.get('/product-list/:page', productListController);

// search product
router.get('/search/:keyword', searchProductController);

// similar product
router.get('/related-product/:pid/:cid', relatedProductController)

// category wise product
router.get('/product-category/:slug', productCategoryController);

export default router;