import React from 'react';
import Navigation from './src/navigation';
import {NativeBaseProvider} from 'native-base';
import {store, persistor} from './src/redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
