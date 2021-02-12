import React from "react";
import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
	return (
		<ScrollView>
			<Image
				source={require("../../../assets/logo.jpg")}
				resizeMode="contain"
				style={style.logo}
			/>
			<View style={style.viewContainer}>
				<Text> Login Form</Text>
				<CreateAccount />
			</View>
			<Divider style={style.divider} />
			<Text>Social Login</Text>
		</ScrollView>
	);
}

function CreateAccount() {
	const navigation = useNavigation();
	return (
		<Text style={style.createAccount}>
			Create Account{"  "}
			<Text
				style={style.btnRegister}
				onPress={() => navigation.navigate("register")}
			>
				Register
			</Text>
		</Text>
	);
}

const style = StyleSheet.create({
	logo: {
		width: "100%",
		height: 200,
		marginTop: 20,
		borderRadius: 5,
	},
	viewContainer: {
		marginRight: 40,
		marginLeft: 40,
	},
	createAccount: {
		margin: 10,
	},
	btnRegister: {
		color: "#00a680",
		fontWeight: "bold",
	},
	divider: {
		backgroundColor: "#00a680",
		margin: 40,
	},
});
