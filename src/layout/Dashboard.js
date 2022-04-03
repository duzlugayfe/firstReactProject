import React from "react";
import { Container } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
export default function Anasayfa() {
  return (
    <div>
      <Navi />
      <Container className="main">
        <ToastContainer position="bottom-right" />
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Categories />
            </Grid.Column>
            <Grid.Column width={12}>
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/home" element={<ProductList />} />
                <Route path="/home" element={<ProductList />} />
                <Route path="/product/add" element={<ProductAdd />} />
                <Route path="/products/:name" element={<ProductDetail />} />
                <Route path="/cart" element={<CartDetail />} />
              </Routes>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
