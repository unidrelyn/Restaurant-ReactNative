import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { size, isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase";

import { validateEmail } from "../../utils/validations/";
import Loading from "../Loading";

export default function RegisterForm({ toastRef, ...props }) {
	const [showPassword, setshowPassword] = useState(true);
	const [showRepeatPassword, setshowRepeatPassword] = useState(true);
	const [formData, setformData] = useState(defaultFormValue);
	const [creating, setCreating] = useState(false);

	let email = formData.email,
		emailValidate = validateEmail(email),
		password = formData.password,
		repeatPassword = formData.repeatPassword;

	const navigation = useNavigation();

	const sendFirebase = () => {
		setCreating(true);
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				setCreating(false);
				navigation.navigate("account");
			})
			.catch(() => {
				setCreating(false);
				toastRef.current.show("User is already registered");
			});
	};

	const onSubmit = () => {
		isEmpty(email) || isEmpty(password) || isEmpty(repeatPassword)
			? toastRef.current.show("all fields are required")
			: emailValidate
			? size(password) >= 6
				? password === repeatPassword
					? sendFirebase()
					: toastRef.current.show("passwords do not match ")
				: toastRef.current.show("password must be longer than 6 characters ")
			: toastRef.current.show("invalid email ");
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
			<Loading isVisible={creating} text="Creating Account" />
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
