import { INCREASE_COUNTER, ADD_ITEM } from '../actions/index';

const initialState = {
	count: 25,
	items: ['dfdf']
}

export function testReducer(state = initialState, action) {

	const count = state.count

	switch (action.type) {
		case INCREASE_COUNTER:
			return Object.assign({}, state, {
				count: count + 1
			});
		case ADD_ITEM:
			return Object.assign({}, state, {
				items: state.items.concat(action.value)
			});
		default:
			return state
	}
}