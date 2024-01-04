// make product item component using native base
import React from 'react';
import {ProductProps} from '../../types';
import {VStack, Box, Pressable, Text, Image} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {RootTabParamList} from '../../navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {api_url} from '../../data/url';

type Props = {
  product: ProductProps;
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
      <VStack space={2} maxHeight={200} width={'100%'}>
        <Box
          p={1}
          bg="white"
          height={'100%'}
          overflow={'hidden'}
          shadow={1}
          width={'100%'}
          borderRadius={10}
          alignItems="center"
          justifyContent="space-between">
          <Image
            source={{
              uri: `${api_url}/storage/${product?.image?.path}`,
            }}
            alt={product?.name}
            style={{
              width: '100%',
              height: 130,
              objectFit: 'contain',
            }}
          />
          <Text>{product.name}</Text>
          <Text fontWeight={'bold'} color={'green.800'}>
            {product.price} TL
          </Text>
        </Box>
      </VStack>
    </Pressable>
  );
};

export default ProductItem;
