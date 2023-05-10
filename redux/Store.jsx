// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './cartSlice';

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
    
//   },
// });

// export default store;
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Rootreducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
