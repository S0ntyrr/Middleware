const sequelize = require('../config/database');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
  const { productId, quantity } = req.body;
  const t = await sequelize.transaction();

  try {
    const product = await Product.findByPk(productId, { transaction: t });

    if (!product) {
      await t.rollback();
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    if (product.stock < quantity) {
      await t.rollback();
      return res.status(400).json({ message: 'Stock insuficiente' });
    }

    product.stock -= quantity;
    await product.save({ transaction: t });

    // Aquí iría la lógica para crear el registro del pedido

    await t.commit();
    res.status(201).json({ message: 'Pedido creado exitosamente' });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ message: 'Error al procesar el pedido', error: error.message });
  }
};