import Main from './Components/Splash/Main';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/Store';
import Loader from './Components/BottomTab/Screens/Loader.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
