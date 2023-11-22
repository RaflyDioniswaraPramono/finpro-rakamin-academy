const { tb_distributor_reports } = require("../models");

class DistributorReportController {
  static async addDistributorReport(req, res) {
    try {
      const { distributorId, productId, productAmount, date } = req.body;

      const payload = await tb_distributor_reports.create({
        distributor_id: distributorId,
        product_id: productId,
        product_amount: productAmount,
        date: date,
      });

      res.status(201).json({
        status_code: "Created",
        datas: payload,
        message: "Successfully add distributor report"
      })
    } catch (error) {
      console.log(error);
    }
  }

  static async getDistributorReports(req, res) {
    try {
      const payload = tb_distributor_reports.findAll();

      if (payload.length > 0) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          message: "Get all distributor reports successfully!",
        });
      } else {
        res.status(404).json({
          status_code: "Not found",
          message: "Distributor reports is empty!",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async getDistributorReportById(req, res) {
    try {
      const id = req.params.id;

      const payload = await tb_distributor_reports.findOne({
        where: {
          id: id,
        },
      });

      if (payload) {
        res.status(200).json({
          status_code: "OK",
          datas: payload,
          messgae: `Get distributor report by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Distributor report with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async updateDistributorReport(req, res) {
    try {
      const { id, distributorName, distributorAddress, productAmount, date } =
        req.body;

      const findDistributorReport = await tb_distributor_reports.findOne({
        where: {
          id: id,
        },
      });

      if (findDistributorReport) {
        await tb_distributor_reports.update(
          {
            distributor_name: distributorName,
            distributor_address: distributorAddress,
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
          message: `Update distributor report with id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Distributor report with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  static async deleteDistributorReport(req, res) {
    try {
      const id = req.params.id;

      const findDistributorReport = await tb_distributor_reports.findOne({
        where: {
          id: id,
        },
      });

      if (findDistributorReport) {
        await tb_distributor_reports.destroy({
          where: {
            id: id,
          },
        });

        res.status(200).json({
          status_code: "OK",
          message: `Delete distributor report by id ${id} successfully!`,
        });
      } else {
        res.status(404).json({
          status_code: "Not Found",
          message: `Delete distributor report with id ${id} not found!`,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = DistributorReportController;