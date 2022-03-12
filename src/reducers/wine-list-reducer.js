import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
	const { name, region, varietals, notes, id} = action;
	switch (action.type) {
		// case c.ADD_WINE:
		//  	return Object.assign({}, state, {
		//  		[id]: {
		//  			name: name,
		//  			region: region,
		//  			varietals: varietals,
		// 			notes: notes,
		//  			id: id,
		//  		}
		//  	});
		case c.DELETE_WINE:
			let newState = {...state};
			delete newState[id];
			return newState;
		default:
			return state;	
	}
};
