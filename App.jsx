import Main from './Components/Splash/Main';
import { Provider } from 'react-redux';
const App = () => {
  return (<Provider store={store} ><Main/></Provider>);
};
export default App;
import store from './redux/store';