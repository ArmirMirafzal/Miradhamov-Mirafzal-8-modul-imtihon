import React, { Component } from "react";
import axios from "axios";

const CATEGORY_API = "https://dummyjson.com/products/categories";

interface ContentProps {
	categories: [];
}

export default class Content extends Component<ContentProps> {

	render() {
		return (
			<>
				<section>
					<div className="form-item">
						<input type="text" name="text" placeholder="search" className="search-input" />
					</div>
					<div className="form-item">
						<h5>Category</h5>
						<div>
							<button type="button" name="category" className="category-btn">
								all
							</button>
							{this.props.categories.map((category) => {
								return (
									<button key={category} type="button" name="category" className="category-btn">
										{category}
									</button>
								);
							})}
						</div>
						<div className="form-item">
							<h5>Price</h5>
							<p className="price">$3,099.99</p>
							<input type="range" name="price" id="price" min="0" max="309999" />
						</div>
					</div>
				</section>
			</>
		);
	}
}
