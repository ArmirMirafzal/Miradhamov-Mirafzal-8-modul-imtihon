import React, { Component } from "react";
import { Link } from "react-router-dom";

interface ProductsProps {
	products: [];
}

export default class Products extends Component<ProductsProps> {
	render() {
		return (
			<>
				<section className="products-navbar">
					<div className="btn-container">
						<button type="button" className="active">
							<svg
								stroke="currentColor"
								fill="currentColor"
								viewBox="0 0 16 16"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z"></path>
							</svg>
						</button>
						<button type="button" className="flex-btn">
							<svg
								stroke="currentColor"
								fill="currentColor"
								viewBox="0 0 16 16"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"></path>
							</svg>
						</button>
					</div>
					<p>22 products found</p>
					<hr className="line" />
					<form>
						<label className="sort-text">Sort By</label>
						<select name="sort" id="sort" className="sort-input">
							<option value="price-lowest">Price (Lowest)</option>
							<option value="price-highest">Price (Highest)</option>
							<option value="name-a">Name (a-z)</option>
							<option value="name-z">Name (z-a)</option>
						</select>
					</form>
				</section>

				<section>
					<div className="products-container">
						{this.props.products.map((product, idx) => {
							return (
								<article key={idx} className="sc-bdfBwQ cIKpxU">
									<div className="img-container">
										<Link to="/product">
											<img src={product["images"][0]} alt="modern poster" />
										</Link>
									</div>
									<footer>
										<h5>{product["title"]}</h5>
										<p>${product["price"]}</p>
									</footer>
								</article>
							);
						})}
					</div>
				</section>
			</>
		);
	}
}
