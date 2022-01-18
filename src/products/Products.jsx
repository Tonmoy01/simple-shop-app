import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loader from '../components/Loader';
import { getAllProducts } from '../actions/productActions';

function Products() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.productGetReducer);
  const { loading, error, products, filterProduct } = getProducts;

  const transformProduct = () => {
    let sortedProducts = products;

    if (filterProduct) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(filterProduct)
      );
    }
    console.log(filterProduct);

    return sortedProducts;
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const renderAllProducts =
    transformProduct() &&
    products.map((product) => (
      <div key={product.id} className='col-md-3 mb-4'>
        <div
          className='card text-center p-4 mb-4'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          title={product.title}
        >
          <img
            src={product.image}
            className='card-img-top'
            alt={product.title}
            height='250px'
          />
          <div className='card-body'>
            <h5 className='card-title mb-2 text-truncate'>{product.title}</h5>
            <p className='card-text text-primary lead fw-bold'>
              ${product.price}
            </p>
            <NavLink
              to={`/product/${product.id}`}
              className='btn btn-outline-dark'
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    ));

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
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className='row'>{renderAllProducts}</div>
      )}
    </div>
  );
}

export default Products;
