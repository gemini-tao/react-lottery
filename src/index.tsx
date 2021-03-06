/*
 * @Author: lifan
 * @Date: 2019-01-26 08:54:11
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 13:50:19
*/
import '@babel/polyfill';
// tslint:disable-next-line:ordered-imports
import React from 'react';
// tslint:disable-next-line:no-submodule-imports
import 'react-app-polyfill/ie9';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// tslint:disable-next-line:no-submodule-imports
import { PersistGate } from 'redux-persist/integration/react';
import App from './containers';
import configureStore from './store';
import * as serviceWorker from './utils/serviceWorker';

import 'normalize.css';
import './assets/scss/index.scss';

const configStore = configureStore();

ReactDOM.render(
  <Provider store={configStore.store}>
    <PersistGate persistor={configStore.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: () => {
    // console.log('success');
  },
  onUpdate: (registration: ServiceWorkerRegistration) => {
    if (confirm('监测到更新，点击更新')) {
      try {
        // tslint:disable-next-line:no-unused-expression
        registration.waiting && registration.waiting.postMessage('skipWaiting');
      } catch (e) {
        window.location.reload();
      }
    }
  },
});
