/*
import logo from './logo.svg';
*/
import './App.css';
import { createStore } from 'redux';
import { allReducers } from './simpleExamples/reducers';
import { Provider } from 'react-redux';
import Counter from './simpleExamples/components/Counter';
import Login from './simpleExamples/components/Login';
import BankTransaction from './simpleExamples/components/BankTransaction';

const store = createStore( allReducers );

function App() {
  return (
    <>
      <h1>
        From APP
      </h1>
      <Provider store={store}>
        <Counter />
        <Login />
        <BankTransaction />
      </Provider>
    </>
  );
}

export default App;
