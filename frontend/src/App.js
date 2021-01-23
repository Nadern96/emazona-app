import react from 'react';
import data from './data';
import Product from './components/Product';

function App() {
  return (
      <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Emazona</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>

      <main>
        <div className="row center">
        {
          data.products.map(product => {
            return(
              <Product key={product._id} product={product}></Product>
          );
            
          })
        }
          
        </div>
      </main>

      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
