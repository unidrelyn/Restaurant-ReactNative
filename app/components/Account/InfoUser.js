import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";

export default function InfoUser({ userInfo }) {
	const { photoUrl, displayName, email } = userInfo;

	const changeAvatar = () => {
		console.log("change avatar...");
	};

	return (
		<View style={styles.viewUserInfo}>
			<Avatar
				rounded
				size="large"
				containerStyle={styles.userAvatar}
				onPress={() => changeAvatar}
				source={
					photoUrl
						? { uri: photoUrl }
						: require("../../../assets/avatar-default.jpg")
				}
			>
				<Avatar.Accessory />
			</Avatar>
			<View>
				<Text style={styles.displayName}>
					{displayName ? displayName : "Anonimo"}
				</Text>
				<Text>{email ? email : "social login"}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	viewUserInfo: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		backgroundColor: "#f2f2f2",

		paddingTop: 30,
		paddingBottom: 30,
	},
	userAvatar: {
		marginRight: 20,
		//backgroundColor: "black",
	},
	displayName: {
		fontWeight: "bold",
		paddingBottom: 5,
	},
});
