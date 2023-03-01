// import the multer module before configuring it to use the disc storage engine
const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/public/documents/");
  },
  filename: (req, file, cb) => {
    const uniqName = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqName + '.jpg' );
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).fields([
    { name: 'idCardPhoto', maxCount: 1 },
    { name: 'officialPhoto', maxCount: 1 },
    { name: 'bankPhoto', maxCount: 1 }
]);

// create the exported middleware object
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;