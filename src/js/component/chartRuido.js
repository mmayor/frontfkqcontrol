import React from "react";
import { Line } from "react-chartjs-2";
import { Context } from "../store/appContext";

export class ChartRuido extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
			datasets: [
				{
					label: "Test Motor",
					fill: false,
					lineTension: 0.5,
					backgroundColor: "rgba(75,192,192,1)",
					borderColor: "rgba(0,0,0,1)",
					borderWidth: 2,
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
								data={store.chartRuido}
								options={{
									title: {
										display: true,
										text: "Electric Resistance / Time",
										fontSize: 20
									},
									legend: {
										display: true,
										position: "bottom"
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
