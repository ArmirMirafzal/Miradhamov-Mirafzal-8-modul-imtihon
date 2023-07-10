import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface ProductState {
	products: [];
	categories: [];
}

export default class Product extends Component<{},ProductState> {
	componentDidMount(): void {
		const getData = async () => {
			try {
				const res = await axios("https://dummyjson.com/products/1");
				const data = await res.data;
				this.setState({ categories: data });
				console.log("products data => ", data);
			} catch (error) {
				console.log(error);
			}
		};

		getData();
	}

	render() {
		return (
			<>
				<div className="section setion-center page">
					<Link className="btn" to="/">
						back To products
					</Link>
				</div>
			</>
		);
	}
}
