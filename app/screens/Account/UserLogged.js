import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import InfoUser from "../../components/Account/InfoUser";

export default function UserLogged() {
	const [userInfo, setUserInfo] = useState(null);
	const [loading, setLoading] = useState(false);
	const [loadingText, setLoadingText] = useState("");
	const toastRef = useRef();

	useEffect(() => {
		(async () => {
			const user = await firebase.auth().currentUser;
			setUserInfo(user);
		})();
	}, []);

	return (
		<View style={styles.viewUserInfo}>
			{userInfo && <InfoUser userInfo={userInfo} />}
			<Text>Accountoptions</Text>
			<Button
				title="Sign Out"
				buttonStyle={styles.btnSingUp}
				titleStyle={styles.btnSingUpText}
				onPress={() => firebase.auth().signOut()}
			/>
			<Toast ref={toastRef} position="center" opacity={0.9} />
			<Loading text={loadingText} isVisible={loading} />
		</View>
	);
}

const styles = StyleSheet.create({
	viewUserInfo: {
		minHeight: "100%",
		backgroundColor: "#f2f2f2",
	},
	btnSingUp: {
		marginTop: 30,
		borderRadius: 0,
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#e3e3e3",
		borderBottomColor: 1,
		borderBottomColor: "#e3e3e3",
		paddingTop: 10,
		paddingBottom: 10,
	},
	btnSingUpText: {
		color: "#00a680",
	},
});
