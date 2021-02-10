import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { Button } from "react-native-elements";

export default function UserGuest() {
	return (
		<ScrollView centerContent={true} style={style.viewBody}>
			<Image
				source={require("../../../assets/user-guestm.jpg")}
				resizeNode="contain"
				style={style.image}
			/>
			<Text style={style.title}>Consult User Restaurant</Text>
			<Text style={style.description}>
				How would you describe your best restaurant? Search and visualise the
				best restaurants in a simple way, vote for the one you liked the most
				and comment on your experience.
			</Text>
			<View style={style.viewBtn}>
				<Button
					title="your User"
					buttonStyle={style.btnStyle}
					containerStyle={style.btnContainer}
					onPress={() => console.log("click")}
				/>
			</View>
		</ScrollView>
	);
}

const style = StyleSheet.create({
	viewBody: {
		marginLeft: 30,
		marginRight: 30,
	},
	image: {
		height: 300,
		width: "100%",
		marginBottom: 40,
	},
	title: {
		fontWeight: "bold",
		fontSize: 19,
		marginBottom: 10,
		textAlign: "center",
	},
	description: {
		textAlign: "center",
		marginBottom: 20,
	},
	viewBtn: {
		flex: 1,
		alignItems: "center",
	},
	btnStyle: {
		backgroundColor: "#00a680",
	},
	btnContainer: {
		width: "70%",
	},
});
