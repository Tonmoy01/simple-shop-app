import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { getAllProducts } from '../actions/productActions';
import ProductList from './ProductList';

function Products() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.productsGetReducer);
  const { loading, products, filtered } = getProducts;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 my-5'>
          <hr />
          <h1 className='text-center p-3 mb-5'>Products</h1>
          <hr />
        </div>
      </div>
      {loading ? (
        <div className='text-center'>
          <Loader />
        </div>
      ) : (
        <div className='row'>
          {filtered !== undefined
            ? filtered &&
              filtered.map((product) => (
                <ProductList key={product.id} product={product} />
              ))
            : products.map((product) => (
                <ProductList key={product.id} product={product} />
              ))}
        </div>
      )}
    </div>
  );
}

export default Products;
