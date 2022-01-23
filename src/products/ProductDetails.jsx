import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import { getProductDetails } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

import { PRODUCT_DETAILS_RESET } from '../constants/productConstants';

function ProductDetails() {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetailsReducer);
  const { id } = useParams();

  const { loading, product } = productDetails;

  useEffect(() => {
    dispatch({ type: PRODUCT_DETAILS_RESET });

    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className='container mb-5'>
        <NavLink className='btn btn-dark my-3' to='/'>
          Go Back
        </NavLink>
        <div className='row'>
          {loading ? (
            <div className='text-center'>
              <Loader />
            </div>
          ) : (
            <>
              <div className='col md-6 my-5'>
                <img
                  src={product.image}
                  alt={product.title}
                  height='400px'
                  width='400px'
                />
              </div>
              <div className='col-md-6 my-5'>
                <h4 className='text-uppercase text-black-50'>
                  {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <div className='lead'>
                  <Rating
                    value={product.rating.rate}
                    text={`${product.rating.count} reviews`}
                  />
                </div>
                <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                <p className='lead'>{product.description}</p>

                <button
                  className='btn btn-outline-dark px-4 py-2'
                  onClick={() => addProduct(product)}
                >
                  Add to cart
                </button>
                <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
                  Go to cart
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
