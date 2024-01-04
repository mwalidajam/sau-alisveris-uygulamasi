import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'native-base';

type Props = {
  children?: React.ReactNode;
  onRefresh?: () => void;
  refreshing?: boolean;
};

const Layout: React.FC<Props> = ({children, onRefresh, refreshing}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'black' : 'white'}
      />
      <ScrollView
        refreshControl={
          onRefresh && refreshing !== undefined ? (
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          ) : undefined
        }>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
