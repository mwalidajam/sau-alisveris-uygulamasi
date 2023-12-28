import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../navigation';
import {Row} from 'native-base';
import ProductItem from '../../components/ProductItem';
import {products} from '../../data/products';
import Layout from '../../components/Layout';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <Layout>
      <Row flexWrap={'wrap'}>
        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </Row>
    </Layout>
  );
};

export default Home;
