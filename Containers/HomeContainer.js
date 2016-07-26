import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { increaseCounter, addItem } from '../Redux/actions/';
import { Actions } from 'react-native-router-flux';
import WordList from '../Components/WordList';
import AddNewWordInput from '../Components/AddNewWordInput';

class HomeContainer extends Component {

	render(){
		const { value, onIncreaseClick, items } = this.props;
		console.log(this.props);

		return (
			<View style={{flex: 1, justifyContent: 'center'}}>
				<WordList words={items} />
				<Text>Current item count: {items.length}</Text>
				<Text onPress={() => this.props.onAddNewItem('This is a value')}>Add new item</Text>
				<Text onPress={Actions.settings}>Settings</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		value: state.count,
		items: state.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncreaseClick: () => dispatch(increaseCounter()),
		onAddNewItem: (value) => dispatch(addItem(value))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainer);

//export default HomeContainer;