const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			currentUserId: null,
			currentUserName: null,
			labelTest: 0,
			serialMotor: "",
			hello: "",

			motorTest: [
				{
					status: true,
					id: "",
					serial: "",
					statusCorriente: "",
					statusVoltaje: "",
					statusRuido: "",
					statusVibracion: "",
					corriente: "",
					voltaje: "",
					ruido: "",
					vibracion: "",
					testTemp: [
						{
							corriente: 0,
							ruido: 0,
							vibracion: 0,
							voltaje: 0,
							dateNew: "",
							status: "",
							user: { email: "", id: 0, username: "" }
						}
					]
				}
			],

			chartCurrent: {
				labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
				datasets: [
					{
						label: "Test Motor",
						fontColor: "#e1f2fb",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						backgroundColor: "rgba(255, 99, 132,.5)",
						borderColor: "rgba(255, 99, 132,1)",
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					}
				]
			},

			chartVoltaje: {
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
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					}
				]
			},

			chartVibration: {
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
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					}
				]
			},

			chartRuido: {
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
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					}
				]
			},

			userStock: [],
			userReceta: [],
			userRecetaCaloria: [],
			userIngrediente: [{ calory: 0, id: "", name: "" }],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			users: [
				{
					username: "",
					name: "",
					profile: ""
				}
			]
		},
		actions: {
			buildStock: myStock => {
				fetch("https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/add_stock", {
					method: "POST",
					body: JSON.stringify(myStock),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					fetch(
						"https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/stock/" +
							myStock[0].id_profile
					)
						.then(response => response.json())
						.then(data => {
							setStore({ userStock: data });
						});
				});
			},

			deleteStock: myDelete => {
				fetch("https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/delete_stock", {
					method: "DELETE",
					body: JSON.stringify(myDelete),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					fetch(
						"https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/stock/" +
							myDelete[0].id_profile
					)
						.then(response => response.json())
						.then(data => {
							setStore({ userStock: data });
						});
				});
			},

			generateReceta: myStock => {
				fetch(
					"https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/recetafiltro/" +
						myStock[0].id_profile
				)
					.then(response => response.json())
					.then(data => {
						setStore({ userReceta: data });
					});
			},

			ingredientePrecio: myIngrediente => {
				fetch(
					"https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/ingredienteId/" + myIngrediente
				)
					.then(response => response.json())
					.then(data => {
						setStore({ userIngrediente: data });
					});
			},

			savePrecio: myPrecio => {
				fetch("https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/add_precio", {
					method: "POST",
					body: JSON.stringify(myPrecio),
					headers: {
						"Content-Type": "application/json"
					}
				});
				console.log(myPrecio);
			},

			saveTest: myTest => {
				fetch("https://3000-cafdb876-64bf-48b9-b2f1-4cafa3ff31ef.ws-us02.gitpod.io/add_test", {
					method: "POST",
					body: JSON.stringify(myTest),
					headers: {
						"Content-Type": "application/json"
					}
				});
			},

			testRasb: myTestRasb => {
				fetch("https://10.1.10.41:3000/add_testNewRasb/", {
					method: "POST",
					body: JSON.stringify(myTestRasb),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					fetch("https://3000-cafdb876-64bf-48b9-b2f1-4cafa3ff31ef.ws-us02.gitpod.io/testIdLast/")
						.then(response => response.json())
						.then(data => {
							let store = getStore();
							let storeMotor = getStore();

							setStore({ motorTest: data[0] });
							setStore({ motorSerial: data[1].serial });
							console.log("dataNew" + data.id);
							console.log("TEST NEW: " + store.motorTest.id);
							console.log("TEST NEW: " + store.motorTest.serial);
							console.log(store.motorSerial);
							console.log(data[1].serial);

							let arrayChartCoorient;
							let array = store.motorTest.corriente.split(",").map(Number);
							store.chartCurrent.datasets[0].data = array;
							setStore({ chartCurrent: store.chartCurrent });
							let storeNew = getStore;
							let arrayChartVoltaje;
							array = store.motorTest.voltaje.split(",").map(Number);
							store.chartVoltaje.datasets[0].data = array;
							setStore({ chartVoltaje: store.chartVoltaje });
							storeNew = getStore;
							let arrayChartRuido;
							array = store.motorTest.ruido.split(",").map(Number);
							store.chartRuido.datasets[0].data = array;
							setStore({ chartRuido: store.chartRuido });
							storeNew = getStore;
							let arrayChartVibration;
							array = store.motorTest.vibracion.split(",").map(Number);
							store.chartVibration.datasets[0].data = array;
							setStore({ chartVibration: store.chartVibration });

							storeNew = getStore;
						});
				});
			},

			saveTestNew: myTestNew => {
				fetch("https://3000-cafdb876-64bf-48b9-b2f1-4cafa3ff31ef.ws-us02.gitpod.io/add_testNew", {
					method: "POST",
					body: JSON.stringify(myTestNew),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					fetch("https://3000-cafdb876-64bf-48b9-b2f1-4cafa3ff31ef.ws-us02.gitpod.io/testIdLast/")
						.then(response => response.json())
						.then(data => {
							let store = getStore();
							let storeMotor = getStore();

							setStore({ motorTest: data[0] });
							setStore({ motorSerial: data[1].serial });
							console.log("dataNew" + data.id);
							console.log("TEST NEW: " + store.motorTest.id);
							console.log("TEST NEW: " + store.motorTest.serial);
							console.log(store.motorSerial);
							console.log(data[1].serial);

							let arrayChartCoorient;
							let array = store.motorTest.corriente.split(",").map(Number);
							store.chartCurrent.datasets[0].data = array;
							setStore({ chartCurrent: store.chartCurrent });
							let storeNew = getStore;
							let arrayChartVoltaje;
							array = store.motorTest.voltaje.split(",").map(Number);
							store.chartVoltaje.datasets[0].data = array;
							setStore({ chartVoltaje: store.chartVoltaje });
							storeNew = getStore;
							let arrayChartRuido;
							array = store.motorTest.ruido.split(",").map(Number);
							store.chartRuido.datasets[0].data = array;
							setStore({ chartRuido: store.chartRuido });
							storeNew = getStore;
							let arrayChartVibration;
							array = store.motorTest.vibracion.split(",").map(Number);
							store.chartVibration.datasets[0].data = array;
							setStore({ chartVibration: store.chartVibration });

							storeNew = getStore;
						});
				});
			},

			destroyStore: () => {
				let store = getStore();
				(store.motorSerial = ""),
					(store.motorTest = [
						{
							status: true,
							id: "",
							serial: "",
							corriente: "",
							voltaje: "",
							ruido: "",
							vibracion: "",
							testTemp: [
								{
									corriente: 0,
									ruido: 0,
									vibracion: 0,
									voltaje: 0,
									dateNew: "",
									status: "",
									user: { email: "", id: 0, username: "" }
								}
							]
						}
					]);

				store.chartCurrent = {
					labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
					datasets: [
						{
							label: "Test Motor",
							fontColor: "#e1f2fb",
							fillColor: "rgba(151,187,205,0.2)",
							strokeColor: "rgba(151,187,205,1)",
							pointColor: "rgba(151,187,205,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(151,187,205,1)",
							backgroundColor: "rgba(255, 99, 132,.5)",
							borderColor: "rgba(255, 99, 132,1)",
							data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
						}
					]
				};

				store.chartVoltaje = {
					labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
					datasets: [
						{
							label: "Test Motor",
							fillColor: "rgba(151,187,205,0.2)",
							strokeColor: "rgba(151,187,205,1)",
							pointColor: "rgba(151,187,205,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							backgroundColor: "rgba(255, 99, 132,.5)",
							borderColor: "rgba(255, 99, 132,1)",
							pointHighlightStroke: "rgba(151,187,205,1)",
							data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
						}
					]
				};

				store.chartRuido = {
					labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
					datasets: [
						{
							label: "Test Motor",
							fillColor: "rgba(151,187,205,0.2)",
							strokeColor: "rgba(151,187,205,1)",
							pointColor: "rgba(151,187,205,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							backgroundColor: "rgba(255, 99, 132,.5)",
							borderColor: "rgba(255, 99, 132,1)",
							pointHighlightStroke: "rgba(151,187,205,1)",
							data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
						}
					]
				};

				store.chartVibration = {
					labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
					datasets: [
						{
							label: "Test Motor",
							fillColor: "rgba(151,187,205,0.2)",
							strokeColor: "rgba(151,187,205,1)",
							pointColor: "rgba(151,187,205,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							backgroundColor: "rgba(255, 99, 132,.5)",
							borderColor: "rgba(255, 99, 132,1)",
							pointHighlightStroke: "rgba(151,187,205,1)",
							data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
						}
					]
				};

				setStore({ store: store });
			},

			motorTest: myMotor => {
				fetch("https://3000-cafdb876-64bf-48b9-b2f1-4cafa3ff31ef.ws-us02.gitpod.io/motorId/" + myMotor)
					.then(response => response.json())
					.then(data => {
						setStore({ motorTest: data });
					});
			},

			changeChartCorrient: myChartCorrient => {
				let store = getStore();
				let arrayChartCoorient;
				let array = myChartCorrient.split(",").map(Number);
				store.chartCurrent.datasets[0].data = array;
				setStore({ chartCurrent: store.chartCurrent });
				let storeNew = getStore;
			},

			changeChartVoltaje: myChartVoltaje => {
				let store = getStore();
				console.log(myChartVoltaje);
				console.log(store);
				let arrayChartVoltaje;
				let array = myChartVoltaje.split(",").map(Number);
				console.log(array);

				console.log(arrayChartVoltaje);
				store.chartVoltaje.datasets[0].data = array;
				setStore({ chartVoltaje: store.chartVoltaje });

				let storeNew = getStore;
				console.log(storeNew);
			},

			changeChartVibration: myChartVibration => {
				let store = getStore();
				console.log(myChartVibration);
				console.log(store);
				let arrayChartVibration;
				let array = myChartVibration.split(",").map(Number);
				console.log(array);

				console.log(arrayChartVibration);
				store.chartVibration.datasets[0].data = array;
				setStore({ chartVibration: store.chartVibration });

				let storeNew = getStore;
				console.log(storeNew);
			},

			changeChartRuido: myChartRuido => {
				let store = getStore();
				console.log(myChartRuido);
				console.log(store);
				let arrayChartRuido;
				let array = myChartRuido.split(",").map(Number);
				console.log(array);

				console.log(arrayChartRuido);
				store.chartRuido.datasets[0].data = array;
				setStore({ chartRuido: store.chartRuido });

				let storeNew = getStore;
				console.log(storeNew);
			},

			logout: () => {
				setStore({ token: null, currentUserId: null, currentUserName: null });
				localStorage.clear();

				setStore({
					motorTest: [
						{
							status: true,
							id: "",
							serial: "",
							testTemp: [
								{
									corriente: 0,
									ruido: 0,
									vibracion: 0,
									voltaje: 0,
									status: "",
									dateNew: "",
									user: { email: "", id: 0, username: "" }
								}
							]
						}
					]
				});
			},
			isButtonEnabled: (first_name, last_name, email, password) => {
				return first_name === "" || last_name === "" || email === "" || password === "";
			},
			onLogin: (email, password, history) => {
				let settings = {
					email: email,
					password: password
				};
				fetch("https://3000-cafdb876-64bf-48b9-b2f1-4cafa3ff31ef.ws-us02.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify(settings),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						if (data.msg == "User Already Exists") {
							setStore({ errorStatus: data.msg });
						}
						setStore({ token: data.jwt, currentUserId: data.id, currentUserName: data.name });
						localStorage.setItem("myValueInLocalStorage", data.name);
						/*console.log(data.id);*/
					})
					.then(async () => {
						let store = getStore();
						const resp = await fetch("backend_url" + "/profile", {
							method: "POST",
							body: JSON.stringify({
								user_id: store.currentUserId,
								user_name: store.currentUserName
							}),
							headers: {
								"Content-Type": "application/json",
								authorization: "Bearer " + store.token
							}
						});
						if (resp.status === 200) {
							return resp.json();
						} else {
							throw new Error("Incorrect Profile usage");
						}
					})
					.then(data => {
						let store = getStore();
						let profile = store.profile;
						/*console.log(
							"firstname" +
								data.first_name +
								" | " +
								data.last_name +
								" | " +
								data.created_date +
								" | " +
								data.currentUserId
						);*/
						profile.first_name = data.first_name;
						profile.last_name = data.last_name;
						profile.createdDate = data.created_date;
						profile.currentUserId = data.currentUserId;
						setStore({ profile: profile });
					})
					.catch(error => {
						/*console.log("PROFILE's ERROR: ", error);*/
					})
					.then(() => {
						let store = getStore();
						if (store.token !== undefined) {
							history.push("/home");
						}
					});
			}
		}
	};
};

export default getState;
