import React, {useState} from 'react';
import {RootTabParamList} from '../../navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import Layout from '../../components/Layout';
import {Text, Button, TextField} from 'native-base';
import axios from 'axios';
import {api_url} from '../../data/url';

type Props = BottomTabScreenProps<RootTabParamList, 'Signup'>;

const Signup: React.FC<Props> = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    const {data} = await axios.post(`${api_url}/api/customers/register`, {
      name,
      email,
      password,
    });
    console.log(data);
    if (data.status === 'success') {
      navigation.goBack();
    }
  };
  return (
    <Layout>
      <>
        <TextField placeholder="İsim" onChangeText={value => setName(value)} />
        <TextField
          placeholder="E-posta"
          onChangeText={value => setEmail(value)}
        />
        <TextField
          placeholder="Şifre"
          type="password"
          onChangeText={value => setPassword(value)}
        />
        <Button onPress={handleLogin}>Kayıt ol</Button>
      </>
    </Layout>
  );
};

export default Signup;
