import React from "react";
import { Line } from "react-chartjs-2";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class ChartCurrentHistory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<Line
								data={this.props.datasets}
								options={{
									title: {
										display: true,
										text: "Current",
										fontSize: 20
									},
									legend: {
										display: false,
										position: "top"
									}
								}}
							/>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

ChartCurrentHistory.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string,
	idTemp: PropTypes.number,
	currentData: PropTypes.array,
	voltajeData: PropTypes.string,
	datasets: PropTypes.object
};

ChartCurrentHistory.defaultProps = {
	show: false,
	onClose: null,
	datasets: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
		datasets: {
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
	}
};
