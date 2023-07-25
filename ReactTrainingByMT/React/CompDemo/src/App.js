/*
import logo from './logo.svg';
import Home from './comps/home';
import { Header, Footer } from './comps/footer';
import { Greeting } from './comps/greeting'
import Todo from './comps/todo/todos'
import ParentContainer from './comps/animal/parentContainer';
import SimpleState from './comps/hooksDemo/useStateDemo/simpleState';
import SimpleForm from './comps/hooksDemo/useStateDemo/simpleForm';
import SimpleUseEffect from './comps/hooksDemo/useEffectDemo/simpleUseEffect';
import CovidStats from './comps/hooksDemo/useEffectDemo/covidData';
import UserForm from './comps/hooksDemo/useReducerDemo/formHook(CustomHook)/userForm';
import ShippingAddress from './comps/hooksDemo/customHookDemo/shippingAddress';
import CounterReducer from './comps/hooksDemo/useReducerDemo/counterReducer';
import MemoRender from './comps/hooksDemo/useMemoDemo/memoDemo2';
import MemoContainer from './comps/hooksDemo/useMemoDemo/memoContainer';
import Title from './comps/hooksDemo/useRefDemo/titleRef';
import Menu from './comps/hooksDemo/useRefDemo/menuRef';
import { AboutUs, Home, Services } from './routerDemo/page';
import ComponentA from './comps/hooksDemo/ContextAPIDemo/componentA';
import Navigation from './routerDemo/navigation';
import { CarList } from './routerDemo/cars_project/CarList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarLayout from './routerDemo/cars_project/CarLayout';
import CarRouteConfig from './routerDemo/cars_project/RouterConfig';
import CarHome from './routerDemo/cars_project/cars_home';
import { CarList } from './routerDemo/cars_project/CarList';
import { Card } from './routerDemo/cars_project/Card';
import CarDetail from './routerDemo/cars_project/Details';
import BasicApp from './routerDemo/authDemo/basicApp';
import { AuthProvider } from './routerDemo/authDemo/auth_context';
*/
import React, { createContext, Suspense } from 'react';
import './App.css';
import Status from './LazyLoading/status';
import { GridLoader } from 'react-spinners'

export const NameContext = createContext();
export const ColorContext = createContext();

function App() {
  return (
    <>
    {/* 
      <React.Fragment></React.Fragment>
      <h1>React Demo</h1>
      <Home />
      <Header />
      <Footer />
      <Todo />
      <Greeting /> 
      <ParentContainer/>
      <SimpleState />
      <SimpleForm />
      <SimpleUseEffect />
      <CovidStats />
      <UserForm />
      <CounterReducer />
      <ShippingAddress />
      <Title />
      <Menu/>
      <MemoContainer />
      <Navigation />
    <BrowserRouter>
    <Navigation />
    <Routes>
    <Route path='/' element = {<Home />}></Route>
    <Route path='/about' element = {<AboutUs />}></Route>
    <Route path='/services/:id' element = {<Services />}></Route>
    
    </Routes>
    </BrowserRouter>
    <NameContext.Provider value={'Alice'}>
    <ColorContext.Provider value={'red'}>
      <ComponentA />
    </ColorContext.Provider>
    </NameContext.Provider>
    <CarList />
    <BrowserRouter>
      <CarLayout />
    </BrowserRouter>
      <CarRouteConfig />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<CarLayout/>}>
                <Route path='/' element={<CarHome/>}/>
                <Route path='/cars' element={<CarList/>}/>
                <Route path='/cars/:id' element={<CarDetail/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    <AuthProvider>
      <BasicApp />
    </AuthProvider>
    */}
    <h2>From App</h2>
    <Suspense fallback={<GridLoader/>}>
      {/* <Status/> */}
    </Suspense>
    </>
  );
}

export default App;
