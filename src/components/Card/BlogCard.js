import React from 'react'
import {images} from '../../assets/blog'
export default function BlogCard() {


	return (
		<div className="row">
			<div className="col-12 col-lg-6">
				<div className="blog-card">
					<div className="meta">
						<div className="photo" style={{ backgroundImage: `url(${images.blog1})` }}></div>
						<ul className="details">
							<li className="author"><a href="#">John Doe</a></li>
							<li className="date">Aug. 24, 2023</li>
							{/* <li className="tags">
								<ul>
									<li><a href="#">Learn</a></li>
									<li><a href="#">Code</a></li>
									<li><a href="#">HTML</a></li>
									<li><a href="#">CSS</a></li>
								</ul>
							</li> */}
						</ul>
					</div>
					<div className="description">
						<h1>Learn to Fashion</h1>
						<h2>A guide to latest trends</h2>
						<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
						<p className="read-more">
							<a href="#">Read More</a>
						</p>
					</div>
				</div>
			</div>
			<div className="col-12 col-lg-6">

				<div className="blog-card alt">
					<div className="meta">
						<div className="photo" style={{ backgroundImage: `url(${images.blog2})` }}></div>
						<ul className="details">
							<li className="author"><a href="#">Jane Doe</a></li>
							<li className="date">July. 15, 2023</li>
							{/* <li className="tags">
								<ul>
									<li><a href="#">Learn</a></li>
									<li><a href="#">Code</a></li>
									<li><a href="#">JavaScript</a></li>
								</ul>
							</li> */}
						</ul>
					</div>
					<div className="description">
						<h1>happy life</h1>
						<h2>Five ways to lead a happy life</h2>
						<p>Tips on having a happy life consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
						<p className="read-more">
							<a href="#">Read More</a>
						</p>
					</div>

				</div>
			</div>
		</div >
	)
}
