import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

let styles = StyleSheet.create({
	textInput: {
		height: 40,
		borderWidth: 1
	}
});

export default function AddNewWordInput(props){

	return (
		<View>
			<TouchableOpacity>
				<Text>
					Increase Counter
				</Text>
			</TouchableOpacity>
			<TextInput 
				style={styles.textInput}
			/>
		</View>
	)
}