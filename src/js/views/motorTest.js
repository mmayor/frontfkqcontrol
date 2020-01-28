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

export class MotorTest extends React.Component {
	constructor(props) {
		super(props);
		// No llames this.setState() aquí!
		this.state = {
			voltaje: 0,
			corriente: 0,
			ruido: 0,
			vibracion: 0,
			motor_id: 1,
			status: "GOOD",
			statusCorriente: "GOOD",
			statusStyleCorriente: "",
			statusVoltaje: "GOOD",
			statusStyleVoltaje: "",
			statusRuido: "GOOD",
			statusStyleRuido: "",
			statusVibration: "GOOD",
			statusStyleVibration: "",
			user_id: localStorage.getItem("myValueInLocalStorage")
		};
	}

	onChangeVoltaje(e) {
		let larTemp = e.target.value.length;
		if (e.target.value[larTemp - 1] != ",") {
			let flagVoltaje = "GOOD";
			let array = e.target.value.split(",").map(Number);
			this.setState({ voltaje: e.target.value });

			for (let i = 0; i < array.length; i++) {
				if (array[i] < 5 || array[i] > 15) {
					flagVoltaje = "BAD";
				}

				if (
					flagVoltaje == "BAD" ||
					this.state.statusCorriente === "BAD" ||
					this.state.statusRuido === "BAD" ||
					this.state.statusVibracion === "BAD"
				) {
					this.setState({ status: "BAD" });
				} else {
					this.setState({ status: "GOOD" });
				}
			}

			this.setState({ statusVoltaje: flagVoltaje });
			this.setState({ statusStyleVoltaje: flagVoltaje });
		}
	}

	onChangeRuido(e) {
		let larTemp = e.target.value.length;
		if (e.target.value[larTemp - 1] != ",") {
			let flagRuido = "GOOD";
			let array = e.target.value.split(",").map(Number);
			this.setState({ ruido: e.target.value });

			for (let i = 0; i < array.length; i++) {
				if (array[i] < 5 || array[i] > 15) {
					flagRuido = "BAD";
				}

				if (
					flagRuido == "BAD" ||
					this.state.statusCorriente === "BAD" ||
					this.state.statusVoltaje === "BAD" ||
					this.state.statusVibracion === "BAD"
				) {
					this.setState({ status: "BAD" });
				} else {
					this.setState({ status: "GOOD" });
				}
			}

			this.setState({ statusRuido: flagRuido });
			this.setState({ statusStyleRuido: flagRuido });
		}
	}
	onChangeVibration(e) {
		let larTemp = e.target.value.length;
		if (e.target.value[larTemp - 1] != ",") {
			let flagVibration = "GOOD";
			let array = e.target.value.split(",").map(Number);
			this.setState({ vibration: e.target.value });

			for (let i = 0; i < array.length; i++) {
				if (array[i] < 5 || array[i] > 15) {
					flagVibration = "BAD";
				}

				if (
					flagVibration == "BAD" ||
					this.state.statusCorriente === "BAD" ||
					this.state.statusRuido === "BAD" ||
					this.state.statusVoltaje === "BAD"
				) {
					this.setState({ status: "BAD" });
				} else {
					this.setState({ status: "GOOD" });
				}
			}

			this.setState({ statusVibration: flagVibration });
			this.setState({ statusStyleVibration: flagVibration });
		}
	}
	onChangeIdMotor = e => this.setState({ motor_id: e.target.value });

	onChangeCorriente(e) {
		let larTemp = e.target.value.length;
		if (e.target.value[larTemp - 1] != ",") {
			let flagCorriente = "GOOD";
			let array = e.target.value.split(",").map(Number);
			this.setState({ corriente: e.target.value });
			// debugger;
			for (let i = 0; i < array.length; i++) {
				if (array[i] < 50 || array[i] > 150) {
					flagCorriente = "BAD";
				}

				if (
					flagCorriente == "BAD" ||
					this.state.statusVoltaje === "BAD" ||
					this.state.statusRuido === "BAD" ||
					this.state.statusVibracion === "BAD"
				) {
					this.setState({ status: "BAD" });
				} else {
					this.setState({ status: "GOOD" });
				}
			}

			this.setState({ statusCorriente: flagCorriente });
			this.setState({ statusStyleCorriente: flagCorriente });
		}
	}

