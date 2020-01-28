import React, { Component } from "react";
import footer from "../../styles/footer.scss";

export const Footer = () => (
	<div className="jumbotron jumbotron-fluid mb-0">
		<div className="container">
			<div className="row">
				<div className="col col-footer">
					<h1 className="display-4" />
				</div>
				<div className="col social">
					<i className="fab fa-facebook fa-1x" />
					<i className="fab fa-instagram fa-1x" />
					<i className="fab fa-twitter fa-1x" />
					<i className="fab fa-youtube fa-1x" />
					<i className="fab fa-linkedin-in fa-1x" />
					<i className="fab fa-github fa-1x" />
				</div>
			</div>
			<hr className="my-4" />
			<p className="lead">© 2020 FK Irons, Inc - All Rights Reserved.</p>
			<p className="lead">
				<div>
					<h6>
						{" "}
						Comments or questions: service@fkirons.com Info on becoming an FK Irons distributor:
						inquiry@fkirons.com Marketing PR opportunities: service@fkirons.com Careers: jobs@fkirons.com FK
						Irons Headquarters 1771 NW 79th Ave. Doral, Florida 33126 Hours of Operation: Mon – Fri 9am –
						6pm EST CHAT: We are online during hours of operation. Call: 1-855-FKIRONS
					</h6>
				</div>
			</p>
		</div>
	</div>
);
