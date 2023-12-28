import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type UseNavigationProps = NavigationProp<Record<string, object>, string> & {
  navigate: (name: 'Home' | 'Page1') => void;
};

const Page1 = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation: UseNavigationProps = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'black' : 'white'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          backgroundColor: isDarkMode ? 'black' : 'white',
        }}
        contentContainerStyle={{
          backgroundColor: isDarkMode ? 'black' : 'white',
        }}>
        <View
          style={{
            height: 1000,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: isDarkMode ? 'white' : 'black',
            }}>
            Page 1
          </Text>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page1;
