// import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./components/AboutContext/ComponentC";
import { UserProvider } from "./components/AboutContext/UserContext";
// import { Routes, Route } frm "react-router-dom";
// import ParentComponent from "./components/AboutComponents/ParentComponent";
// import PureComponent from "./components/AboutComponents/PureComponent";
// import Fragment from "./components/Fragment/Fragment";
// import Table from "./components/Fragment/Table";
// import UpdateLifeCycleA from "./components/LifeCycleMthods/UpdatingMethods/LifeCycleA";
// import LifeCycleA from "./components/LifeCycleMthods/MountingMethods/LifeCycleA";
// import styles from "./components/StylingAndCSSBasics/myStyle.module.css";
import "./components/cssStyleSheet.css";
// import Counter from "./components/RenderProps/Counter";
// import RenPropsClickCounter from "./components/RenderProps/RenPropsClickCounter";
// import RenPropsHoverCounter from "./components/RenderProps/RenPropsHoverCounter";
// import User from "./components/RenderProps/User";
// import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
// import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
// import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
// import { Home } from "./components/RouterDemo/Home";
// import { About } from "./components/RouterDemo/About";
// import Hero from "./components/ErrorBoundary/Hero.js";
// import AboutGet from "./components/HTTP/AboutGet";
// import AboutPost from "./components/HTTP/AboutPost";
// import PortalsDemo from "./components/PortalsDemo";
// import FRParentInput from "./components/Forwarding Refs/FRParentInput";
// import FocusInput from "./components/Refs/FocusInput";
// import RefsDemo from "./components/Refs/RefsDemo";
// import CSSStyleSheet, {CSSModule,Inline,} from "./components/StylingAndCSSBasics/StylingAndCSSBasics";
// import Hello from "./components/aboutJSX";
// import BasicsOfFormHandling from "./components/BasicsOfFormHandling";
// import IndexAsKeyAntiPattern from "./components/IndexAsKeyAnti-Pattern";
// import ListRendering from "./components/ListRenderingAndKeys";
// import ConditionalRendering from "./components/ConditionalRendering";
// import ParentComponent from "./components/MethodsAsProps/ParentComponent";
// import BindingEventHandlers from "./components/BindingEventHandlers";
// import { Greet } from "./components/typesOfComponents"; // Info: Used when usinng named exported method.
// import Greet, { Greeter, Greeting } from "./components/typesOfComponents";
// import JSXExplanation from "./components/aboutJSX";
// import PropsExplanation from "./components/aboutProps";
// import StateExplanation, { UserMessage } from "./components/aboutState";
// import SetStateExplanation from "./components/aboutSetState";
// import DestructuringPropsAndState, {Welcome,} from "./components/DestructuringPropsAndState";
// import FunctionEventHandler, {ClassEventHandler,} from "./components/EventHandler";

function App() {
  return (
    <div className="App">
      {" "}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet></Greet> //Info: Defaullt tag type */}
      {/* <h2>From Props using functions.</h2> */}
      {/* <Greet name="User" /> */}
      {/* <Greet name="User1"> */}
      {/* <p>This is a children</p> */}
      {/* </Greet> */}
      {/* <Greet name="User1"> */}
      {/* <button>Action</button> */}
      {/* </Greet> */}
      {/* <h2>From Props using class.</h2> */}
      {/* <PropsExplanation name="User" /> Info: Self Closing Tag */}
      {/* <PropsExplanation name="User1"> */}
      {/* <p>This is a children</p> */}
      {/* </PropsExplanation> */}
      {/* <PropsExplanation name="User1"> */}
      {/* <button>Action</button> */}
      {/* </PropsExplanation> */}
      {/* <JSXExplanation /> */}
      {/* <StateExplanation /> */}
      {/* <UserMessage /> */}
      {/* <SetStateExplanation /> */}
      {/* <DestructuringPropsAndState name="Peter" heroName="Spidy" /> */}
      {/* <Welcome name="Bruce" heroName="Superman" /> */}
      {/* <FunctionEventHandler /> */}
      {/* <ClassEventHandler /> */}
      {/* <BindingEventHandlers /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <IndexAsKeyAntiPattern /> */}
      {/* <CSSStyleSheet primary={true} /> */}
      {/* <div className="App">
        <h4 className={styles.sucess}>Sucess</h4>
        <h4 className="error">Error</h4>
      </div> */}
      {/* <Hello /> */}
      {/* <Inline /> */}
      {/* <CSSModule /> */}
      {/* <BasicsOfFormHandling /> */}
      {/*}
      <LifeCycleA />

      <UpdateLifeCycleA />

      <Fragment />

      <Table />

      <PureComponent />

      <ParentComponent />
      <RefsDemo />

      <FocusInput />

      <FRParentInput />

      <PortalsDemo />

      <ErrorBoundary>
        <Hero heroName="SuperMan" />
        <Hero heroName="SuperMan" />
        <Hero heroName="Joker" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="SuperMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="SpiderMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>

      <AboutGet />

      <AboutPost />

      <ClickCounter nameFromApp="From App" />

      <HoverCounter />
      
      <RenPropsClickCounter />

      <RenPropsHoverCounter />

      <User render={(isLoggedIn) => (isLoggedIn ? "User" : "Guest")} />
      {/* <Counter
        render={(count, incrementCount) => (
          <RenPropsClickCounter count={count} incrementCount={incrementCount} />
        )}
      /> 
      <Counter
        render={(count, incrementCount) => (
          <RenPropsHoverCounter
            count={count}
            incrementCounter={incrementCount}
          />
    
      <Counter>
        {(count, incrementCount) => (
          <RenPropsClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCounter) => (
          <RenPropsHoverCounter
            count={count}
            incrementCounter={incrementCounter}
          />
        )}
      </Counter>
      */}
      <UserProvider value="User">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="about" element={<About />} />
//     </Routes>
//   );
// }

export default App;
