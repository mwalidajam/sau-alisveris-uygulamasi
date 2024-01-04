import React, {useState, useEffect} from 'react';
import {RootTabParamList} from '../../navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Text, Box, Image, Divider} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Layout from '../../components/Layout';
import {ProductProps} from '../../types';
import axios from 'axios';
import {api_url} from '../../data/url';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';

type Props = BottomTabScreenProps<RootTabParamList, 'Product'>;

const Product: React.FC<Props> = ({navigation, route: {params}}) => {
  const userData = useAppSelector(state => state.user);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductProps>();
  const LoadProduct = async () => {
    setLoading(true);
    const response = await axios.get(`${api_url}/api/products/${params.id}`);
    setProduct(response.data?.product);
    if (response.data?.product?.is_favorite) {
      setIsFavorite(response.data.product.is_favorite);
    }
    setLoading(false);
  };
  const addToFavorite = async () => {
    const token = userData.token;
    const {data} = await axios.post(
      `${api_url}/api/customers/favorite-products/add`,
      {
        product_id: params.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (data.status === 'success') {
      setIsFavorite(true);
    }
  };
  const removeFromFavorite = async () => {
    const token = userData.token;
    const {data} = await axios.post(
      `${api_url}/api/customers/favorite-products/remove`,
      {
        product_id: params.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (data.status === 'success') {
      setIsFavorite(false);
    }
  };
  useEffect(() => {
    LoadProduct();
  }, []);
  return (
    <Layout onRefresh={LoadProduct} refreshing={loading}>
      {product && (
        <Box>
          <Image
            source={{
              uri: `${api_url}/storage/${product?.image?.path}`,
            }}
            alt={product?.name}
            resizeMode="contain"
            height={200}
            roundedTop="md"
            backgroundColor={'red'}
          />
          <Divider />
          <Box p={4}>
            <Box flexDirection="row" justifyContent="space-between">
              <Text fontSize="xl" fontWeight="bold">
                {product?.name}
              </Text>
              {
                <Icon
                  name={isFavorite ? 'heart' : 'heart-o'}
                  size={30}
                  color={isFavorite ? 'red' : 'gray'}
                  onPress={() => {
                    if (userData.token) {
                      if (isFavorite) {
                        removeFromFavorite();
                      } else {
                        addToFavorite();
                      }
                    } else {
                      navigation.navigate('Profile');
                    }
                  }}
                />
              }
            </Box>
            <Text fontSize="md" fontWeight={'bold'} color="green.800">
              {product?.price} TL
            </Text>
            <Text fontSize="md" color="gray.500">
              {product?.details}
            </Text>
          </Box>
        </Box>
      )}
    </Layout>
  );
};

export default Product;
