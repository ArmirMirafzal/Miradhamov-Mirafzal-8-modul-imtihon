import React, { Component } from "react";
import Content from "./components/content";
import Products from "./components/products";
import axios from "axios";

const CATEGORY_API = "https://dummyjson.com/products/categories";
const PRODUCTS_API = "https://dummyjson.com/products";


interface HomeProductsState {
	products: [];
	categories: [];
}

export default class HomeProducts extends Component {
state: HomeProductsState = {
	products: [],
	categories: [],
}

	componentDidMount(): void {
		const getGategories = async () => {
			try {
				const res = await axios(PRODUCTS_API);
				const data = await res.data.products;
				this.setState({ products: data });
				console.log("products data => ", data);
			} catch (error) {
				console.log(error);
			}
			try {
				const res = await axios(CATEGORY_API);
				const data = await res.data;
				this.setState({ categories: data });
				console.log("products data => ", data);
			} catch (error) {
				console.log(error);
			}
		};

		getGategories();
	}

	render() {
		return (
			<div className="row home-products-container">
				<div className="col-3">
					<Content categories={this.state.categories}/>
				</div>
				<div className="col">
					<Products products={this.state.products}/>
				</div>
			</div>
		);
	}
}
