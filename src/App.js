import React from 'react';
import HeadingPage from './Components/HeadingPage';
import DataProvider from './Components/Store/CartProvider';
import classes from './Components/Modal/Modal.module.css'
function App() {
  return (
    <DataProvider className={classes.main} >
      <HeadingPage/>
    </DataProvider>
  );
}

export default App;
