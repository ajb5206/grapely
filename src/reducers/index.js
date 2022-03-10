import formVisibleReducer from './form-visible-reducer';
import wineListReducer from './wine-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	mainWineList: wineListReducer,
	firestore: firestoreReducer
});

export default rootReducer;