import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { ChartCurrent } from "../component/chartCurrent";
import { ChartRuido } from "../component/chartRuido";
import { ChartVibration } from "../component/chartVibration";
import { ChartVoltaje } from "../component/chartVoltaje";
import { ChartCurrentHistory } from "../component/chartCurrentHistory";
import { ChartVoltajeHistory } from "../component/chartVoltajeHistory";
import { ChartRuidoHistory } from "../component/chartRuidoHistory";
import { ChartVibracionHistory } from "../component/chartVibracionHistory";

class Modal extends React.Component {
	constructor() {
		super();
		this.state = {
			//	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
			/* 	datasetsVoltaje: [
				{
					label: "Test Motor",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "rgba(75,192,192,1)",
					borderCapStyle: "butt",
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: "miter",
					pointBorderColor: "rgba(75,192,192,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(75,192,192,1)",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
				}
			]*/
			datasetsNew: {
				labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
				datasets: [
					{
						label: "Recovery Motor",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(75,192,192,0.4)",
						borderColor: "rgba(75,192,192,1)",
						borderCapStyle: "butt",
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: "miter",
						pointBorderColor: "rgba(75,192,192,1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(75,192,192,1)",
						pointHoverBorderColor: "rgba(220,220,220,1)",
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					}
				]
			}
		};
	}

	onChangeData() {
		if (this.props.currentData != undefined) {
			let storeTemp = this.state.datasets;
			storeTemp.data = this.props.currentData.split(",").map(Number);
			this.setState({ datasets: storeTemp });
		}
		return this.state;
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div
							className="modal"
							tabIndex="-1"
							role="dialog"
							style={{ display: this.props.show ? "inline-block" : "none" }}>
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Testing</h5>
										{this.props.onClose ? (
											<button
												onClick={() => this.props.onClose()}
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										) : (
											""
										)}
									</div>
									<div className="modal-body">
										<p>Serial Motor: {this.props.serial}</p>

										<ChartCurrentHistory datasets={this.props.datasets} />
										<ChartVoltajeHistory datasetsVoltajeNew={this.props.datasetsNewVoltaje} />
										<ChartRuidoHistory datasetsRuidoNew={this.props.datasetsNewRuido} />
										<ChartVibracionHistory datasetsVibracionNew={this.props.datasetsNewVibracion} />
									</div>
									<div className="modal-footer">
										<p>Testing</p>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string,
	serial: PropTypes.string,
	idTemp: PropTypes.number,
	currentData: PropTypes.string,
	voltajeData: PropTypes.string,
	datasets: PropTypes.object,
	datasetsNewVoltaje: PropTypes.object,
	datasetsNewRuido: PropTypes.object,
	datasetsNewVibracion: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null,

	datasetsNewVibracion: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
		datasets: [
			{
				label: "Test Motor",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}
		]
	},

	datasetsNewRuido: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
		datasets: [
			{
				label: "Test Motor",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}
		]
	},
	datasetsNewVoltaje: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
		datasets: [
			{
				label: "Test Motor",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}
		]
	},
	datasets: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
		datasets: [
			{
				label: "Test Motor",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}
		]
	}
};
export default withRouter(Modal);