	render() {
		return (
			<React.Fragment>
				<Navbar />

				<div className="tittle">
					<h2>Testing Motor</h2>
				</div>
				<div className="container">
					<form className="formStyle">
						<div className="row">
							<div className="col">
								<div className="inputScan">
									<input
										type="text"
										className="form-control"
										id="exampleInputMotor"
										aria-describedby=""
										placeholder="Scanning idMotor"
										onChange={this.onChangeIdMotor}
									/>
								</div>
							</div>
							<div className="col" />
							<div className="w-100" />

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className="col">
											<div className="motorInput">
												<div>
													<div className="inputNew">
														<input
															type="text"
															className="form-control inputColor"
															id="exampleInputMotor"
															aria-describedby=""
															placeholder="Current Motor"
															onChange={e => {
																this.onChangeCorriente(e);
																actions.changeChartCorrient(e.target.value);
															}}
															//onChange={this.onChangeCorriente}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								}}
							</Context.Consumer>

							<div className="col">
								<div className="chartNew">
									<ChartCurrent />
								</div>
							</div>

							<div className="col">
								<div className={this.state.statusStyleCorriente}>{this.state.statusCorriente}</div>
							</div>

							<div className="w-100" />

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className="col">
											<div className="motorInput">
												<div>
													<div className="inputNew">
														<input
															type="text"
															className="form-control inputColor"
															id="exampleInputMotor"
															aria-describedby=""
															placeholder="Voltaje Motor"
															onChange={e => {
																this.onChangeVoltaje(e);
																actions.changeChartVoltaje(e.target.value);
															}}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								}}
							</Context.Consumer>

							<div className="col">
								<div className="chartNew">
									<ChartVoltaje />
								</div>
							</div>

							<div className="col">
								<div className={this.state.statusStyleVoltaje}>{this.state.statusVoltaje}</div>
							</div>

							<div className="w-100" />

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className="col">
											<div className="motorInput">
												<div>
													<div className="inputNew">
														<input
															type="text"
															className="form-control inputColor"
															id="exampleInputMotor"
															aria-describedby=""
															placeholder="Noise Motor"
															onChange={e => {
																this.onChangeRuido(e);
																actions.changeChartRuido(e.target.value);
															}}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								}}
							</Context.Consumer>

							<div className="col">
								<div className="chartNew">
									<ChartRuido />
								</div>
							</div>

							<div className="col">
								<div className={this.state.statusStyleRuido}>{this.state.statusRuido}</div>
							</div>

							<div className="w-100" />

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className="col">
											<div className="motorInput">
												<div>
													<div className="inputNew">
														<input
															type="text"
															className="form-control inputColor"
															id="exampleInputMotor"
															aria-describedby=""
															placeholder="Vibration Motor"
															onChange={e => {
																this.onChangeVibration(e);
																actions.changeChartVibration(e.target.value);
															}}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								}}
							</Context.Consumer>
							<div className="col">
								<div className="chartNew">
									<ChartVibration />
								</div>
							</div>
							<div className="col">
								<div className={this.state.statusStyleVibration}>{this.state.statusVibration}</div>
							</div>
						</div>
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<div>
										<button
											onClick={() => actions.saveTest(this.state)}
											type="submit"
											className="btn btn-success btn-add">
											Add <i className="fas fa-arrow-circle-right" />
										</button>

										<div onClick={() => actions.saveTestNew(this.state)} type="submit" className="">
											Simular <i className="fas fa-arrow-circle-right" />
										</div>
									</div>
								);
							}}
						</Context.Consumer>
					</form>
				</div>

				<div className="tittle">
					<h2> Salving Test Motor</h2>
				</div>

				<Footer />
			</React.Fragment>
		);
	}
}
