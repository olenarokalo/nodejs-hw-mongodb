import Joi from 'joi';
import { generList } from '../constans/contacts.js';

export const createStudentSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.pattern.base': 'Phone number must be in format +380XXXXXXXXX',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().min(3).max(20).required().messages({
    'string.email': 'Email must be a valid email',
    'any.required': 'Email is required',
  }),
  isFavourite: Joi.boolean().required().messages({
    'boolean.base': 'Favourite must be a boolean',
    'any.required': 'Favourite is required',
  }),
  contactType: Joi.string()
    .valid(...generList)
    .min(3)
    .max(20)
    .required()
    .messages({
      'any.only': 'Contact type must be either personal or home',
      'any.required': 'Contact type is required',
    }),
});

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a valid string',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number should be a valid string',
  }),
  email: Joi.string().email().min(3).max(20).messages({
    'string.base': 'Email should be a valid string',
    'string.email': 'Email must be a valid email address',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean value',
  }),
  contactType: Joi.string()
    .valid(...generList)
    .min(3)
    .max(20)
    .messages({
      'string.base': 'Contact type should be a valid string',
      'any.only': 'Contact type must be one of the following values: {#valids}',
    }),
});
