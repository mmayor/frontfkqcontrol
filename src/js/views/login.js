import React from "react";
import { Alert } from "reactstrap";
import LogoBlack from "../../img/LogoBlack.png";
import Quote1 from "../../img/Quote1.png";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}
	onChangeEmail = e => this.setState({ email: e.target.value });
	onChangePassword = e => this.setState({ password: e.target.value });

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div className="backlogin">
								<div className="logo">
									<img src={LogoBlack} width="300px" />
								</div>
								<div className="container cont-login">
									<div className="row row-login">
										<p className="login">Login to your account</p>
										<form>
											<div className="form-group">
												<input
													type="email"
													className="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"
													placeholder="Username"
													onChange={this.onChangeEmail}
												/>
											</div>
											<div className="form-group">
												<input
													type="password"
													className="form-control"
													id="exampleInputPassword1"
													placeholder="Password"
													onChange={this.onChangePassword}
												/>
											</div>

											<button
												type="button"
												className="btn btn-success btn-login"
												onClick={
													() =>
														actions.onLogin(
															this.state.email,
															this.state.password,
															this.props.history
														)
													//actions.showDiv()
												}>
												Login
											</button>

											<p className="forgot">
												<Link className="fp" to="/profile">
													Forgot password?
												</Link>{" "}
												|{" "}
												<Link className="fp" to="/signup">
													Sign Up?
												</Link>
											</p>

											{store.token === undefined && (
												<div id="login-alert">
													<Alert color="danger">User does not exist!</Alert>
												</div>
											)}
										</form>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
Login.propTypes = {
	history: PropTypes.object
};
