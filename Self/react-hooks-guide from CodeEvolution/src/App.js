import React from "react";
import "./App.css";
import UserForm from "./components/About Custom-Hooks/userForm";
/*
import CounterOne from "./components/About Custom-Hooks/counterOne";
import CounterTwo from "./components/About Custom-Hooks/counterTwo";
import DocTitleOne from "./components/About Custom-Hooks/docTitleOne";
import DocTitleTwo from "./components/About Custom-Hooks/docTitleTwo";
import ClassFocusInput from "./components/About useRefs/classFocusInput";
import FocusInput from "./components/About useRefs/focusInput";
import HookTimer from "./components/About useRefs/hookTimer";
import Counter from "./components/About useMemo/counter";
import ClassTimer from "./components/About useRefs/classTimer";
import ParentComponent from "./components/About useCallback/parentComponent";
import DataFetchingTwo from "./components/About useReducer/Fetching Data/dataFetchingTwo";
import DataFetchingOne from "./components/About useReducer/Fetching Data/dataFetchingOne";
import PutInsideApp from "./components/About useReducer/useReducer with useContext/putInsideApp";
import CounterThree from "./components/About useReducer/counterThree";
import CounterTwo from "./components/About useReducer/counterTwo";
import CounterOne from "./components/About useReducer/counterOne";
import ComponentC from "./components/About useContext/componentC";
import DataFetching from "./components/About useEffect/dataFetching";
import IntervalClassCounter from "./components/About useEffect/intervalClassCounter";
import IntervalHookCounter from "./components/About useEffect/intervalHookCounter";
import MouseContainer from "./components/About useEffect/mouseContainer";
import ClassCounter1 from "./components/About useEffect/classCounter1";
import ClassMouse from "./components/About useEffect/classMouse";
import HookCounter1 from "./components/About useEffect/hookCounter1";
import HookMouse from "./components/About useEffect/hookMouse";
import ClassCounter from "./components/About useState/classCounter";
import ClassCounter2 from "./components/About useState/classCounter2";
import HookCounter from "./components/About useState/hookCounter";
import HookCounter2 from "./components/About useState/hookCounter2";
import HookCounter3 from "./components/About useState/hookCounter3";
import HookCounter4 from "./components/About useState/hookCounter4";
*/

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* 
      <h4>This is a Class Counter</h4> <ClassCounter />
      <h4>This is a Class Counter2</h4> <ClassCounter2 />
      <h4>This is a Hook Counter</h4> <HookCounter />
      <h4>This is a Hook Counter 2</h4> <HookCounter2 />
      <h4>This is a Hook Counter 3</h4> <HookCounter3 /> 
      <h4>This is a Hook Counter 4</h4> <HookCounter4 />
      <h4>This is a Class Counter </h4> <ClassCounter1 />
      <h4>This is a Class Mouse</h4> <ClassMouse />
      <h4>This is a Hook Counter</h4> <HookCounter1 />
      <h4>This is a Hook Mouse</h4> <HookMouse />
      <h4>This is a Mouse Container</h4> <MouseContainer />
      <h4>This is a Class Interval Counter</h4> <IntervalClassCounter />
      <h4>This is a Hook Interval Counter</h4> <IntervalHookCounter />
      <h4>This is a Hook Fetcher</h4> <DataFetching />
      <h4>This is Context</h4>
      <UserContext.Provider value={"React"}>
        <ChannelContext.Provider value={"It is a FrameWork."}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <h4>This is a Reducer</h4> <CounterOne />
      <h4>This is a Reducer</h4> <CounterTwo />
      <h4>This is a Reducer</h4> <CounterThree />
      <h4>This is a useReducer using useContext</h4> <PutInsideApp />
      <h4>This is a Fetch usin useState</h4> <DataFetchingOne />
      <h4>This is a Fetch usin useReducer</h4> <DataFetchingTwo />
      <h4>This is a useCallback Hook</h4> <ParentComponent />
      <h4>This is a Ref using Class</h4> <ClassFocusInput />
      <h4>This is a class example reference for useRef</h4> <ClassTimer />
      <h4>This is a useRef Hook</h4> <HookTimer />
      <h4>This is a useMemo Hook</h4> <Counter />
      <h4>This is a useRef Hook</h4> <FocusInput />
      <h4>This is a Custom-Hook</h4> <DocTitleOne />
      <h4>This is a Custom-Hook</h4> <DocTitleTwo />
      <h4>This is a Custom-Hook</h4> <CounterOne />
      <h4>This is a Custom-Hook</h4> <CounterTwo />
      */}
      <h4>This is a Custom-Hook</h4> <UserForm />
    </div>
  );
}

export default App;
