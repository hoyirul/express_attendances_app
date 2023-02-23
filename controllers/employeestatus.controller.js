const Validator = require("fastest-validator");
const { employeeStatus } = require("./../models");
const v = new Validator();

// GET retrive data
exports.index = async (req, res) => {
  try{
    const response = await employeeStatus.findAll();

    res.status(200).json(response);
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};

// for insert data to Categorys table
exports.store = async (req, res) => {
  try{
    const schema = {
      employeeStatus: "string",
      salary: "number|float",
    };
  
    const validate = v.validate(req.body, schema);
    console.log(validate.length);
    if (validate.length) {
      return res.status(400).json(validate);
    }
  
    const response = await employeeStatus.create(req.body);
  
    res.status(201).json(response);
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};

// for get data by id from Categorys table
exports.show = async (req, res) => {
  try{
    const id = req.params.id;
    const response = await employeeStatus.findByPk(id);

    res.status(200).json(response || {});
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};

// for update data from Categorys table
exports.update = async (req, res) => {
  try{
    const id = req.params.id;
  
    let data = await employeeStatus.findByPk(id);
  
    if (!data) {
      return res.json({ message: "Data not found!" });
    }
  
    const schema = {
      employeeStatus: "string|optional",
      salary: "number|optional",
    };
  
    const validate = v.validate(req.body, schema);
  
    if (validate.length) {
      return res.status(400).json(validate);
    }
  
    const response = await data.update(req.body);
  
    res.status(200).json(response);
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};

// for delete data from Categorys table
exports.destroy = async (req, res) => {
  try{
    const id = req.params.id;
    let data = await employeeStatus.findByPk(id);
  
    if (!data) {
      return res.json({ message: "Data not found!" });
    }
  
    await data.destroy(id);
  
    res.status(200).json({ message: "Data was deleted!" });
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};
