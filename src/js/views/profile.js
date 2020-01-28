import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/profile.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class Profile extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background">
					<div className="container my-profile">
						<div className="row my-prof">
							<div className="col">
								<h1>My Profile</h1>
							</div>
						</div>
						<div className="row my-prof">
							<div className="col prof-img">
								<img
									src="https://assets.phenompeople.com/CareerConnectResources/GENEA0084/en_us/mobile/assets/images/default_profile.png"
									className="rounded d-block"
								/>
							</div>
						</div>

						<form>
							<div className="form-group row">
								<label htmlFor="staticName" className="col-sm-2 col-form-label">
									Name:
								</label>
								<div className="col-sm-10">
									<input
										type="text"
										readOnly
										className="form-control input-profile"
										id="staticName"
										value="Homero Luzardo"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="staticPassword" className="col-sm-2 col-form-label">
									Password:
								</label>
								<div className="col-sm-10">
									<input
										type="password"
										readOnly
										className="form-control input-profile"
										id="staticPassword"
										value="***********"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
									Email:
								</label>
								<div className="col-sm-10">
									<input
										type="text"
										readOnly
										className="form-control input-profile"
										id="staticEmail"
										value="homeroeluzardo@gmail.com"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="staticGender" className="col-sm-2 col-form-label">
									Gender:
								</label>
								<div className="col-sm-10">
									<input
										type="text"
										readOnly
										className="form-control input-profile"
										id="staticGender"
										value="Male"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="staticWeight" className="col-sm-2 col-form-label">
									Weight (lb):
								</label>
								<div className="col-sm-10">
									<input
										type="text"
										readOnly
										className="form-control input-profile"
										id="staticWeight"
										value="170"
									/>
								</div>
							</div>
						</form>
						<button type="submit" className="btn btn-success btn-profile">
							Edit
						</button>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
