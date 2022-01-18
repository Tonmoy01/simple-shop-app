import Banner from '../assets/product.jpg';
import Products from '../products/Products';

function Home() {
  return (
    <>
      <div className='card bg-dark text-white'>
        <img src={Banner} className='card-img' alt='Banner' />
      </div>
      <Products />
    </>
  );
}

export default Home;
