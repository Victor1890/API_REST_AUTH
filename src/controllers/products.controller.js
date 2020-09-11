import Product from "../models/Products";

export const createProducts = async (req, res) => {
  const newProducts = new Product(req.body);

  const productSaved = await newProducts.save();

  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  return res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const productById = await Product.findById(req.params.id);

  if (!productById) {
    return res.status(404).json("The product not found");
  }

  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json("The product is delete");
};
