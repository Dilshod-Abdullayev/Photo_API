// import React from "react";
// import ThemeBtn from "./components/ThemeBtn";
// import Fetch from "./components/Fetch";
// import "antd/dist/reset.css";
// import "./App.css";
// export default function App() {
//   return (
//     <div className="App dark">
//       <ThemeBtn />
//       <Fetch />
//     </div>
//   );
// }

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const elements = [
    { id: 1, name: "Element 1", content: "Content 1" },
    { id: 2, name: "Element 2", content: "Content 2" },
    { id: 3, name: "Element 3", content: "Content 3" },
  ];

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />}>
          {elements.map((element) => (
            <Route
              key={element.id}
              path={`/element/${element.id}`}
              element={<ElementDetails element={element} />}
            />
          ))}
        </Route>
      </Routes> */}
      {elements.map((item) => {
        <h1 key={item.id}>{item.content}</h1>
      })}
      <h1>Hello</h1>
    </div>
  );
}

// function Home() {
//   return <div>Welcome to the home page</div>;
// }

// function ElementDetails({ element }) {
//   return (
//     <div>
//       <h2>{element.name}</h2>
//       <p>{element.content}</p>
//       <Link to="/">Back to Home</Link>
//     </div>
//   );
// }

export default App;
