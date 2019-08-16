import * as React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import { setNavigator } from './services/navigation';


const App: React.FC = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
