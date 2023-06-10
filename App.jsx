import Main from './Components/Splash/Main';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/Store';
import Loader from './Components/BottomTab/Screens/Loader.json';
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
