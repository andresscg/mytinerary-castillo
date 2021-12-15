const joi = require ('joi');

const validator = (req, res, next) => {
  const schema = joi.object({
    firstName: joi.string().trim().min(2).pattern(new RegExp('[a-zA-Z]')).required().messages({
      'string.empty': 'This field is required',
      'string.min': 'Invalid name, must be at least 2 characters',
      'string.pattern.base': 'Name must only have letters'
    }),
    lastName: joi.string().trim().min(2).pattern(new RegExp('[a-zA-Z]')).required().messages({
      'string.empty': 'This field is required',
      'string.min': 'Invalid last name, must be at least 2 characters',
      'string.pattern.base': 'Name must only have letters'
    }),
    email: joi.string().trim().email().required().messages({
      'string.empty': 'This field is required',
      'string.email': 'Invalid email, must be a valid account'
    }),
    password: joi.string().trim().min(8).pattern(new RegExp('^[a-zA-Z0-9]')).required().messages({
      'string.empty': 'This field is required',
      'strin.min': 'Invalid password, must be at least 8 characters',
      'string.max': 'Invalid password, must have less than 16 characters',
      'string.pattern.base': 'Password must have only letters and numbers'
    }),
    photoUrl: joi.string().required().messages({
      'string.empty': 'This field is required'
    }),
    country: joi.string().required().messages({
      'string.empty': 'This field is required'
    }),
    google: joi.boolean()
  })
  
  const validation = schema.validate(req.body, {abortEarly: false})

  if(!validation.error) {
    next()
  }else{
    res.json({success: false, errors: validation.error.details})
  }  
}

module.exports = validator