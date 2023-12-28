import React from 'react';
import {RootTabParamList} from '../../navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import Layout from '../../components/Layout';

type Props = BottomTabScreenProps<RootTabParamList, 'Profile'>;

const Profile: React.FC<Props> = ({navigation}) => {
  return <Layout></Layout>;
};

export default Profile;
