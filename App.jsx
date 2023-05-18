import Main from './Components/Splash/Main';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/Store';
import Cart from './Components/BottomTab/Screens/Cart';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
// const persistor = persistStore();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};
export default App;
