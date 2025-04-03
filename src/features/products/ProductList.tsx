import React from "react";
import { Product } from "../../app/models/product";

interface ProductsListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, onDelete }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 mb-2 flex justify-between items-center"
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <button
              onClick={() => onDelete(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;