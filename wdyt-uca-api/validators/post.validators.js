const {body, param} = require("express-validator"); 
const validators = {}; 

validators.createPostValidator = [
    body("title")
      .notEmpty().withMessage("El título no debe estar vacío"),
    body("description")
      .notEmpty().withMessage("La descripción no debe estar vacía")
      .isLength({max:280}).withMessage("La descripción no debe pasar los 280 caracteres"), 
    body("image")
      .optional()
      .notEmpty()
      .isURL().withMessage("La imagen debe ser una url")
];

validators.findPostByIdValidator = [
    param("identifier")
      .notEmpty().withMessage("El id no debe de ir vacío")
      .isMongoId().withMessage("El id debe de ser de mongo")
]

module.exports = validators; 

