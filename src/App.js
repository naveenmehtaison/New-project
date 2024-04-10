import React from 'react';
import HeadingPage from './Components/HeadingPage';
import DataProvider from './Components/Store/CartProvider';
function App() {
  return (
    <DataProvider>
      <HeadingPage/>
    </DataProvider>
  );
}

export default App;
