import Reactotron, { overlay } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure(
    { host: '192.168.1.7' },
  )
    .useReactNative()
    .use(
      reactotronRedux(),
      overlay(),
    )
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
