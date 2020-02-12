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

					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					backgroundColor: "rgba(255, 99, 132,.5)",
					borderColor: "rgba(255, 99, 132,1)",
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
										text: "Electric Current / Time",
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
