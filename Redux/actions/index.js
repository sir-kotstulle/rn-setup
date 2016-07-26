/* action types */

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const ADD_ITEM = 'ADD_ITEM';

/* action creators */

export function increaseCounter(){
	return {
		type: INCREASE_COUNTER
	}
}

export function addItem( value ){
	return {
		type: ADD_ITEM,
		value
	}
}