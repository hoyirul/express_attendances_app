const Validator = require("fastest-validator");
const { employees } = require("./../models");
const { getPagingData, getPagination } = require('./../middlewares/pagination.middleware');
const v = new Validator();

// GET retrive data
exports.index = async (req, res) => {
  try{
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    employees.findAndCountAll({ limit, offset })
    .then(data => {
      const response = getPagingData(page, limit, data);
      res.status(200).json(response);
    });
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};