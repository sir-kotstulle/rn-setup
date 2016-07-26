const counter = (state = {count: 0}, action) => {
	
	const count = state.count;

	switch(action.type){
		case 'INCREASE_COUNTER':
			return {count: count + 1}
		break;
		default:
			return state;
	}
}

export default counter;