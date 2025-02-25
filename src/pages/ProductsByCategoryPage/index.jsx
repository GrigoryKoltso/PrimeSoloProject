import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../requests/products';
import ProductsContainer from './../../components/ProductsContainer/index';

const ProductsByCategoryPage = () => {
  const { category_name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (category_name) {
      dispatch(getProductsByCategory(category_name));
    }
  }, [category_name, dispatch]);

  const productsByCategoryState = useSelector((state) => state.productsByCategory);

  const products = productsByCategoryState.data?.data || []; 

  return (
    <div className="container">
      {<ProductsContainer products={products} />}
    </div>
  );
};

export default ProductsByCategoryPage;
