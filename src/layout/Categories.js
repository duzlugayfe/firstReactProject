import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getCategories()
      .then((result) => setCategories(result.data.data));
  }, []);
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="kategoriler" />
        {categories.map((category) => (
          <Menu.Item key={category.categoryId}>
            <Link to={`/category/${category.categoryId}`}>
              {category.categoryName}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
