import React from "react";
import { Route, Switch } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import AddAppointment from "./components/Appointments/addAppointment"
export default (
	<Switch>
		<Route
			component={LogIn}
			exact
			path="/"
		/>
		<Route
				component={AddAppointment}
				exact
				path="/home"
			/>
		<Route
				component={ AddAppointment }
				path="/userInfo"
			/>
			<Route
				component={ LogIn }
				path="/about"
			/>
		</Switch>
  );
