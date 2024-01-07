import React, {useEffect, useState} from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../navigation';
import {Row} from 'native-base';
import ProductItem from '../../components/ProductItem';
// import {products} from '../../data/products';
import Layout from '../../components/Layout';
import axios from 'axios';
import {ProductProps} from '../../types';
import {api_url} from '../../data/url';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

const Home: React.FC<Props> = ({navigation}) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const LoadProducts = async () => {
    setLoading(true);
    const response = await axios.get(`${api_url}/api/app-products`);
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
      </Row>
    </Layout>
  );
};

export default Home;
