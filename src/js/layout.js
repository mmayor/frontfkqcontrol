import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Login } from "./views/login";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Profile } from "./views/profile";
import { MotorTest } from "./views/motorTest";
import { Battery } from "./views/battery";
import { SimulateTest } from "./views/simulateTest";
import { TestRaspberry } from "./views/testraspberry";
import { HistoryMotor } from "./views/historyMotor";

// import { ModalMotor } from "./component/modal";
import { Modal } from "./component/Modal";
import injectContext from "./store/appContext";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={Login} />
							<Route path="/home" component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/profile" component={Profile} />
							<Route path="/motortest" component={MotorTest} />
							<Route path="/simulatetest" component={SimulateTest} />
							<Route path="/testraspberry" component={TestRaspberry} />
							<Route path="/historymotor" component={HistoryMotor} />
							<Route path="/battery" component={Battery} />

							<Route exact path="/modal/:id" component={Modal} />

							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
