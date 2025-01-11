import * as yup from 'yup';

export const productValidationSchema = yup.object({
  product_title: yup.string()
    .required('Product title is required')
    .min(3, 'Product title must be at least 3 characters'),
  
  product_description: yup.string()
    .required('Product description is required')
    .min(10, 'Product description must be at least 10 characters'),
  
  price: yup.number()
    .required('Price is required')
    .positive('Price must be a positive number')
    .min(0.01, 'Price must be at least 0.01'),
  
  old_price: yup.number()
    .nullable()
    .positive('Old price must be a positive number')
    .min(0.01, 'Old price must be at least 0.01'),

  product_collection: yup.string()
    .required('Product collection is required')
    .min(3, 'Collection name must be at least 3 characters'),

  inventory_stocks: yup.number()
    .required('Inventory stocks is required')
    .positive('Inventory stocks must be a positive number')
    .integer('Inventory stocks must be an integer')
    .min(1, 'Inventory stocks must be at least 1'),
});
