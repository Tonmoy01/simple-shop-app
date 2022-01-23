import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  addToCart,
  deleteToCart,
  deleteFromCartItem,
} from '../actions/cartActions';

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer);

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleDelete = (item) => {
    dispatch(deleteToCart(item));
  };

  const deleteCartItem = (id) => {
    dispatch(deleteFromCartItem(id));
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className='container'>
          <h2 className='mt-5'>Your cart is empty</h2>
          <NavLink className='btn btn-dark my-3' to='/'>
            Go Back
          </NavLink>
        </div>
      ) : (
        <>
          <div className='container'>
            <NavLink className='btn btn-dark my-3' to='/'>
              Go Back
            </NavLink>
          </div>
          <div className='container'>
            <div className='row d-flex justify-content-between'>
              <div className='col-md-8'>
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className='px-4 my-5 bg-light rounded-3 py-5'
                  >
                    <div className='container py-4'>
                      <div className='row justify-content-center'>
                        <div className='col-md-4'>
                          <img
                            src={item.image}
                            alt={item.title}
                            height='200px'
                            width='180px'
                          />
                        </div>
                        <div className='col-md-4'>
                          <h3>{item.title}</h3>
                          <p className='lead fw-bold'>
                            {item.qty} X ${item.price} = $
                            {(item.qty * item.price).toFixed(2)}
                          </p>
                          <div className='d-flex'>
                            <button
                              className='btn btn-outline-danger'
                              onClick={() => handleDelete(item)}
                            >
                              <i className='fa fa-minus'></i>
                            </button>
                            <input
                              type='number'
                              className='form-control text-center d-inline'
                              value={item.qty}
                              readOnly
                              style={{ width: '65px' }}
                            />
                            <button
                              className='btn btn-outline-success'
                              onClick={() => handleAdd(item)}
                            >
                              <i className='fa fa-plus'></i>
                            </button>
                            <i
                              className='fas fa-trash mt-2 mx-3'
                              style={{ fontSize: '20px', cursor: 'pointer' }}
                              onClick={() => deleteCartItem(item.id)}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='col-md-4 my-5'>
                <h4>Order Summary</h4>
                <hr />
                <p className='lead fw-bold'>
                  Subtotal:{' '}
                  <span>
                    {cart.reduce((acc, item) => acc + Number(item.qty), 0)}
                    (Items)
                  </span>
                </p>
                <p className='lead fw-bold'>
                  Est. total:{' '}
                  <span>
                    $
                    {cart
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </span>
                </p>

                <hr />

                <div className='d-grid'>
                  <button className='btn fw-bold btn-dark text-light '>
                    Check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
