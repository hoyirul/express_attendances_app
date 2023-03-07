const Validator = require("fastest-validator");
const { documents } = require("./../models");
const { getPagingData, getPagination } = require('./../middlewares/pagination.middleware');
const v = new Validator();
const documentMiddleware = require("../middlewares/document.middleware");
const fs = require("fs");

exports.upload = async (req, res) => {
  try {
    await documentMiddleware(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Upload a file please!" });
    }
    res.status(200).send({
      message: "The following file was uploaded successfully: " + req.file.originalname,
    });
  } catch (err) { // error handling
    res.status(500).send({
      message: `Unable to upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

// GET retrive data
exports.index = async (req, res) => {
  try{
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    documents.findAndCountAll({ limit, offset,
      attributes: [
        'id', 'nik', 'idCardPhoto', 'officialPhoto', 'bankPhoto', 'createdAt', 'updatedAt'
      ]
    })
    .then(data => {
      const response = getPagingData(page, limit, data);
      res.status(200).json(response);
    });
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};

// for insert data to Categorys table
exports.store = async (req, res) => {
  try{
    // const schema = {
    //   bankCode: "string",
    //   bankName: "string",
    // };
  
    // const validate = v.validate(req.body, schema);
  
    // if (validate.length) {
    //   return res.status(400).json(validate);
    // }
    await documentMiddleware(req, res);
    var path = "/public/documents/";
    const response = await documents.create({
      nik: req.body.nik,
      idCardPhoto: path + req.files.idCardPhoto[0].filename,
      officialPhoto: path + req.files.officialPhoto[0].filename,
      bankPhoto: path + req.files.bankPhoto[0].filename,
    });
  
    res.status(201).json(response);
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};

// for get data by id from Categorys table
exports.show = async (req, res) => {
  try{
    const id = req.params.id;
    const response = await documents.findByPk(id);

    res.status(200).json(response || {});
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};

// for update data from Categorys table
exports.update = async (req, res) => {
  try{
    const id = req.params.id;
  
    let data = await documents.findByPk(id);
    var path = "/public/documents/";
  
    if (!data) {
      return res.json({ message: "Data not found!" });
    }
  
    const schema = {
      bankCode: "string|optional",
      bankName: "string|optional",
    };
  
    const validate = v.validate(req.body, schema);
  
    if (validate.length) {
      return res.status(400).json(validate);
    }

    await documentMiddleware(req, res);
    console.log(req.files);

    if(req.files){
      const idCardPhotoPath = data.idCardPhoto;
      const officialPhotoPath = data.officialPhoto;
      const bankPhotoPath = data.bankPhoto;
      fs.unlinkSync(__dirname + "/.." + idCardPhotoPath);
      fs.unlinkSync(__dirname + "/.." + officialPhotoPath);
      fs.unlinkSync(__dirname + "/.." + bankPhotoPath);

    } else {
      return res.status(400).json({ message: "Upload a file please!" });
    }
    const response = await documents.update({
      nik: req.body.nik,
      idCardPhoto: path + req.files.idCardPhoto[0].filename,
      officialPhoto: path + req.files.officialPhoto[0].filename,
      bankPhoto: path + req.files.bankPhoto[0].filename,
      }, 
      { where: { id: id } }
      );

    res.status(200).json(response);
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};

// for delete data from Categorys table
exports.destroy = async (req, res) => {
  try{
    const id = req.params.id;
    let data = await documents.findByPk(id);
  
    if (!data) {
      return res.json({ message: "Data not found!" });
    }

    const idCardPhotoPath = data.idCardPhoto;
    const officialPhotoPath = data.officialPhoto;
    const bankPhotoPath = data.bankPhoto;
    fs.unlinkSync(__dirname + "/.." + idCardPhotoPath);
    fs.unlinkSync(__dirname + "/.." + officialPhotoPath);
    fs.unlinkSync(__dirname + "/.." + bankPhotoPath);
  
    await data.destroy(id);
  
    res.status(200).json({ message: "Data was deleted!" });
  }catch(e){
    return res.status(500).json({ error: e.message });
  }
};

