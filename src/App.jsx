// import Counter from "./components/Counter"
// import RandomNumber from "./components/RandomNumber"
// import ToDoList from "./components/ToDoList"m
// import CopyButton from "./components/CopyButton"
// import LocalStorage from "./components/LocalStorage"
// import BasicEffect from "./components/BasicEffect"

// import { createContext } from "react";
// import ComponentsA from "./components/useContextHook/ComponentsA";

// export const Data = createContext();
// export const Data1 = createContext();

// const App = () => {
//   let name = "Yogita";
//   let age = 22;

//   return (
//     <>
//       <div>
//         {/* <Counter/>
//      <ToDoList/> */}
//         {/* <RandomNumber/> */}
//         {/* <LocalStorage/> */}
//         {/* <CopyButton/> */}
//         {/* <BasicEffect/> */}
//       </div>

//       <div>
//         <Data.Provider value={name}>
//           <Data1.Provider value={age}>
//             <ComponentsA />
//           </Data1.Provider>
//         </Data.Provider>
//       </div>
//     </>
//   );
// };
// export default App;

// import { UserProvider } from "./components/useContextHook/UserProfileUsingUseContext/UserContext";
// import UserProfile from "./components/useContextHook/UserProfileUsingUseContext/UserProfile";

// const App = () => {
//   return (
//     <UserProvider>
//       <UserProfile />
//     </UserProvider>
//   );
// };

// export default App;

import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <h1>Count : {state.count}</h1>
    </div>
  );
};

export default App;
