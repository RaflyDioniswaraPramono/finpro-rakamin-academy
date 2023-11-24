const { tb_products } = require("../models");

class ProductsController {
  static async addProduct(req, res) {
    try {
      const { productName, productPrice } = req.body;

      const payload = await tb_products.create({
        product_name: productName,
        product_price: productPrice,
      });

      res.status(201).json({
        status_code: "Created",
        datas: payload,
        message: "Successfully add product!",
      });
    } catch (error) {
      console.log(error.mesasge);
    }
  }

  static async getProducts(req, res) {
    try {
      const payload = tb_products.findAll();

      if (payload.length > 0) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          message: "Get all product successfully!",
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: "Products is empty!",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async getProductById(req, res) {
    try {
      const id = req.params.id;

      const payload = await tb_products.findOne({
        where: {
          id: id,
        },
      });

      if (payload) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          messgae: `Get product by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Product with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async updateProduct(req, res) {
    try {
      const { id, productName, productPrice } = req.body;

      const findProduct = await tb_products.findOne({
        where: {
          id: id,
        },
      });

      if (findProduct) {
        await tb_products.update(
          {
            product_name: productName,
            product_price: productPrice
          },
          {
            where: {
              id: id,
            },
          }
        );

        res.status(200).json({
          status_code: "OK",
          message: `Update product with id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Product with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const id = req.params.id;

      const findProduct = await tb_products.findOne({
        where: {
          id: id,
        },
      });

      if (findProduct) {
        await tb_products.destroy({
          where: {
            id: id,
          },
        });

        res.status(200).json({
          status_code: "OK",
          message: `Delete product by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Delete product with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = ProductsController;
