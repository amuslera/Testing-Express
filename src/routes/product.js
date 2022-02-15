const express = require("express");
const path = require("path");
const router = express.Router();
const productController = require("../controllers/productController");

//detalle de producto
router.get("/", productController.list);
//definiendo la ruta generica de productos, mostrando  el ID pasado
router.get("/:id", productController.comments);
//mostrando comentarios del producto y destalle si aplica.
router.get("/:id/comentarios/:idComentario?",productController.commentsDetails );

module.exports = router;