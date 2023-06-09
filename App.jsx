import Main from './Components/Splash/Main';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/Store';
import Loader from './Components/BottomTab/Screens/Loader.json';
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
