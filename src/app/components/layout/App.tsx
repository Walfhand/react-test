import React, { useState, useEffect } from "react";
import { Product } from "../../models/product";
import AddProductForm from "../../../features/products/AddProductForm";
import ProductsList from "../../../features/products/ProductList";
import httpClient from "../../api/httpClient";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Load products from API
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
        toast.success(`Product "${newProduct.name}" has been added successfully!`);
      })
      .catch((error) => console.error("Error adding product:", error))
      .finally(() => setLoading(false));
  };

  const handleDeleteProduct = (id: number) => {
    // Find the product before deleting it to reference its name in the success message
    const productToDelete = products.find(p => p.id === id);
    
    setLoading(true);
    httpClient.Products.delete(id)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
        
        if (productToDelete) {
          toast.success(`Product "${productToDelete.name}" has been deleted successfully!`);
        } else {
          toast.success("Product has been deleted successfully!");
        }
      })
      .catch((error) => console.error("Error deleting product:", error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container mx-auto p-4">
      <Toaster position="top-right" />
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
