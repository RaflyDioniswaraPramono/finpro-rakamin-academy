const { tb_supplier_reports } = require("../models");

class SupplierReportController {
  static async addSupplierReport(req, res) {
    try {
      const { supplierId, productId, productAmount, date } = req.body;

      const payload = await tb_supplier_reports.create({
        supplier_id: supplierId,
        product_id: productId,
        product_amount: productAmount,
        date: date,
      });

      res.status(201).json({
        status_code: "Created",
        datas: payload,
        message: "Successfully add supplier report"
      })
    } catch (error) {
      console.log(error);
    }
  }

  static async getSupplierReports(req, res) {
    try {
      const payload = tb_supplier_reports.findAll();

      if (payload.length > 0) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          message: "Get all supplier reports successfully!",
        });
      } else {
        res.status(404).json({
          status_code: "Not found",
          message: "Supplier reports is empty!",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async getSupplierReportById(req, res) {
    try {
      const id = req.params.id;

      const payload = await tb_supplier_reports.findOne({
        where: {
          id: id,
        },
      });

      if (payload) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          messgae: `Get supplier report by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Supplier report with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async updateSupplierReport(req, res) {
    try {
      const { id, supplierName, supplierAddress, productAmount, date } =
        req.body;

      const findSupplierReport = await tb_supplier_reports.findOne({
        where: {
          id: id,
        },
      });

      if (findSupplierReport) {
        await tb_supplier_reports.update(
          {
            supplier_name: supplierName,
            supplier_address: supplierAddress,
            product_amount: productAmount,
            date: date,
          },
          {
            where: {
              id: id,
            },
          }
        );

        res.status(200).json({
          status_code: "OK",
          message: `Update supplier report with id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Supplier report with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async deleteSupplierReport(req, res) {
    try {
      const id = req.params.id;

      const findSupplierReport = await tb_supplier_reports.findOne({
        where: {
          id: id,
        },
      });

      if (findSupplierReport) {
        await tb_supplier_reports.destroy({
          where: {
            id: id,
          },
        });

        res.status(200).json({
          status_code: "OK",
          message: `Delete supplier report by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Delete supplier report with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = SupplierReportController;
