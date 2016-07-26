import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

let styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default function WordList({words}){

	function renderList(){
		return words.map((word, id) => {
			return (
				<Text key={id}>{word}</Text>
			);
		});
	}

	return (
		<View style={styles.container}>
			<Text>Word List: </Text>
			{renderList()}
		</View>
	)
}