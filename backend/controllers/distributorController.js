const { tb_distributors } = require("../models");

class distributorController {
    static async addDistributor(req, res) {
        try {
            const { nama_distributor, alamat_distributor } = req.body;

            const payload = await tb_distributors.create({
                nama_distributor: nama_distributor,
                alamat_distributor: alamat_distributor,
            });

            res.status(201).json({
                status_code: "Created",
                datas: payload,
                message: "Successfully Add Distributor"
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status_code: "Internal Server Error",
                message: "Failed Add Distributor",
            });
        }
    }

    static async getDistributor(req, res) {
        try {
            const payload = await tb_distributors.findAll();

            if (payload.length > 0) {
                res.status(200).json({
                    status_code: "OK",
                    datas: payload,
                    message: "Get All Distributor Succesfully"
                });
            } else {
                res.status(404).json({
                    status_code: "Not Found",
                    message: "Distributors List is Empty",
                });
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status_code: "Internal Server Error",
                message: "Failed to Get Distributors"
            });
        }
    }

    static async getDistributorById(req, res) {
        try {
            const id = req.params.id;

            const payload = await tb_distributors.findOne({
                where: {
                    id: id,
                },
            });

            if (payload) {
                res.status(200).json({
                    status_code: "OK",
                    datas: payload,
                    message: `Get Distributor by id ${id} Succesfully`,
                });
            } else {
                res.status(404).json({
                    status_code: "Not Found",
                    message: `Distributor with id ${id} not found`,
                });
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status_code: "Internal Server Error",
                message: "Failed to Get Distributor",
            });
        }
    }
    
    static async updateDistributor(req, res) {
        try {
            const { id, nama_distributor, alamat_distributor } = req.body;

            const findDistributor = await tb_distributors.findOne({
                where: {
                    id: id
                },
            });

            if (findDistributor) {
                await tb_distributors.update(
                    {
                        nama_distributor: nama_distributor,
                        alamat_distributor: alamat_distributor,
                    },
                    {
                        where: {
                            id: id
                        },
                    }
                );

                res.status(200).json({
                    status_code: "OK",
                    message: `Update Distributor with id ${id} Successfully`,
                });
            } else {
                res.status(404).json({
                    status_code: "Not Found",
                    message: `Distributor with id ${id} Not Found`,
                });
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status_code: "Internal Sever Error",
                message: "Failed to Update Distributor",
            });
        }
    }

    static async deleteDistributor(req, res) {
        try {
            const id = req.params.id;

            const findDistributor = await tb_distributors.findOne({
                where: {
                    id: id,
                },
            });

            if (findDistributor) {
                await tb_distributors.destroy({
                    where: {
                        id: id,
                    },
                });

                res.status(200).json({
                    status_code: "OK",
                    message: `Delete Distributor by id ${id} Successfully`,
                });
            } else {
                res.status(404).json({
                    status_code: "Not Found",
                    message: `Delete Distributor with id ${id} Not Found`,
                });
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status_code: "Internal Server Error",
                message: "Failed to Delete Distributor"
            });
        }
    }
}

module.exports = distributorController