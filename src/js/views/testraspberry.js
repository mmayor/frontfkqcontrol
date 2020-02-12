import React from "react";
import { Socket } from "react-socket-io";
import ProgressBar from "react-bootstrap/ProgressBar";
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
import socketIOClient from "socket.io-client";
import openSocket from "socket.io-client";

// const socket = openSocket("https://10.1.10.41:3000/testSO/", { transports: ["websocket"] });

export class TestRaspberry extends React.Component {
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
			color: "white",
			endpoint: "https://10.1.10.41:3000",
			progressBar: 0,
			statusProgressBar: false,
			uri: "https://10.1.10.41:3000/test",
			// options = { transports: ['websocket'] },
			user_id: localStorage.getItem("myValueInLocalStorage")
		};
	}

	//	componentDidMount = () => {
	//		const socket = socketIOClient(this.state.endpoint);
	//		setInterval(this.send(), 1000);
	//		socket.on("change color", col => {
	//			document.body.style.backgroundColor = col;
	//		});
	//	};

	// sending sockets

	send = () => {
		const io = require("socket.io-client");
		const socket = io.connect(
			"http://10.1.10.41:3000/test",
			{ transports: ["websocket", "polling", "flashsocket"] }
		);
		// const socket = socketIOClient(this.state.endpoint, { transports: ["websocket", "polling", "flashsocket"] });
		// socket.connect();
		// socket = io.connect("http://10.1.10.41:3000/test");
		socket.emit("message", "New Message");
		socket.emit("my event", this.state.color); // change 'red' to this.state.color
		//	socket.emit("my event", this.state.color);
	};

	setColor = color => {
		this.setState({ color });
	};

	// listen for any messages coming through
	// of type 'chat' and then trigger the
	// callback function with said message
	// socket.on("message", message => {
	// console.log the message for posterity
	// console.log(message);
	// trigger the callback passed in when
	// our App component calls connect
	//	});

	onChangeProgressBar() {
		for (let i = 0; i < 10; i++) {
			setTimeout(300);
			this.setState({ progressBar: i * 10 });
		}
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
		debugger;
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
		// const socket = socketIOClient(this.state.endpoint);
		return (
			<React.Fragment>
				<Navbar />

				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<div className="tittle">
									<h2 className={store.motorTest.status}>
										Simulate Raspberry Testing Motor. Status: {store.motorTest.status}
									</h2>
								</div>
								<button
									className="btn btn-success btn-add simulate"
									onClick={() => {
										actions.testRasb(this.state);
										this.onChangeProgressBar();
										this.send();
									}}
									type="submit">
									{" "}
									SIMULATE <i className="fas fa-arrow-circle-right" />
									{/** 	<ProgressBar animated now={this.state.progressBar} /> */}
									<div />
								</button>
							</div>
						);
					}}
				</Context.Consumer>

				<div className="container">
					<form className="formStyle">
						<div className="row">
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className="col">
											<div className="inputScan">
												<input
													type="text"
													className="form-control"
													id="exampleInputMotor"
													aria-describedby=""
													placeholder="Scanning idMotor"
													value={store.motorSerial}
												/>
											</div>
										</div>
									);
								}}
							</Context.Consumer>

							<div className="col" />
							<div className="w-100" />
							{/** 


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
															value={store.motorTest.corriente}
															onLoadStart={e => {
																this.onChangeCorriente(e);
															}}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								}}
							</Context.Consumer>
*/}

							<div className="col">
								<div className="chartNew">
									<ChartCurrent />
								</div>
							</div>

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className=".col-md-2">
											<div className={store.motorTest.statusCorriente}>
												{store.motorTest.statusCorriente}
											</div>
										</div>
									);
								}}
							</Context.Consumer>

							<div className="w-100" />
							{/**
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
															value={store.motorTest.voltaje}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								}}
							</Context.Consumer>
 */}
							<div className="col">
								<div className="chartNew">
									<ChartVoltaje />
								</div>
							</div>

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className=".col-md-2">
											<div className={store.motorTest.statusVoltaje}>
												{store.motorTest.statusVoltaje}
											</div>
										</div>
									);
								}}
							</Context.Consumer>

							<div className="w-100" />
							{/** 
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
															value={store.motorTest.ruido}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								}}
							</Context.Consumer>
*/}
							<div className="col">
								<div className="chartNew">
									<ChartRuido />
								</div>
							</div>

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className=".col-md-2">
											<div className={store.motorTest.statusRuido}>
												{store.motorTest.statusRuido}
											</div>
										</div>
									);
								}}
							</Context.Consumer>

							<div className="w-100" />
							{/** 
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
															value={store.motorTest.vibracion}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								}}
							</Context.Consumer>
*/}
							<div className="col">
								<div className="chartNew">
									<ChartVibration />
								</div>
							</div>
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className=".col-md-2">
											<div className={store.motorTest.statusVibracion}>
												{store.motorTest.statusVibracion}
											</div>
										</div>
									);
								}}
							</Context.Consumer>
						</div>
					</form>
				</div>

				<div className="tittle" />

				<Footer />
			</React.Fragment>
		);
	}
}
