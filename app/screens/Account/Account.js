import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {
	const [login, setLogin] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			console.log(user);
			user ? setLogin(true) : setLogin(false);
		});
		return () => {};
	}, []);

	if (login === null) return <Loading isVisible={true} text="Loading..." />;

	return login ? <UserLogged /> : <UserGuest />;
}
