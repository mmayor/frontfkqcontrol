import React from "react";
import { Line } from "react-chartjs-2";
import { Context } from "../store/appContext";

export class ChartCurrent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
					data: [4, 10, 20, 30, 40, 10, 25, 36]
				}
			]
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<Line
								data={store.chartCurrent}
								options={{
									title: {
										display: true,
										text: "C / t",
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
