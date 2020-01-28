import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import LogoBlack from "../../img/LogoBlack.png";
import Quote1 from "../../img/Quote1.png";
import "../../styles/home.scss";
import "../../styles/motorTest.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Modal from "../component/Modal";

export class HistoryMotor extends React.Component {
	constructor(props) {
		super(props);
		// No llames this.setState() aquí!
		this.state = {
			market_name: " ",
			price: 0,
			id_motor: "",
			showModal: false,
			idTest: "",
			serial: "",
			currentData: "",
			voltajeData: "",

			datasetsNewVibracion: {
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
			},

			datasetsNewRuido: {
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
			},

			datasetsNewVoltaje: {
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
			},

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

	handleChange(event) {
		this.setState({
			id_motor: event.target.value
		});
	}

	render() {
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<Navbar />
								<div className="tittle">
									<h2> Search Motor</h2>
								</div>

								<div className="container">
									<div className="row justify-content-md-center">
										<div className="col col-lg-2">
											<div className="motorInput1">
												<input
													type="text"
													className="form-control"
													id="motor"
													value={this.state.id_motor}
													aria-describedby=""
													placeholder="idMotor to Search"
													onChange={event => {
														this.handleChange(event);
													}}
												/>
											</div>
										</div>
										<div className="col col-lg-2">
											<div className="inputNew">
												<input
													className="btn btn-primary"
													type="submit"
													value="Search"
													onClick={() => actions.motorTest(this.state.id_motor)}
												/>
											</div>
										</div>
									</div>
								</div>

								<div />
							</div>
						);
					}}
				</Context.Consumer>

				<Context.Consumer>
					{({ store, actions }) => {
						{
							if (store.motorTest[0].id !== "") {
								return store.motorTest[0].testTemp.map((item, index) => {
									return (
										<div key={index}>
											<div className="table">
												<table className="table table-striped">
													<thead>
														<tr>
															<th scope="col">Id</th>
															<th scope="col">Serial</th>

															<th scope="col">User</th>
															<th scope="col">Date</th>
															<th scope="col">Status</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<Link
																	onClick={e => {
																		this.setState({
																			showModal: true,
																			idTest: item.id,

																			currentData: item.corriente,

																			datasetsNewVibracion: {
																				labels: [
																					"1",
																					"2",
																					"3",
																					"4",
																					"5",
																					"6",
																					"7",
																					"8",
																					"9",
																					"10"
																				],

																				datasets: [
																					{
																						label: "Test Motor",
																						fill: false,
																						lineTension: 0.1,
																						backgroundColor:
																							"rgba(75,192,192,0.4)",
																						borderColor:
																							"rgba(75,192,192,1)",
																						borderCapStyle: "butt",
																						borderDash: [],
																						borderDashOffset: 0.0,
																						borderJoinStyle: "miter",
																						pointBorderColor:
																							"rgba(75,192,192,1)",
																						pointBackgroundColor: "#fff",
																						pointBorderWidth: 1,
																						pointHoverRadius: 5,
																						pointHoverBackgroundColor:
																							"rgba(75,192,192,1)",
																						pointHoverBorderColor:
																							"rgba(220,220,220,1)",
																						pointHoverBorderWidth: 2,
																						pointRadius: 1,
																						pointHitRadius: 10,
																						data: item.vibracion
																							.split(",")
																							.map(Number)
																					}
																				]
																			},

																			datasetsNewRuido: {
																				labels: [
																					"1",
																					"2",
																					"3",
																					"4",
																					"5",
																					"6",
																					"7",
																					"8",
																					"9",
																					"10"
																				],

																				datasets: [
																					{
																						label: "Test Motor",
																						fill: false,
																						lineTension: 0.1,
																						backgroundColor:
																							"rgba(75,192,192,0.4)",
																						borderColor:
																							"rgba(75,192,192,1)",
																						borderCapStyle: "butt",
																						borderDash: [],
																						borderDashOffset: 0.0,
																						borderJoinStyle: "miter",
																						pointBorderColor:
																							"rgba(75,192,192,1)",
																						pointBackgroundColor: "#fff",
																						pointBorderWidth: 1,
																						pointHoverRadius: 5,
																						pointHoverBackgroundColor:
																							"rgba(75,192,192,1)",
																						pointHoverBorderColor:
																							"rgba(220,220,220,1)",
																						pointHoverBorderWidth: 2,
																						pointRadius: 1,
																						pointHitRadius: 10,
																						data: item.ruido
																							.split(",")
																							.map(Number)
																					}
																				]
																			},

																			datasetsNewVoltaje: {
																				labels: [
																					"1",
																					"2",
																					"3",
																					"4",
																					"5",
																					"6",
																					"7",
																					"8",
																					"9",
																					"10"
																				],

																				datasets: [
																					{
																						label: "Test Motor",
																						fill: false,
																						lineTension: 0.1,
																						backgroundColor:
																							"rgba(75,192,192,0.4)",
																						borderColor:
																							"rgba(75,192,192,1)",
																						borderCapStyle: "butt",
																						borderDash: [],
																						borderDashOffset: 0.0,
																						borderJoinStyle: "miter",
																						pointBorderColor:
																							"rgba(75,192,192,1)",
																						pointBackgroundColor: "#fff",
																						pointBorderWidth: 1,
																						pointHoverRadius: 5,
																						pointHoverBackgroundColor:
																							"rgba(75,192,192,1)",
																						pointHoverBorderColor:
																							"rgba(220,220,220,1)",
																						pointHoverBorderWidth: 2,
																						pointRadius: 1,
																						pointHitRadius: 10,
																						data: item.voltaje
																							.split(",")
																							.map(Number)
																					}
																				]
																			},

																			datasetsNew: {
																				labels: [
																					"1",
																					"2",
																					"3",
																					"4",
																					"5",
																					"6",
																					"7",
																					"8",
																					"9",
																					"10"
																				],

																				datasets: [
																					{
																						label: "Test Motor",
																						fill: false,
																						lineTension: 0.1,
																						backgroundColor:
																							"rgba(75,192,192,0.4)",
																						borderColor:
																							"rgba(75,192,192,1)",
																						borderCapStyle: "butt",
																						borderDash: [],
																						borderDashOffset: 0.0,
																						borderJoinStyle: "miter",
																						pointBorderColor:
																							"rgba(75,192,192,1)",
																						pointBackgroundColor: "#fff",
																						pointBorderWidth: 1,
																						pointHoverRadius: 5,
																						pointHoverBackgroundColor:
																							"rgba(75,192,192,1)",
																						pointHoverBorderColor:
																							"rgba(220,220,220,1)",
																						pointHoverBorderWidth: 2,
																						pointRadius: 1,
																						pointHitRadius: 10,
																						data: item.corriente
																							.split(",")
																							.map(Number)
																					}
																				]
																			}
																		});
																	}}>
																	{item.id}
																</Link>
															</td>

															<td>{store.motorTest[0]["serial"]}</td>

															<td>{item.user.username}</td>
															<td>{item.dateNew}</td>
															<td>{item.status}</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									);
								});
							}
						}
					}}
				</Context.Consumer>
				<Modal
					id={this.state.idTest}
					serial={this.state.id_motor}
					show={this.state.showModal}
					currentData={this.state.currentData}
					datasets={this.state.datasetsNew}
					datasetsNewVoltaje={this.state.datasetsNewVoltaje}
					datasetsNewRuido={this.state.datasetsNewRuido}
					datasetsNewVibracion={this.state.datasetsNewVibracion}
					onClose={() => this.setState({ showModal: false })}
				/>
				<Footer />
			</React.Fragment>
		);
	}
}
