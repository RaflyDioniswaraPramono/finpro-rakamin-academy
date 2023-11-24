const { tb_categories } = require("../models");

class CategoryController {
  static async addCategory(req, res) {
    try {
      const { categoryName } = req.body;

      const payload = await tb_categories.create({
        category_name: categoryName,
      });

      res.status(201).json({
        status_code: "Created",
        datas: payload,
        message: "Successfully add category!",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getCategories(req, res) {
    try {
      const payload = await tb_categories.findAll();

      if (payload.length > 0) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          message: "Get all category successfully!",
        });
      } else {
        res.status(404).json({
          status_code: "Not found",
          message: "Category is empty!",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async getCategoryById(req, res) {
    try {
      const id = req.params.id;

      const payload = await tb_categories.findOne({
        where: {
          id: id,
        },
      });

      if (payload) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          messgae: `Get category by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Category with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async updateCategory(req, res) {
    try {
      const { id, categoryName } = req.body;

      const findCategory = await tb_categories.findOne({
        where: {
          id: id,
        },
      });

      if (findCategory) {
        await tb_categories.update(
          {
            category_name: categoryName,
          },
          {
            where: {
              id: id,
            },
          }
        );

        res.status(200).json({
          status_code: "OK",
          message: `Update category with id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Category with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async deleteCategory(req, res) {
    try {
      const id = req.params.id;

      const findCategory = await tb_categories.findOne({
        where: {
          id: id,
        },
      });

      if (findCategory) {
        await tb_categories.destroy({
          where: {
            id: id,
          },
        });

        res.status(200).json({
          status_code: "OK",
          message: `Delete category by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Delete category with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CategoryController;
