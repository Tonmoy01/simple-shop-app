import { NavLink } from 'react-router-dom';
import Rating from '../components/Rating';

function ProductList({ product }) {
  return (
    <>
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
            <Rating
              value={product.rating.rate}
              text={`${product.rating.count} reviews`}
            />
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
    </>
  );
}

export default ProductList;
