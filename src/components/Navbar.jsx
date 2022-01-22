import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterProducts, clearFilter } from '../actions/productActions';

function Navbar() {
  const dispatch = useDispatch();
  const text = useRef('');

  const cart = useSelector((state) => state.cartReducer);
  const allProducts = useSelector((state) => state.productsGetReducer);

  const { filtered } = allProducts;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      dispatch(filterProducts(e.target.value));
    } else {
      dispatch(clearFilter());
    }
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          ShopApp
        </NavLink>
        <button
          className='navbar-toggler mb-2'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <form className='d-flex' style={{ margin: '0 auto' }}>
            <input
              ref={text}
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={onChange}
            />
          </form>
          <ul
            className='navbar-nav mb-2 mb-lg-0 justify-content-end'
            style={{ marginLeft: 'auto' }}
          >
            <li className='nav-item'>
              <NavLink className='nav-link active' aria-current='page' to='/'>
                <i className='fa fa-home'></i>Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                <i className='fa fa-question'></i>About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/cart' className='nav-link'>
                <i className='fa fa-shopping-cart'></i> ({cart.length})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
