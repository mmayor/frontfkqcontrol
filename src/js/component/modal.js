import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import LogoBlack from "../../img/LogoBlack.png";
import Quote1 from "../../img/Quote1.png";
import "../../styles/home.scss";
import "../../styles/motorTest.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { ChartCurrent } from "../component/chartCurrent";
import { ChartVoltaje } from "../component/chartVoltaje";
import { ChartRuido } from "../component/chartRuido";
import { ChartVibration } from "../component/chartVibration";
import { Context } from "../store/appContext";

export class ModalMotor extends React.Component {
	constructor(props) {
		super(props);
		// No llames this.setState() aquí!
		// this.state = { market_name: " ", price: 0, id_motor: "" };
	}

	render() {
		return (
			<div className="modal" tabIndex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>Modal body text goes here.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
