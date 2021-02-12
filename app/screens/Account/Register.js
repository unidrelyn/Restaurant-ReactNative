import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import RegisterForm from "../../components/Account/RegisterForm";

export default function Register() {
	return (
		<KeyboardAwareScrollView>
			<Image
				source={require("../../../assets/logo.jpg")}
				resizeMode="contain"
				style={style.logo}
			/>
			<View style={style.registerForm}>
				<RegisterForm />
			</View>
		</KeyboardAwareScrollView>
	);
}

const style = StyleSheet.create({
	logo: {
		width: "100%",
		height: 200,
		marginTop: 20,
		borderRadius: 5,
	},
	registerForm: {
		marginRight: 40,
		marginLeft: 40,
		marginTop: 20,
	},
});
