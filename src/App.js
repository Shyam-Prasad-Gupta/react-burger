import React from 'react';
import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
//import TestComponent from '../src/components/UI/TestComponent';

function App() {
  return (
    <div>
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
    {/* <TestComponent></TestComponent> */}
    </div>
  );
}

export default App;
