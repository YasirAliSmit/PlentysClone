import Main from './Components/Splash/Main';
import { Provider } from 'react-redux';
import store from './redux/Store';
const App = () => {
  return (<Provider store={store}><Main/></Provider>);
};
export default App;
