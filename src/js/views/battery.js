import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import LogoBlack from "../../img/LogoBlack.png";
import Quote1 from "../../img/Quote1.png";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { BatteryNew } from "../component/battery";

export class Battery extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background">
					<div className="text-center mt-5">
						<h2>Batery Status...</h2>

						{/* <a href="#" className="btn btn-success">
					Start
				</a> */}
					</div>

					<BatteryNew />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
