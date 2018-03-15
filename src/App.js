import React from 'react';
import { Provider } from 'react-redux';
import Main from './lib/Main'
import store from './lib/store';


const App = () => {
    return (
      <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
      </div>
    );
  }

export default App;
