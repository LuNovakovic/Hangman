import React from "react";
import { Provider } from 'react-redux';
import './App.css';
import Hangman from "./components/Hangman";
import store from "./store";


const App = () => {
  return (
    <Provider store={store}>
      <Hangman />

    </Provider>

  )
};

export default App;
