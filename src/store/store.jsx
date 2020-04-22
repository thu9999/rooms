import { createStore } from 'redux';

import {
    FILTER_ROOM
} from './action';

// Data
import Rooms from './../data';

let initialState = {
    rooms: Rooms
}

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case FILTER_ROOM:
            const rooms = state.rooms;
            const newRooms = rooms.filter(room => room.feature === action.value.feature);
            return {...state, rooms: newRooms};

        default: 
            return state;
    }
};

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

(function() {
    const next = store.dispatch;
    store.dispatch = function dispatchAndLog(action) {
        let result = next(action);
        return result;
    }
})();

(function() {
    const next = store.dispatch;
    store.dispatch = function dispatchAndReportErrors(action) {
        try {
            return next(action);
        } catch(error) {
            console.log('Caught an exception', error);
        }
    }
})();

export default store;