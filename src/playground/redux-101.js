import {createStore} from 'redux';


//Action creators
const incrementCount = ({ incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}


const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count : state.count + incrementBy
            };
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({
   type: 'INCREMENT',
   incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
 });
