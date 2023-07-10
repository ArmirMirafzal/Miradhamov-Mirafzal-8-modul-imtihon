import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomeProducts from "./pages/products/home-products";
import Product from './pages/product/product';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Routes>
						<Route path="/" element={<HomeProducts />} />
						<Route path="/product" element={<Product />} />
					</Routes>
				</div>
			</BrowserRouter>
		);
	}
}

// https://comfy-sloth-e-commerce-store.netlify.app/products
