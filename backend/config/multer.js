import multer from 'multer'

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./Upload");
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, file.originalname + "-" + Date.now());
    },
  });
  export var upload = multer({ storage: storage });