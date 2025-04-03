import React, { useState, useEffect } from "react";
import { Product } from "../../models/product";
import AddProductForm from "../../../features/products/AddProductForm";
import ProductsList from "../../../features/products/ProductList";
import httpClient from "../../api/httpClient";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    setLoading(true);
    httpClient.Products.list()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.error("Error loading products:", error))
      .finally(() => setLoading(false));
  };

  const handleAddProduct = (product: Omit<Product, "id">) => {
    setLoading(true);
    httpClient.Products.create(product)
      .then((newProduct) => {
        setProducts([...products, newProduct]);
      })
      .catch((error) => console.error("Error adding product:", error))
      .finally(() => setLoading(false));
  };

  const handleDeleteProduct = (id: number) => {
    setLoading(true);
    httpClient.Products.delete(id)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => console.error("Error deleting product:", error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-500">
        Product Management
      </h1>
      <AddProductForm onAdd={handleAddProduct} />
      {loading ? (
        <div className="flex justify-center items-center my-8">
          <p className="text-gray-500">Loading products...</p>
        </div>
      ) : (
        <ProductsList products={products} onDelete={handleDeleteProduct} />
      )}
    </div>
  );
};

export default App;
