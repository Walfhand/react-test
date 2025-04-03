import React, { useState } from "react";
import { Product } from "../../app/models/product";

interface AddProductFormProps {
  onAdd: (product: Omit<Product, "id">) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;