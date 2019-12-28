import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React, { Component } from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import colors from './styles/colors';
import Routes from './routes';

import store from './store';
import NavigationService from './services/navigation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
        <Routes
          ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
        />
      </Provider>
    );
  }
}

export default App;
