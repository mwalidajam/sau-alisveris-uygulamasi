import React, {useState} from 'react';
import {RootTabParamList} from '../../navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Text, Box, Image} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Layout from '../../components/Layout';

type Props = BottomTabScreenProps<RootTabParamList, 'Product'>;

const Product: React.FC<Props> = ({navigation, route: {params}}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <Layout>
      <Box>
        <Image
          source={{uri: params.image}}
          alt="image base"
          resizeMode="contain"
          height={200}
          roundedTop="md"
          backgroundColor={'red'}
        />
        <Box p={4}>
          <Box flexDirection="row" justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold">
              {params.name}
            </Text>
            {
              <Icon
                name={isFavorite ? 'heart' : 'heart-o'}
                size={30}
                color={isFavorite ? 'red' : 'gray'}
                onPress={() => setIsFavorite(!isFavorite)}
              />
            }
          </Box>
          <Text fontSize="md" color="gray.500">
            {params.price}
          </Text>
          <Text fontSize="md" color="gray.500">
            {params.description}
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Product;
