import React, {useState, useEffect} from 'react';
import {RootTabParamList} from '../../navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import Layout from '../../components/Layout';
import axios from 'axios';
import {api_url} from '../../data/url';
import {ProductProps} from '../../types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import ProductItem from '../../components/ProductItem';
import {Text, Box, Image, Divider, Row} from 'native-base';

type Props = BottomTabScreenProps<RootTabParamList, 'Favorite'>;

const Favorite: React.FC<Props> = ({navigation}) => {
  const userData = useAppSelector(state => state.user);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const LoadProducts = async () => {
    setLoading(true);
    const token = userData.token;
    const response = await axios.get(
      `${api_url}/api/customers/favorite-products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setProducts(response.data?.products);
    setLoading(false);
  };
  useEffect(() => {
    LoadProducts();
  }, []);
  return (
    <Layout
      onRefresh={() => {
        LoadProducts();
      }}
      refreshing={loading}>
      <Row flexWrap={'wrap'}>
        {products?.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
        {products.length === 0 && (
          <Box flex={1} justifyContent={'center'} alignItems={'center'}>
            <Text>Henüz favori ürününüz bulunmamaktadır.</Text>
          </Box>
        )}
      </Row>
    </Layout>
  );
};

export default Favorite;
