import React, {useState} from 'react';
import {RootTabParamList} from '../../navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import Layout from '../../components/Layout';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {Text, Button, TextField} from 'native-base';
import axios from 'axios';
import {api_url} from '../../data/url';

type Props = BottomTabScreenProps<RootTabParamList, 'Profile'>;

const Profile: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userData = useAppSelector(state => state.user);
  const handleLogin = async () => {
    const {data} = await axios.post(`${api_url}/api/customers/login`, {
      email,
      password,
    });
    console.log(data);
    if (data.status === 'success') {
      dispatch({
        type: 'user/login',
        payload: {
          token: data.token,
          name: data.user.name,
          email: data.user.email,
          phone: data.user.phone,
        },
      });
    }
  };
  return (
    <Layout>
      <>
        {userData.token ? (
          <>
            <Text>Merhaba {userData.name}</Text>
            <Button onPress={() => dispatch({type: 'user/logout'})}>
              Çıkış yap
            </Button>
          </>
        ) : (
          <>
            {
              // @ts-ignore
            }
            <TextField
              placeholder="E-posta"
              onChangeText={value => setEmail(value)}
            />
            <TextField
              placeholder="Şifre"
              onChangeText={value => setPassword(value)}
            />
            <Button onPress={handleLogin}>Giriş yap</Button>
            <Button
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              Kayıt ol
            </Button>
          </>
        )}
      </>
    </Layout>
  );
};

export default Profile;
