import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Container, Text, Button, ScrollView} from 'native-base';

type UseNavigationProps = NavigationProp<Record<string, object>, string> & {
  navigate: (name: 'Home' | 'Page1') => void;
};

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation: UseNavigationProps = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'black' : 'white'}
      />
      <ScrollView>
        <Container>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Button onPress={() => navigation.navigate('Page1')} mt={10} mb={20}>
            <Text>Go to Page 1</Text>
          </Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
