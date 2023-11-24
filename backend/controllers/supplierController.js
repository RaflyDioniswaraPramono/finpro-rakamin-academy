// controllers/SupplierController.js
const { tb_suppliers } = require("../models");

class SupplierController {
  static async addSupplier(req, res) {
    try {
      const { supplierName, supplierAddress } = req.body;

      const payload = await tb_suppliers.create({
        nama_suplier: supplierName,
        alamat_suplier: supplierAddress,
      });

      res.status(201).json({
        status_code: "Created",
        datas: payload,
        message: "Successfully add supplier",
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status_code: "Internal Server Error",
        message: "Failed to add supplier",
      });
    }
  }

  static async getSuppliers(req, res) {
    try {
      const payload = await tb_suppliers.findAll();

      if (payload.length > 0) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          message: "Get all suppliers successfully!",
        });
      } else {
        res.status(404).json({
          status_code: "Not found",
          message: "Suppliers list is empty!",
        });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status_code: "Internal Server Error",
        message: "Failed to get suppliers",
      });
    }
  }

  static async getSupplierById(req, res) {
    try {
      const id = req.params.id;

      const payload = await tb_suppliers.findOne({
        where: {
          id: id,
        },
      });

      if (payload) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          message: `Get supplier by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Supplier with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status_code: "Internal Server Error",
        message: "Failed to get supplier",
      });
    }
  }

  static async updateSupplier(req, res) {
    try {
      const { id, supplierName, supplierAddress } = req.body;

      const findSupplier = await tb_suppliers.findOne({
        where: {
          id: id,
        },
      });

      if (findSupplier) {
        await tb_suppliers.update(
          {
            nama_suplier: supplierName,
            alamat_suplier: supplierAddress,
          },
          {
            where: {
              id: id,
            },
          }
        );

        res.status(200).json({
          status_code: "OK",
          message: `Update supplier with id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Supplier with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status_code: "Internal Server Error",
        message: "Failed to update supplier",
      });
    }
  }

  static async deleteSupplier(req, res) {
    try {
      const id = req.params.id;

      const findSupplier = await tb_suppliers.findOne({
        where: {
          id: id,
        },
      });

      if (findSupplier) {
        await tb_suppliers.destroy({
          where: {
            id: id,
          },
        });

        res.status(200).json({
          status_code: "OK",
          message: `Delete supplier by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Delete supplier with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status_code: "Internal Server Error",
        message: "Failed to delete supplier",
      });
    }
  }
}

module.exports = SupplierController;
