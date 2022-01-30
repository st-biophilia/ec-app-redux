import React from 'react';
import ReactDOM from 'react-dom';

// modules for store
import { Provider } from 'react-redux';
import createStore from './ducks/store/store'

// modules for router
import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';

import App from './App';

// history 生成（ブラウザのパスの履歴）
const history = History.createBrowserHistory();
// store 生成
export const store = createStore(history);

// App は二つのコンポーネントで wrapping されている。
// 1. Provider・・・Appで store の情報を参照したり変更したりできる
// 2. ConnectedRouter・・・ブラウザの画面遷移の履歴を利用できる
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);