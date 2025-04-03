import React from "react";
import { Product } from "../../app/models/product";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductsListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, onDelete }) => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Product List</h2>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                  No products found
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <button
                      onClick={() => onDelete(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductsList;