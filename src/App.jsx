// import Counter from "./components/Counter"
// import RandomNumber from "./components/RandomNumber"
// import ToDoList from "./components/ToDoList"m
// import CopyButton from "./components/CopyButton"
// import LocalStorage from "./components/LocalStorage"
// import BasicEffect from "./components/BasicEffect"

import { createContext } from "react";
import ComponentsA from "./components/useContextHook/ComponentsA";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  let name = "Yogita";
  let age = 22;

  return (
    <>
      <div>
        {/* <Counter/>
     <ToDoList/> */}
        {/* <RandomNumber/> */}
        {/* <LocalStorage/> */}
        {/* <CopyButton/> */}
        {/* <BasicEffect/> */}
      </div>

      <div>
        <Data.Provider value={name}>
          <Data1.Provider value={age}>
            <ComponentsA />
          </Data1.Provider>
        </Data.Provider>
      </div>
    </>
  );
};

export default App;
