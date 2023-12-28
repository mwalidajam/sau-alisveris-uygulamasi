import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ScrollView} from 'native-base';

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'black' : 'white'}
      />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
