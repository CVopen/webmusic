import React, { Component } from 'react';
import View from './views/View'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <View />
      </Provider>
    );
  }
}

export default App;