import React from 'react'
import { images } from '../../assets/heroSection'
import { Link } from 'react-router-dom'
export default function ProductCard() {
	return (
		<div className="row">
			<div className="col">
				<div className="product-card">
					<div className="badge">Hot</div>
					<div className="product-tumb">
						<img src={images.slider4} alt="" />
					</div>
					<div className="product-details">
						<span className="product-catagory">Women,jeens</span>
						<h4><a href="">Women new fashion jeens</a></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
						<div className="product-bottom-details">
							<div className="product-price"><small>$96.00</small>$.99</div>
							<div className="product-links">
								<a href="/productdetail"><i className="fa-solid fa-eye"></i></a>
								<a href=""><i className="fa fa-heart"></i></a>
								<a href=""><i className="fa fa-shopping-cart"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
