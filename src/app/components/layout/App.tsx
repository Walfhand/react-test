import React, { useState, useEffect } from "react";
import { Product } from "../../models/product";
import AddProductForm from "../../../features/products/AddProductForm";
import ProductsList from "../../../features/products/ProductList";


const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Simuler un chargement initial de produits
  useEffect(() => {
    const mockProducts: Product[] = [
      { id: 1, name: "Product 1", price: 10.0 },
      { id: 2, name: "Product 2", price: 20.0 },
    ];
    setProducts(mockProducts);
  }, []);

  const handleAddProduct = (product: Omit<Product, "id">) => {
    const newProduct = { ...product, id: products.length + 1 };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-500">Product Management</h1>
      <AddProductForm onAdd={handleAddProduct} />
      <ProductsList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default App;