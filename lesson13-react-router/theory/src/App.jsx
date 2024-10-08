import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
