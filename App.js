import React from "react";
import Navigation from './src/navegation/Navigation'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import mainReducer from './src/redux/reducers/mainReducer';

const store = configureStore({ reducer: mainReducer })

export default function App(){
  return(
    <Provider store={store}>
    <Navigation/>
    </Provider>
  )
}
// import React from 'react';

// import Navigation from './src/navegation/Navigation'
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import mainReducer from './src/redux/reducers/mainReducer';

// const reduxStore = configureStore({ reducer: mainReducer })

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={reduxStore}>
//         <Navigation/>
//     </Provider>
// );