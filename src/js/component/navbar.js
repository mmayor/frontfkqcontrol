import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../img/LogoWhite.png";
import navbar from "../../styles/navbar.scss";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavDropdown, Form, Button } from "reactstrap";
import { Context } from "../store/appContext";
export class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
							<Link className="navbar-brand" to="/home">
								<img height="50px" src={LogoWhite} />
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon" />
							</button>

							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav mr-auto">
									{/*<li className="nav-item active">
							<a className="nav-link" href="/stock">
								My Stock
							</a>
						</li>*/}
									<li className="nav-item active">
										<Link className="nav-link" to="/motortest">
											Motor Test
										</Link>
									</li>

									<li className="nav-item active">
										<Link
											className="nav-link"
											to="/simulatetest"
											onClick={() => actions.destroyStore()}>
											Simulate Test
										</Link>
									</li>

									<li className="nav-item active">
										<Link
											className="nav-link"
											to="/historymotor"
											onClick={() => actions.destroyStore()}>
											Test History
										</Link>
									</li>
								</ul>
							</div>
							<div className="idName">{localStorage.getItem("myValueInLocalStorage")}</div>
							<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
								<DropdownToggle caret>
									<i className="fas fa-user fa-lg" />
								</DropdownToggle>
								<DropdownMenu right>
									<Link to="/profile">
										<DropdownItem>My Profile</DropdownItem>
									</Link>
									<Link to="/help">
										<DropdownItem>Help</DropdownItem>
									</Link>
									<DropdownItem divider />
									<Link to="/scan">
										<DropdownItem>Scan</DropdownItem>
									</Link>
									<DropdownItem divider />
									{store.token !== undefined ? (
										<Link to="/login">
											<DropdownItem onClick={() => actions.logout()}>Logout</DropdownItem>
										</Link>
									) : (
										<Link to="/login">
											<DropdownItem>Login</DropdownItem>
										</Link>
									)}
								</DropdownMenu>
							</Dropdown>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
