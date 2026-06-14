const express = require("express");

const router =
  express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require(
  "../controllers/productController"
);

const {
  protect,
  adminOnly,
} = require(
  "../middleware/authMiddleware"
);
// Create Product

router.post(
  "/",
  protect,
  adminOnly,
  createProduct
);


// Get All Products

router.get(
  "/",
  getProducts
);


// Get Product By ID

router.get(
  "/:id",
  getProductById
);


// Update Product

router.put(
  "/:id",
  protect,
  adminOnly,
  updateProduct
);


// Delete Product

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProduct
);

module.exports = router;