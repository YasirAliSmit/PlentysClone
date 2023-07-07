import Main from './Components/Splash/Main';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/Store';
import Loader from './Components/BottomTab/Screens/Loader.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SP_KEY} from '@env'
import PaymentScreen from './Components/BottomTab/Screens/PaymentScreen';
import { StripeProvider } from '@stripe/stripe-react-native';
const App = () => {
 

  return (
    <StripeProvider
      publishableKey={SP_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
     
    </StripeProvider>
  );
};

export default App;
