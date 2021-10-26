import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './components/Nav';
import Products from './views/Products';
import { Factory, Model, Server } from 'miragejs';
import ProductDetails from './views/ProductDetails';
import React, { useMemo, useState } from 'react';

new Server({
  models: {
    product: Model,
    cart: Model,
  },

  factories: {
    product: Factory.extend({
      name(i) {
        return `Produkt dla programisty bardzo potrzebny ${i + 1}`;
      },
      description() {
        return `Tu powinien być opis produktu`;
      },
      price() {
        return `${(Math.random() * 100).toFixed(2)}$`;
      },
      image(i) {
        return `/product-${i % 3 === 0 ? 1 : 2}.jpg`;
      },
      inStock(i) {
        return Math.round(Math.random() * 20);
      },
    }),
  },

  routes() {
    this.namespace = 'api';

    this.get('/products');

    this.get('/products/:id', (schema: any, request: any) => {
      let id = request.params.id;
      return schema.products.find(id);
    });
  },

  seeds(server: any) {
    server.createList('product', 100);
  },
});

export const CartContext = React.createContext({
  count: 0,
  setCount: (count: number) => {},
});

function App() {
  const [count, setCount] = useState(0);
  const countValue: any = useMemo(
    () => ({
      count,
      setCount,
    }),
    [count]
  );
  return (
    <CartContext.Provider value={countValue}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/product-details/:id">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Redirect to="/products" />
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
