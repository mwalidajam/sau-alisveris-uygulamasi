// make product item component using native base
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Product} from '../../types';
import {VStack, Box, Divider, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {RootTabParamList} from '../../navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

type Props = {
  product: Product;
};

const ProductItem: React.FC<Props> = ({product}) => {
  const navigation =
    useNavigation<BottomTabScreenProps<RootTabParamList, 'Product'>>();
  return (
    <Pressable
      width={'50%'}
      alignItems="center"
      justifyContent="center"
      p={2}
      // @ts-ignore
      onPress={() => navigation.navigate('Product', product)}>
      <VStack
        space={2}
        alignItems="center"
        justifyContent="center"
        width={'100%'}
        overflow={'hidden'}
        bg="white"
        borderRadius={10}
        shadow={1}>
        <Image
          source={{uri: product.image}}
          style={{
            width: '100%',
            height: 100,
            objectFit: 'cover',
          }}
        />
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </VStack>
    </Pressable>
  );
};

export default ProductItem;
