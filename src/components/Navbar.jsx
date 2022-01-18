import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const cart = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const location = useLocation();

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          ShopApp
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse d-flex justify-content-end'
          id='navbarSupportedContent'
        >
          {location.pathname.split('/')[1] !== cart && (
            <form className='d-flex justify-content-center'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                onChange={(e) => {
                  dispatch({
                    type: 'FILTER_BY_SEARCH',
                    payload: e.target.value,
                  });
                }}
              />
            </form>
          )}
          <ul className='navbar-nav d-flex mb-2 mb-lg-0'>
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
                <i className='fa fa-shopping-cart'></i> Cart ({cart.length})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
