import * as c from './ActionTypes';

export const deleteWine = id => ({
	type: c.DELETE_WINE,
	id
});

export const toggleForm = () => ({
	type: c.TOGGLE_FORM
});

// export const addWine = (wine) => {
// 	const { name, region, varietals, notes, id } = wine;
// 	return{
// 		type: c.ADD_WINE,
// 		name: name,
// 		region: region,
// 		varietals: varietals,
// 		notes: notes,
// 		id: id,
// 	};
// };