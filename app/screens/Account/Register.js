import React, { useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-easy-toast";

import RegisterForm from "../../components/Account/RegisterForm";

export default function Register() {
	const toastRef = useRef();

	return (
		<KeyboardAwareScrollView>
			<Image
				source={require("../../../assets/logo.jpg")}
				resizeMode="contain"
				style={style.logo}
			/>
			<View style={style.registerForm}>
				<RegisterForm toastRef={toastRef} />
			</View>
			<Toast ref={toastRef} position="center" opacity={0.9} />
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
