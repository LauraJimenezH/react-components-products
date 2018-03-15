import React from 'react';
// El componente Provider que expone `react-redux`
import { Provider } from 'react-redux';

import Main from './lib/Main'
// El que acabamos de crear
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
