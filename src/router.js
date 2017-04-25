import React from "react";
import { Route, Switch } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import AddAppointment from "./components/Appointments/addAppointment";
import BookingsHome from "./components/BookingsHome/BookingsHome";
import UserInfo from "./components/userInfo/userInfo";

import ClientAppointment from "./components/Appointments/clientAppointment";
import CustomerInfo from "./components/CustomerInfo/CustomerInfo";

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
				path="/book"
			/>
		<Route
				component={ UserInfo }
				exact
				path="/userInfo"
			/>
		<Route
				component={ LogIn }
				path="/about"
			/>
		<Route
				component={ BookingsHome }
				path="/home"
			/>
		<Route
				component={ ClientAppointment }
				exact
				path="/client/book"
			/>
		<Route
				component={ CustomerInfo }
				path = "/customerInfo/:id"
			/>
	</Switch>
);
