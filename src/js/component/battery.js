import React, { Component } from "react";
import footer from "../../styles/footer.scss";
import "../../styles/battery.scss";

export class BatteryNew extends React.Component {
	constructor(props) {
		super(props);

		// this.toggle = this.toggle.bind(this);
		this.state = {
			statusBattery: 0
		};
	}

	render() {
		return (
			<div>
				<p>TESTING....</p>

				<div>
					<div id="battery--block">
						<div id="battery">
							<div id="battery--indicator">
								<div className="indicator--one indicator--two" />
								<div className="indicator--one indicator--tree" />
								<div className="indicator--one indicator--for" />
								<div className="indicator--one indicator--five" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
