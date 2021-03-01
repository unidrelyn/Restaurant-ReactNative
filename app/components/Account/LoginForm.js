import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";
import { validateEmail } from "../../utils/validations";
import Loading from "../Loading";

import * as firebase from "firebase";

export default function LoginForm({ toastRef }) {
	const [showPassword, setshowPassword] = useState(true);
	const [formData, setFormData] = useState(deafultValue);
	const [loading, setLoading] = useState(false);

	const onChange = (e, type) => {
		setFormData({
			...formData,
			[type]: e.nativeEvent.text,
		});
		console.log(formData);
	};

	const navigation = useNavigation();

	const sendFirebase = () => {
		setLoading(true);
		firebase
			.auth()
			.signInWithEmailAndPassword(formData.email, formData.password)
			.then(() => {
				navigation.navigate("account");
				setLoading(false);
			})
			.catch(() => {
				toastRef.current.show("E-mail or Password incorrect");
				setLoading(false);
			});
	};

	const onSubmit = () => {
		isEmpty(formData.email) || isEmpty(formData.password)
			? toastRef.current.show("all fields are required")
			: validateEmail(formData.email)
			? sendFirebase()
			: toastRef.current.show("E-mail not Valid");
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
				password={true}
				secureTextEntry={showPassword}
				onChange={(e) => onChange(e, "password")}
				rightIcon={
					<Icon
						type="material-community"
						name={showPassword ? "eye-off-outline" : "eye-outline"}
						iconStyle={styles.iconRigth}
						onPress={() => setshowPassword(!showPassword)}
					/>
				}
			/>
			<Button
				title="Login in"
				containerStyle={styles.btnContainerLogin}
				buttonStyle={styles.btnLogin}
				onPress={onSubmit}
			/>
			<Loading isVisible={loading} text="starting session" />
		</View>
	);
}

function deafultValue() {
	return {
		email: "",
		password: "",
	};
}

const styles = StyleSheet.create({
	formContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
	},
	inputForm: {
		width: "100%",
		marginTop: 20,
	},
	btnContainerLogin: {
		marginTop: 20,
		width: "95%",
	},
	btnLogin: {
		backgroundColor: "#00a680",
	},
	iconRigth: {
		color: "#c1c1c1",
	},
});
