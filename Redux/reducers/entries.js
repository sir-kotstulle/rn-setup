const entries = (state = [], action) => {
	switch(action.type){
		case 'ADD_ENTRY':
			return [
				...state,
				entry(undefined, action)
			]
		break;
		default:
			return state;
	}
}

const entry = (state, action) => {
	switch(action.type){
		case 'ADD_ENTRY':
			return {
				id: action.id,
				name: action.name
			}
		break;
		default:
			return state;
	}
}

export default entries;