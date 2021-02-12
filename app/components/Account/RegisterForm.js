import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations/";

export default function RegisterForm() {
	const [showPassword, setshowPassword] = useState(true);
	const [showRepeatPassword, setshowRepeatPassword] = useState(true);
	const [formData, setformData] = useState(defaultFormValue);

	const onSubmit = () => {
		console.log(formData);
		console.log(validateEmail(formData.email));
	};

	const onChange = (e, type) => {
		setformData({
			...formData,
			[type]: e.nativeEvent.text,
		});
	};

	return (
		<View style={styles.formContainer}>
			<Input
				placeholder="E-mail"
				containerStyle={styles.inputForm}
				onChange={(e) => onChange(e, "email")}
				rightIcon={
					<Icon
						type="material-community"
						name="at"
						iconStyle={styles.iconRigth}
					/>
				}
			/>
			<Input
				placeholder="Password"
				containerStyle={styles.inputForm}
				onChange={(e) => onChange(e, "password")}
				password={true}
				secureTextEntry={showPassword}
				rightIcon={
					<Icon
						type="material-community"
						name={showPassword ? "eye-off-outline" : "eye-outline"}
						iconStyle={styles.iconRigth}
						onPress={() => setshowPassword(!showPassword)}
					/>
				}
			/>
			<Input
				placeholder="Confirm Password"
				containerStyle={styles.inputForm}
				onChange={(e) => onChange(e, "repeatPassword")}
				password={true}
				secureTextEntry={showRepeatPassword}
				rightIcon={
					<Icon
						type="material-community"
						name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
						iconStyle={styles.iconRigth}
						onPress={() => setshowRepeatPassword(!showRepeatPassword)}
					/>
				}
			/>
			<Button
				title="Register"
				containerStyle={styles.btnContainerRegister}
				buttonStyle={styles.btnRegister}
				onPress={onSubmit}
			/>
		</View>
	);
}

function defaultFormValue() {
	return {
		email: "",
		password: "",
		repeatPassword: "",
	};
}

const styles = StyleSheet.create({
	formContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	inputForm: {
		width: "100%",
		marginTop: 20,
	},
	btnContainerRegister: {
		marginTop: 20,
		width: "80%",
	},
	btnRegister: {
		backgroundColor: "#00a680",
	},
	iconRigth: {
		color: "#c1c1c1",
	},
});
